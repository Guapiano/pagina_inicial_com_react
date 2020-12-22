import React from 'react';
import {Wrapper,ContentsWrapper,CardsWrapper,CardsContainer} from './HomeScreenStyle';
import Card from '../components/Card/Card';
import Header from '../components/Header/HeaderComponent'
import SideBar from '../components/SideBar/SideBar';

export default function Home(){
    return(
        <Wrapper>
            <SideBar/>
            <ContentsWrapper>
                <Header/>
                <CardsWrapper>
                    <CardsContainer>
                        <Card/>
                        <Card/>
                        <Card/>
                    </CardsContainer>
                </CardsWrapper>
            </ContentsWrapper>
        </Wrapper>
    )
}