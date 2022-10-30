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
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

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
        padding: 1rem 0.75rem 0.5rem 0.75rem;
        font-size: 1.5rem;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
    }

    .subtitle {
        padding: 0.5rem 0.75rem ;

        .name {
            color: lightblue;
        }
        .date {
            color: lightslategray;
        }
        .category {
            color: darkgreen;
        }
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
    height: 17.5rem;
    border-radius: 5px 5px 0 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px 5px 0 0;
    }   
    
    @media (max-width: 768px) {
        height: 12.5rem;
    }
`;

export { ListWrap, ListItem, Thumbnail };