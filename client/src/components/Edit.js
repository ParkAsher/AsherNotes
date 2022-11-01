import axios from 'axios';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactQuill, { Quill } from 'react-quill';
import "react-quill/dist/quill.snow.css";
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

import { ButtonWrap, CancelButton, CategoryInput, EditWrap, QuillWrapper, SubmitButton, ThumbnailInput, ThumbnailText, TitleInput } from '../assets/EditorStyle.js';

import ImageResize from 'quill-image-resize';
Quill.register('modules/ImageResize', ImageResize);

hljs.configure({
    languages: ['javascript', 'ruby', 'python', 'rust'],
})

function Edit() {

    let params = useParams();
    let navigate = useNavigate();
    const quillRef = useRef();

    const [Title, setTitle] = useState("");
    const [Category, setCategory] = useState("");
    const [CategoryList, setCategoryList] = useState([]);
    const [Content, setContent] = useState("");

    const [Thumbnail, setThumbnail] = useState("");

    // 글 정보 가져오기
    useEffect(() => {

        let body = {
            postNum: params.postNum
        }

        axios.post("/api/post/detail", body).then((res) => {

            if (res.data.success) {

                setTitle(res.data.postInfo.title);
                setCategory(res.data.postInfo.category);
                setContent(res.data.postInfo.content);
                setThumbnail(res.data.postInfo.thumbnail);
            }

        }).catch((err) => {
            console.log(err);
        })

    }, [params.postNum])

    // 카테고리 리스트 가져오기
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

    // Quill imageHandler
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
                [{ 'header': [false, 1, 2, 3, 4, 5] }],
                ['bold', 'italic', 'underline', 'blockquote', 'code-block'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'align': [] }],
                ['image'],
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
            thumbnail: Thumbnail,
            postNum: params.postNum,
        }

        axios.post("/api/post/edit", body).then((res) => {
            if (res.data.success) {
                alert("글 수정이 완료되었습니다.");
                navigate(`/post/${params.postNum}`);
            } else {
                alert("글 수정 실패!");
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <EditWrap>
            <TitleInput placeholder='제목을 입력하세요..' value={Title} onChange={onChangeTitle} />
            <CategoryInput onChange={onChangeCategory} value={Category}>
                {CategoryList.map((category, idx) => {
                    return (
                        <option key={idx} value={category.category}>{category.category}</option>
                    );
                })}
            </CategoryInput>
            <ThumbnailInput type="file" accept="image/*" onChange={(e) => FileUpload(e)}></ThumbnailInput>
            {
                Thumbnail ? <ThumbnailText>{Thumbnail}</ThumbnailText> : ""
            }
            <QuillWrapper>
                <ReactQuill ref={quillRef} modules={modules} theme="snow" value={Content} onChange={setContent}></ReactQuill>
            </QuillWrapper>
            <ButtonWrap>
                <SubmitButton onClick={(e) => onSubmit(e)}>수정</SubmitButton>
                <CancelButton onClick={() => { localStorage.setItem('category', ""); window.location.href = "/"; }}>취소</CancelButton>
            </ButtonWrap>
        </EditWrap>
    )
}

export default Edit