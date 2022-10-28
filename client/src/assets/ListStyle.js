import styled, { keyframes } from 'styled-components';

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
        padding-top: 1rem;
        padding-bottom: 0.75rem;
        padding-left: 0.75rem;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .subtitle {
        padding-bottom: 0.75rem;
        padding-left: 0.75rem;

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
    height: 20rem;
    border-radius: 5px 5px 0 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px 5px 0 0;
    }    
`;

export { ListWrap, ListItem, Thumbnail };