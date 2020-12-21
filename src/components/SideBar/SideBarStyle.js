import styled from 'styled-components';

export const SideBarComponent = styled.div`
    height: 100%;
    min-width: 150px;
    background-color: #344055;
    @media(max-width: 1180px){
        display: none;
    }
`;

export const SideBarContentsComponent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`;

export const HomePageContainerComponent = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HomePageComponent = styled.a`
    width: 60%;
    padding: 12px;
    color: #344055;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    border-radius: 150px;
    background-color: #fff;
`;

export const LogoTitleContainerComponent =styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogoTitleComponent = styled.h3`
    color: #fff;
    letter-spacing: 2px;
    cursor: context-menu;
`