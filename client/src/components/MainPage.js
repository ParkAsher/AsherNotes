import React, { useState, useEffect } from 'react'
import axios from 'axios'

/* component */
import List from './List.js';

/* assets */
import { MainPageWrap, PostListWrap } from '../assets/MainPageStyle.js';

function MainPage() {

    const [PostList, setPostList] = useState([]);

    const getPostList = () => {

        axios.post("/api/post/list").then((res) => {

            if (res.data.success) {
                setPostList([...res.data.postList])
            }

        }).catch((err) => {
            console.log(err);
        })

    }

    useEffect(() => {
        getPostList();
    }, [])

    useEffect(() => {
        console.log(PostList);
    }, [PostList])

    return (
        <MainPageWrap>
            <PostListWrap>
                <List PostList={PostList}></List>
            </PostListWrap>
        </MainPageWrap>
    )
}

export default MainPage