import React, { useEffect, useMemo, useRef, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactQuill, { Quill } from 'react-quill';
import "react-quill/dist/quill.snow.css";
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

/* assets */
import { ButtonWrap, CancelButton, CategoryInput, QuillWrapper, SubmitButton, ThumbnailInput, TitleInput } from '../assets/EditorStyle.js';

import ImageResize from 'quill-image-resize';
Quill.register('modules/ImageResize', ImageResize);

hljs.configure({
    languages: ['javascript', 'ruby', 'python', 'rust'],
})

function Editor() {

    const [Title, setTitle] = useState("");
    const [Category, setCategory] = useState("개발");
    const [CategoryList, setCategoryList] = useState([]);
    const [Content, setContent] = useState("");

    const [Thumbnail, setThumbnail] = useState("");

    const navigate = useNavigate();

    const quillRef = useRef();

    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (!user._id) {
            alert("로그인 한 회원만 글을 작성할 수 있습니다.");
            navigate("/login");
        }
    }, [user])

    // 카테고리 가져오기
    const getCategoryList = () => {

        axios.post("/api/category/list").then((res) => {

            if (res.data.success) {
                setCategoryList([...CategoryList, ...res.data.CategoryList]);
            }

        }).catch((err) => {
            console.log(err);
        })

    }

    useEffect(() => {
        getCategoryList();
    }, [])

    // imageHandler
    const imageHandler = () => {

        const input = document.createElement("input");

        input.setAttribute("type", 'file');
        input.setAttribute("accept", "image/*");
        input.click();

        input.addEventListener('change', async () => {
            const file = input.files[0];

            var formData = new FormData();
            formData.append("file", file);

            axios.post("/api/post/image", formData).then((res) => {

                console.log(res.data.filePath);

                const editor = quillRef.current.getEditor();
                const range = editor.getSelection();

                editor.insertEmbed(range.index, 'image', res.data.filePath);

            }).catch((err) => {
                console.log(err);
            })
        })
    }

    const modules = useMemo(() => ({
        syntax: {
            highlight: text => hljs.highlightAuto(text).value,
        },
        toolbar: {

            container: [
                [{ 'font': [] }, { 'size': [] }],
                [{ 'header': 1 }, { 'header': 2 }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
                [{ 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' },],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'align': [] }],
                ['link', 'image'],
            ],
            handlers: {
                image: imageHandler,
            },
        },
        ImageResize: {
            parchment: Quill.import('parchment')
        }
    }), [])

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeCategory = (e) => {
        setCategory(e.target.value);
    }

    // 썸네일 업로드
    const FileUpload = (e) => {
        var formData = new FormData();
        formData.append("file", (e.target.files[0]));

        axios.post("/api/post/thumbnail", formData).then((res) => {
            setThumbnail(res.data.filePath);
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!Title || !Content) {
            return alert("모든 항목을 채워주세요!");
        }

        let body = {
            title: Title,
            category: Category,
            content: Content,
            userid: user.userid,
            thumbnail: Thumbnail
        }

        axios.post("/api/post/submit", body).then((res) => {
            if (res.data.success) {
                alert("글 작성 완료.");
                window.location.href = "/";
            } else {
                alert("글 작성 실패.");
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <TitleInput placeholder='제목을 입력하세요..' value={Title} onChange={onChangeTitle} />
            <CategoryInput onChange={onChangeCategory}>
                {CategoryList.map((category, idx) => {
                    return (
                        <option key={idx} value={category.category}>{category.category}</option>
                    );
                })}
            </CategoryInput>
            <ThumbnailInput type="file" accept="image/*" onChange={(e) => FileUpload(e)}></ThumbnailInput>
            <QuillWrapper>
                <ReactQuill ref={quillRef} modules={modules} theme="snow" value={Content} onChange={setContent}></ReactQuill>
            </QuillWrapper>
            <ButtonWrap>
                <SubmitButton onClick={(e) => onSubmit(e)}>작성</SubmitButton>
                <CancelButton onClick={() => { localStorage.setItem('category', ""); window.location.href = "/"; }}>취소</CancelButton>
            </ButtonWrap>
        </>
    )
}

export default Editor