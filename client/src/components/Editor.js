import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

/* assets */
import { CategoryInput, QuillWrapper, TitleInput } from '../assets/EditorStyle.js';


hljs.configure({
    languages: ['javascript', 'ruby', 'python', 'rust'],
})

function Editor() {

    const [Title, setTitle] = useState("");
    const [Category, setCategory] = useState("");
    const [Content, setContent] = useState("");

    const quillElement = useRef(null);
    const quillInstance = useRef(null);

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

    return (
        <>
            <TitleInput placeholder='제목을 입력하세요..' value={Title} onChange={onChangeTitle} />
            <CategoryInput onChange={onChangeCategory}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </CategoryInput>
            <QuillWrapper>
                <div ref={quillElement}></div>
            </QuillWrapper>
        </>
    )
}

export default Editor