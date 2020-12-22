import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

export const Contents = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
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
