import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PostWrap, PostTitleWrap, PostContent, PostBtnWrap } from '../assets/DetailStyle';
import "react-quill/dist/quill.core.css";
import axios from 'axios';

function Detail(props) {

    const user = useSelector((state) => state.user);

    let params = useParams();
    let navigate = useNavigate();

    const setDate = (date) => {
        return moment(date).format("YYYY년 MM월 DD일, hh:mm");
    }

    const DeleteHandler = () => {

        if (window.confirm("정말로 삭제 하시겠습니까?")) {

            let body = {
                postNum: params.postNum,
            }

            axios.post("/api/post/delete", body).then((res) => {

                if (res.data.success) {
                    alert("글이 삭제 되었습니다.");
                    navigate("/");
                }

            }).catch((err) => {
                console.log(err);
            })

        }

    }

    return (
        <>
            <PostWrap>
                <PostTitleWrap>
                    <div className='postTitle'>
                        <p>{props.PostInfo.title}</p>
                    </div>
                    <div className='postSubTitle'>
                        <span className='name'>{props.UserInfo.name}</span>
                        <span className='category'>{props.PostInfo.category}</span>
                        <span className='date'>{setDate(props.PostInfo.createdAt)}</span>
                    </div>
                </PostTitleWrap>
                <PostContent>
                    <div className='ql-snow'>
                        <div className='view ql-editor' dangerouslySetInnerHTML={{ __html: props.PostInfo.content }} />
                    </div>
                </PostContent>
            </PostWrap>
            <PostBtnWrap>
                <div className='post-btn-left'>
                    <button onClick={() => navigate("/")}>목록</button>
                </div>
                {
                    user._id === props.UserInfo._id &&

                    <div className='post-btn-right'>
                        <Link to={`/edit/${props.PostInfo.postNum}`}>
                            <button className='btn-modify'>수정</button>
                        </Link>
                        <button className='btn-delete' onClick={() => DeleteHandler()}>삭제</button>
                    </div>
                }
            </PostBtnWrap>
        </>
    )
}

export default Detail