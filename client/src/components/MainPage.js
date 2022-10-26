import React, { useState, useEffect } from 'react'
import axios from 'axios'

/* component */
import List from './List.js';

/* assets */
import { LoadMore, MainPageWrap, PostListWrap } from '../assets/MainPageStyle.js';

function MainPage() {

    const [PostList, setPostList] = useState([]);

    const [Skip, setSkip] = useState(0);

    const [IsLoadMore, setIsLoadMore] = useState(true);

    // 첫 더불러오기
    const getPostListMore = () => {

        let body = {
            skip: Skip,
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
            skip: 0
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
        getPostList();
    }, [])

    return (
        <MainPageWrap>
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