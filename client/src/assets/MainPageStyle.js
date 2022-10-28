import styled, { keyframes } from 'styled-components';

const fadeinDown = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, -5%, 0);
    }

    to {
        opacity: 1;
        transform: translateZ(0);
    }
`;

const MainPageWrap = styled.div`
    width: 1024px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        width: 768px;
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`;

const CategoryWrap = styled.div`
    width: 100%;
    padding: 2rem 0 1rem;
    border-bottom: 1px solid #ccc;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .category-btn-wrap {

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 0.5rem;

        button {
            padding: 0.5rem 1rem;
            border: 1px solid #ccc;
            border-radius: 5px; 
            background: #ffffff;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;

            &:hover {
                border: 1px solid #222222;
                color: white;
                background-color: #222222;
            }

            @media (max-width: 768px) {
                font-size: 0.75rem;
                padding: 0.5rem 0.75rem;
            }
        }

        button.active {
            border: 1px solid #222222;
            color: white;
            background-color: #222222;
        }

    }

    .write-btn-wrap {

        button {
            padding: 0.5rem 1rem;
            border: 1px solid #ccc;
            border-radius: 5px; 
            background: #ffffff;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;

            @media (max-width: 768px) {
                font-size: 0.75rem;
                padding: 0.5rem 0.75rem;
            }
        }

    }
    
`;

const PostListWrap = styled.div`
    animation: ${fadeinDown} 1s;
`;

const LoadMore = styled.div`
    width: 100%;

    button {
        width: 100%;
        padding: 0.75rem ;
        outline : none;
        border: 1px solid lightcoral;
        background: #ffffff;
        cursor: pointer;

        font-size: 0.75rem;
        font-weight: bold;

        margin-bottom: 1rem;

        border-radius: 5px;
    }
`;

export { MainPageWrap, PostListWrap, LoadMore, CategoryWrap }