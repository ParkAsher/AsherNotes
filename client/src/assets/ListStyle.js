import styled from 'styled-components';

const ListWrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;

`;

const ListItem = styled.div`
    width: 47%;
    margin-bottom: 2rem;

    p {
        margin: 0;
    }

    span {
        font-size: 0.8rem;
        font-weight: bold;
    }

    span + span::before {
        padding: 0 0.25rem;
        content: '\\B7';
    }

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .name {
        color: lightblue;
    }
    .date {
        color: lightslategray;
    }
    .category {
        color: darkgreen;
    }

    @media (max-width: 768px) {
        width: 100%;

        .title {
            font-size: 1.25rem;
        }
    }
`;

const Thumbnail = styled.div`
    width: 100%;
    height: 20rem;
    border-radius: 4px;
    box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px;
    margin-bottom: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    
`;

export { ListWrap, ListItem, Thumbnail };