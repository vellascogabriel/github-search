import styled from 'styled-components';

export const Loading = styled.div`
    color: #fff;
    font-weight:bold;
    display:flex;
    align-items:center;
    justify-content:center;
    
`;

export const User = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    a{
        color: black;
        font-size: 15px;
        text-decoration: none;
    }

    img{
        max-height:200px;
        border-radius:50%;
        border: 3px solid black;

        margin: 40px;
    }

    h1, h2, h3{
        margin: 5px;
    }
`;


export const UserData = styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
    font-size: 13px;
    color: rgb(60,60,60);
`;