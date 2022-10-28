import styled from "styled-components";

const WriteWrap = styled.div`
    width: 1024px;
    margin: 2rem auto;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 0.5rem 2rem;

    @media (max-width: 1024px) {
        width: 768px;
    }

    @media (max-width: 768px) {
        width: 90%;
        padding: 0.5rem;
    }
    
`;

export { WriteWrap };