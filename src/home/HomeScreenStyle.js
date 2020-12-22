import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

export const ContentsWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media(max-width:600px){
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
    }
    @media(max-width:325px){
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
    }
`;

export const ConfigurationContainer = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    border-width: 1px;
    align-items: center;
    border-radius: 50px;
    border-style: solid;
    border-color: #eaeaea;
    background-color: #fff;
    justify-content: center;
    @media(max-width:600px){
        width:45px;
        height: 45px;
    }
    @media(max-width:415px){
        width: 45px;
        height: 45px;
    }
`;

export const SearchInput = styled.input`
    width: 300px;
    height: 50px;
    padding: 15px;
    border-width: 1px;
    border-radius: 50px;
    border-style: solid;
    border-color: #eaeaea;
    background-color: #fff;
    ::placeholder{
        color: #c0c0c0;
    }
    @media(max-width:600px){
        width: 300px;
        height: 45px;
    }

    @media(max-width:415px){
        width: 250px;
        height: 45px;
    }

    @media(max-width:385px){
        width: 210px;
    }

    @media(max-width:325px){
        width: 200px;
    }
`;

export const NotificationContainer = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    border-width: 1px;
    align-items: center;
    border-radius: 50px;
    border-style: solid;
    border-color: #eaeaea;
    background-color: #fff;
    justify-content: center;
    @media(max-width:600px){
        width: 45px;
        height: 45px;
    }
`;

export const CardsWrapper = styled.div`
    width: 90%;
    height: 80%;
    display: flex;
`;

export const CardsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media(max-width: 1180px){
        min-height: 1050px;
        flex-direction: column;
        justify-content: 'center';
    }
`;