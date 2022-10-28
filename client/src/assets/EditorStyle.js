import styled from "styled-components";

const QuillWrapper = styled.div`
    margin: 2rem 0;
    padding: 0;

    .ql-editor {
        min-height: 500px;
        font-size: 1.125rem;
        line-height: 1.5;
    }
`;

const TitleInput = styled.input`
    margin: 2rem 0 1rem 0;
    width: 100%;
    font-size: 2rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 0.5rem;

    &::placeholder {
        font-size: 1.125rem;
    }
`;

const CategoryInput = styled.select`
    margin: 1rem 0;
    width: 50%;
    font-size: 1.125rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 0.5rem;
`;

const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    background: #22293c;

    @media (max-width: 768px) {
        padding: 0.375rem 1rem;
        font-size: 0.75rem;
    }
`;

const CancelButton = styled.button`
    border: 0.1px solid #000000;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    color: #000000;
    outline: none;
    cursor: pointer;
    background: #ffffff;

    @media (max-width: 768px) {
        padding: 0.375rem 1rem;
        font-size: 0.75rem;
    }
`;

export { QuillWrapper, TitleInput, CategoryInput, ButtonWrap, SubmitButton, CancelButton };