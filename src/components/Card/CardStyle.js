import styled from 'styled-components';

export const CardComponent = styled.div`
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

export const ParagraphContainerComponent = styled.div`
    width: 80%;
    display: flex;
    font-size: 14px;
    margin-top: 10px;
    align-self: center;
    text-align: justify;
    align-items: center;
    justify-content: center;
`;

export const ParagraphComponent = styled.p`
    color: #c0c0c0;
`;

export const ButtonContainerComponent = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
`;

export const ButtonComponent = styled.a`
    width: 80%;
    color: #fff;
    padding: 15px;
    text-align: center;
    border-radius: 5px;
    background-color: #344055;
`;

export const YouTubeContainerComponent = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const YouTubeIconComponent = styled.img`
    width: 60px;
`;

export const YouTubeTextComponent = styled.h2`
    color: #344055;
    font-weight: bold;
    text-align: center;
    cursor: context-menu;
`;