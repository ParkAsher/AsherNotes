import moment from 'moment/moment';
import React from 'react'

/* assets */
import { Thumbnail, ListItem, ListWrap } from '../assets/ListStyle';


function List(props) {

    const setDate = (date) => {
        return moment(date).format("YYYY년 MM월 DD일, hh:mm");
    }

    return (
        <ListWrap>
            {props.PostList.map((post, idx) => {
                return (
                    <ListItem key={idx}>
                        <Thumbnail>
                            <img src={post.thumbnail} alt="thumbnail"></img>
                        </Thumbnail>
                        <p className='title'>{post.title}</p>
                        <div className='subtitle'>
                            <span className='name'>{post.author.name}</span>
                            <span className='category'>{post.category}</span>
                            <span className='date'>{setDate(post.createdAt)}</span>
                        </div>
                    </ListItem>
                );
            })}
        </ListWrap>
    )
}

export default List