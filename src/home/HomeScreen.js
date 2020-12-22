import React from 'react';
import {Wrapper,Contents,CardsContainer} from './HomeScreenStyle';
import Card from '../components/Card/Card';
import Header from '../components/Header/HeaderComponent'
import SideBar from '../components/SideBar/SideBar';

export default function Home(){
    return(
        <Wrapper>
            <SideBar/>
            <Contents>
                <Header/>
                <CardsContainer>
                    <Card/>
                    <Card/>
                    <Card/>
                </CardsContainer>
            </Contents>
        </Wrapper>
    )
}