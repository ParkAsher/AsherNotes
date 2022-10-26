import styled from 'styled-components';

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

const PostListWrap = styled.div`
    margin-top: 3rem;
`;

const LoadMore = styled.div`
    width: 100%;

    button {
        width: 100%;
        padding: 0.75rem ;
        outline : none;
        border: 1px solid lightcoral;
        background: transparent;
        cursor: pointer;

        font-size: 0.75rem;
        font-weight: bold;

        margin-bottom: 1rem;
    }
`;

export { MainPageWrap, PostListWrap, LoadMore }