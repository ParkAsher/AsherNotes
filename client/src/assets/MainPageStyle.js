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

export { MainPageWrap, PostListWrap }