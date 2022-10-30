import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from './Detail';

function PostArea() {

    let params = useParams();

    const [PostInfo, setPostInfo] = useState({});
    const [UserInfo, setUserInfo] = useState({});

    useEffect(() => {

        let body = {
            postNum: params.postNum
        }

        axios.post("/api/post/detail", body).then((res) => {

            if (res.data.success) {
                setPostInfo(res.data.postInfo);
                setUserInfo(res.data.authorInfo);
            }

        }).catch((err) => {
            console.log(err);
        })

    }, [params.postNum])


    return (
        <Detail PostInfo={PostInfo} UserInfo={UserInfo}></Detail>
    )
}

export default PostArea