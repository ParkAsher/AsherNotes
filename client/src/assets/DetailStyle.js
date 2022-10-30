import styled from 'styled-components';

const PostWrap = styled.div`
    width: 1024px;
    margin: 2rem auto;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 2rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    @media (max-width: 1024px) {
        width: 768px;
    }

    @media (max-width: 768px) {
        width: 90%;
        padding: 0.5rem;
    }

    p {
        margin: 0;
        padding: 0;
    }
`;

const PostTitleWrap = styled.div`
    padding: 1rem 0;
    width: 100%;
    font-weight: bold;
    border-bottom: 1px solid #ccc;

    .postTitle {        
        font-size: 2.125rem;
        margin-bottom: 0.5rem;

        @media (max-width: 768px) {
            font-size: 1.25rem;
        }
    }

    .postSubTitle {
        font-size: 1rem;
        margin-bottom: 0.5rem;

        .name {
            color: lightblue;
        }
        .date {
            color: lightslategray;
        }
        .category {
            color: darkgreen;
        }

        span + span::before {
            padding: 0 0.25rem;
            content: '\\B7';
        }

        @media (max-width: 768px) {
            font-size: 0.75rem;
        }
    }

    @media (max-width: 768px) {        
        padding: 0.5rem;
    }

`;

const PostContent = styled.div`
    width: 100%;
    padding: 2rem 0;

    .ql-editor {
        padding: 0;

        @media (max-width: 768px) {
            img {
                width: 100%;
            }

            font-size: 0.75rem;
        }
    }

    @media (max-width: 768px) {        
        padding: 1rem 0.5rem;
    }
`;

const PostBtnWrap = styled.div`
    width: 1024px;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .post-btn-left {

        button {
            border: 1px solid #222222;
            border-radius: 4px;
            font-size: 1rem;
            font-weight: bold;
            padding: 0.5rem 1rem;
            outline: none;
            color: #ffffff;
            background-color: #222222;
            cursor: pointer;

            @media (max-width: 768px) {
                padding: 0.5rem 0.75rem;
                font-size: 0.75rem;
            }
        }
    }

    .post-btn-right {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 0.5rem;

        button {
            border-radius: 4px;
            font-size: 1rem;
            font-weight: bold;
            padding: 0.5rem 1rem;
            outline: none;
            cursor: pointer;
        }

        .btn-modify {
            border: 1px solid #ccc;
            background-color: #ffffff;
            color: #222222;

            @media (max-width: 768px) {
                padding: 0.5rem 0.75rem;
                font-size: 0.75rem;
            }
        }
        .btn-delete {
            border: 1px solid red;
            background-color: red;
            color: #ffffff;

            @media (max-width: 768px) {
                padding: 0.5rem 0.75rem;
                font-size: 0.75rem;
            }
        }
    }

    @media (max-width: 1024px) {
        width: 768px;
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`;

export { PostWrap, PostTitleWrap, PostContent, PostBtnWrap }