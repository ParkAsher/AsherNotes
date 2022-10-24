import React from 'react'

/* component */
import Editor from './Editor';

/* assets */
import { WriteWrap } from '../assets/WriteStyle';

function Write() {
    return (
        <WriteWrap>
            <Editor />
        </WriteWrap>
    )
}

export default Write