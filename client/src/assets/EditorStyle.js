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

export { QuillWrapper, TitleInput, CategoryInput };