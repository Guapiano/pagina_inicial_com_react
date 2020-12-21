import styled from 'styled-components';

export const CardComponent = styled.div`
    width: 300px;
    display: flex;
    min-height: 300px;
    border-width: 0.5px;
    border-radius: 10px;
    border-style: solid;
    border-color: #EAEAEA;
    align-items: 'center';
    flex-direction: column;
    background-color: #fff;
    justify-content: center;
`;

export const MessengerContainerComponent = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MessengerIconComponent = styled.img`
    width: 60px;
`;

export const MessengerTextComponent = styled.h2`
    color: #04345C;
    font-weight: bold;
    text-align: center;
`;

export const ParagraphContainerComponent = styled.div`
    width: 100%;
    display: flex;
    margin-top: 10px;
    align-self: center;
    align-items: center;
    justify-content: center;
`;

export const ParagraphComponent = styled.p`
    color: #c0c0c0;
    font-size: 14px;
    text-align: justify;
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
    background-color: #1E77BD;
`;