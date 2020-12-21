import React from 'react';
import {FaBell, FaHeart} from 'react-icons/fa';
import {Wrapper,ContentsWrapper,HeaderContainer,ConfigurationContainer,SearchInput,NotificationContainer,CardsWrapper,CardsContainer} from './HomeScreenStyle';
import Card from '../components/Card/Card';
import SideBar from '../components/SideBar/SideBar';

export default function Home(){
    return(
        <Wrapper>
            <SideBar></SideBar>
            <ContentsWrapper>
                <HeaderContainer>
                    <ConfigurationContainer>
                        <FaHeart size={14} color="#344055"></FaHeart>
                    </ConfigurationContainer>
                    <SearchInput placeholder="Busque por empresas..."></SearchInput>
                    <NotificationContainer>
                        <FaBell size={14} color="#344055"></FaBell>
                    </NotificationContainer>
                </HeaderContainer>
                <CardsWrapper>
                    <CardsContainer>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </CardsContainer>
                </CardsWrapper>
            </ContentsWrapper>
        </Wrapper>
    )
}