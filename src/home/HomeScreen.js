import React from 'react';
import icon from '../assets/youtube-icon.png';
import {FaBell, FaHeart} from 'react-icons/fa'
import {Wrapper,LeftBar,LeftBarContents,HomePageContainer,LogoTitleContainer,LogoTitle,HomePage,ContentsWrapper,HeaderContainer,ConfigurationContainer,SearchInput,NotificationContainer,CardsWrapper,CardsContainer,CardOne,YouTubeContainer,YouTubeIcon,YouTubeText,ParagraphContainerOne,MainParagraphOne,ButtonContainerOne,ButtonOne,CardTwo,ParagraphContainerTwo,MainParagraphTwo,ButtonContainerTwo,ButtonTwo,CardThree,ParagraphContainerThree,MainParagraphThree,ButtonContainerThree,ButtonThree} from './HomeScreenStyle';

export default function Home(){
    return(
        <Wrapper>

            <LeftBar>
                <LeftBarContents>
                    <HomePageContainer>
                        <HomePage href="https://www.google.com/">Início</HomePage>
                    </HomePageContainer>

                    <LogoTitleContainer>
                        <LogoTitle>JOBFINDER</LogoTitle>
                    </LogoTitleContainer>
                </LeftBarContents>
            </LeftBar>

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

                        <CardOne>
                            <YouTubeContainer>
                                <YouTubeIcon src={icon}></YouTubeIcon>
                            </YouTubeContainer>

                            <YouTubeText>Trabalhe no YouTube conosco</YouTubeText>

                            <ParagraphContainerOne>
                                <MainParagraphOne>Temos o que você precisa. Envie seu currículo para que nós possamos analisá-lo.</MainParagraphOne>
                            </ParagraphContainerOne>

                            <ButtonContainerOne>
                                <ButtonOne href="https://www.google.com/">Saiba mais</ButtonOne>
                            </ButtonContainerOne>
                        </CardOne>

                        <CardTwo>
                            <YouTubeContainer>
                                <YouTubeIcon src={icon}></YouTubeIcon>
                            </YouTubeContainer>

                            <YouTubeText>Trabalhe no YouTube conosco</YouTubeText>

                            <ParagraphContainerTwo>
                                <MainParagraphTwo>Temos o que você precisa. Envie seu currículo para que nós possamos analisá-lo.</MainParagraphTwo>
                            </ParagraphContainerTwo>

                            <ButtonContainerTwo>
                                <ButtonTwo href="https://www.google.com/">Saiba mais</ButtonTwo>
                            </ButtonContainerTwo>
                        </CardTwo>

                        <CardThree>
                            <YouTubeContainer>
                                <YouTubeIcon src={icon}></YouTubeIcon>
                            </YouTubeContainer>

                            <YouTubeText>Trabalhe no YouTube conosco</YouTubeText>

                            <ParagraphContainerThree>
                                <MainParagraphThree>Temos o que você precisa. Envie seu currículo para que nós possamos analisá-lo.</MainParagraphThree>
                            </ParagraphContainerThree>

                            <ButtonContainerThree>
                                <ButtonThree href="https://www.google.com/">Saiba mais</ButtonThree>
                            </ButtonContainerThree>
                        </CardThree>
                    </CardsContainer>

                </CardsWrapper>

            </ContentsWrapper>

        </Wrapper>
    )
}