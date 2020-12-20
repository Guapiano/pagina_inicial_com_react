import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

export const LeftBar = styled.div`
    height: 100%;
    min-width: 150px;
    background-color: #344055;
    @media(max-width: 1180px){
        display: none;
    }
`;

export const LeftBarContents = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`;

export const HomePageContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HomePage = styled.a`
    width: 60%;
    padding: 12px;
    color: #344055;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    border-radius: 150px;
    background-color: #fff;
`;

export const LogoTitleContainer =styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogoTitle = styled.h3`
    color: #fff;
    letter-spacing: 2px;
    cursor: context-menu;
`;

export const ContentsWrapper = styled.div`
    width: 100%;
    height: 100%;
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
        width: 200px;
        height: 45px;
    }
    @media(max-width:325px){
        width: 180px;
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

export const CardOne = styled.div`
    width: 300px;
    display: flex;
    min-height: 300px;
    border-width: 0.5px;
    border-radius: 10px;
    border-style: solid;
    border-color: #EAEAEA;
    flex-direction: column;
    background-color: #fff;
`;

export const YouTubeContainer = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const YouTubeIcon = styled.img`
    width: 60px;
`;

export const YouTubeText = styled.h2`
    color: #344055;
    font-weight: bold;
    text-align: center;
    cursor: context-menu;
`;

export const ParagraphContainerOne = styled.div`
    width: 80%;
    display: flex;
    font-size: 14px;
    margin-top: 10px;
    align-self: center;
    text-align: justify;
    align-items: center;
    justify-content: center;
`;

export const MainParagraphOne = styled.p`
    color: #c0c0c0;
`;

export const ButtonContainerOne = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
`;

export const ButtonOne = styled.a`
    width: 80%;
    color: #fff;
    padding: 15px;
    text-align: center;
    border-radius: 5px;
    background-color: #344055;
`;

export const CardTwo = styled.div`
    width: 300px;
    display: flex;
    min-height: 300px;
    border-width: 0.5px;
    border-radius: 10px;
    border-style: solid;
    border-color: #EAEAEA;
    flex-direction: column;
    background-color: #fff;
`;

export const ParagraphContainerTwo = styled.div`
    width: 80%;
    display: flex;
    font-size: 14px;
    margin-top: 10px;
    align-self: center;
    text-align: justify;
    align-items: center;
    justify-content: center;
`;

export const MainParagraphTwo = styled.p`
    color: #c0c0c0;
`;

export const ButtonContainerTwo = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
`;

export const ButtonTwo = styled.a`
    width: 80%;
    color: #fff;
    padding: 15px;
    text-align: center;
    border-radius: 5px;
    background-color: #344055;
`;

export const CardThree = styled.div`
    width: 300px;
    display: flex;
    min-height: 300px;
    border-width: 0.5px;
    border-radius: 10px;
    border-style: solid;
    border-color: #EAEAEA;
    flex-direction: column;
    background-color: #fff;
`;

export const ParagraphContainerThree = styled.div`
    width: 80%;
    display: flex;
    font-size: 14px;
    margin-top: 10px;
    align-self: center;
    text-align: justify;
    align-items: center;
    justify-content: center;
`;

export const MainParagraphThree = styled.p`
    color: #c0c0c0;
`;

export const ButtonContainerThree = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
`;

export const ButtonThree = styled.a`
    width: 80%;
    color: #fff;
    padding: 15px;
    text-align: center;
    border-radius: 5px;
    background-color: #344055;
`;