import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

/* assets */
import { ButtonWrap, CancelButton, CategoryInput, QuillWrapper, SubmitButton, TitleInput } from '../assets/EditorStyle.js';

hljs.configure({
    languages: ['javascript', 'ruby', 'python', 'rust'],
})

function Editor() {

    const [Title, setTitle] = useState("");
    const [Category, setCategory] = useState("");
    const [CategoryList, setCategoryList] = useState([]);
    const [Content, setContent] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const quillElement = useRef(null);
    const quillInstance = useRef(null);

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

    useEffect(() => {

        quillInstance.current = new Quill(quillElement.current, {
            theme: 'snow',
            placeholder: '내용을 작성하세요..',
            modules: {
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

                },

            },
        });

        const quill = quillInstance.current;
        quill.on('text-change', (delta, oldDelta, source) => {
            if (source === 'user') {
                setContent(quill.root.innerHTML);
            }
        });

    }, [])

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeCategory = (e) => {
        setCategory(e.target.value);
    }

    useEffect(() => {
        console.log(Category);
    }, [Category])


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
        }

        axios.post("/api/post/submit", body).then((res) => {
            if (res.data.success) {
                alert("글 작성 완료.");
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
            <QuillWrapper>
                <div ref={quillElement}></div>
            </QuillWrapper>
            <ButtonWrap>
                <SubmitButton onClick={(e) => onSubmit(e)}>작성</SubmitButton>
                <CancelButton>취소</CancelButton>
            </ButtonWrap>
        </>
    )
}

export default Editor