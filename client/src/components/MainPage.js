import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

/* component */
import List from './List.js';

/* assets */
import { CategoryWrap, LoadMore, MainPageWrap, PostListWrap } from '../assets/MainPageStyle.js';

function MainPage() {

    const [PostList, setPostList] = useState([]);

    const [Skip, setSkip] = useState(0);

    const [IsLoadMore, setIsLoadMore] = useState(true);

    const [Category, setCategory] = useState(localStorage.getItem('category'));

    const [BtnActive, setBtnActive] = useState(localStorage.getItem('category'));

    // 첫 더불러오기
    const getPostListMore = () => {

        let body = {
            skip: Skip,
            category: Category,
        }

        axios.post("/api/post/list", body).then((res) => {

            if (res.data.success) {
                setPostList([...PostList, ...res.data.postList]);

                setSkip(Skip + res.data.postList.length);

                if (res.data.postList.length < 6) {
                    setIsLoadMore(false);
                }
            }

        }).catch((err) => {
            console.log(err);
        })

    }


    // 첫 리스트
    const getPostList = () => {

        setSkip(0);

        let body = {
            skip: 0,
            category: Category,
        }

        axios.post("/api/post/list", body).then((res) => {

            if (res.data.success) {
                setPostList([...res.data.postList]);

                setSkip(res.data.postList.length);

                if (res.data.postList.length < 6) {
                    setIsLoadMore(false);
                }
            }

        }).catch((err) => {
            console.log(err);
        })

    }

    useEffect(() => {
        localStorage.setItem('category', "");
        getPostList();
    }, [Category])

    return (
        <MainPageWrap>
            <CategoryWrap>
                <div className='category-btn-wrap'>
                    <button value="" onClick={() => { setCategory(""); setBtnActive(""); localStorage.setItem('category', "") }} className={("" === BtnActive ? "active" : "")} >전체</button>
                    <button value="개발" onClick={() => { setCategory("개발"); setBtnActive("개발"); localStorage.setItem('category', "개발"); }} className={("개발" === BtnActive ? "active" : "")}>개발</button>
                    <button value="공부" onClick={() => { setCategory("공부"); setBtnActive("공부"); localStorage.setItem('category', "공부"); }} className={("공부" === BtnActive ? "active" : "")}>공부</button>
                    <button value="일상" onClick={() => { setCategory("일상"); setBtnActive("일상"); localStorage.setItem('category', "일상") }} className={("일상" === BtnActive ? "active" : "")}>일상</button>
                </div>
                <div className='write-btn-wrap'>
                    <Link to="/write">
                        <button>글쓰기</button>
                    </Link>
                </div>
            </CategoryWrap>
            <PostListWrap>
                <List PostList={PostList}></List>
            </PostListWrap>
            {IsLoadMore && (
                <LoadMore>
                    <button onClick={() => getPostListMore()}>더보기</button>
                </LoadMore>
            )}
        </MainPageWrap>
    )
}

export default MainPage