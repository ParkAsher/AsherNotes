import styled from "styled-components";

// edit 
const EditWrap = styled.div`
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

// edit
const ThumbnailText = styled.div`
    font-size: 0.75rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    font-weight: bold;
    color: coral;
`


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

const ThumbnailInput = styled.input`
    display: block;
    width: 100%;
    margin: 1rem 0;
    border: 1px solid #ccc;
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

export { ThumbnailText, ThumbnailInput, EditWrap, QuillWrapper, TitleInput, CategoryInput, ButtonWrap, SubmitButton, CancelButton };