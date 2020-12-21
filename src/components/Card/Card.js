import React from 'react';
import {CardComponent,ParagraphContainerComponent,ParagraphComponent,ButtonContainerComponent,ButtonComponent,YouTubeContainerComponent,YouTubeIconComponent,YouTubeTextComponent} from './CardStyle';
import icon from '../../assets/youtube-icon.png'

export default function Card(){
    return(
        <CardComponent>

            <YouTubeContainerComponent>
                <YouTubeIconComponent src={icon}></YouTubeIconComponent>
            </YouTubeContainerComponent>

            <YouTubeTextComponent>Trabalhe no YouTube conosco</YouTubeTextComponent>

            <ParagraphContainerComponent>
                <ParagraphComponent>Temos o que você precisa. Envie seu currículo para que nós possamos analisá-lo.</ParagraphComponent>
            </ParagraphContainerComponent>

            <ButtonContainerComponent>
                <ButtonComponent href="https://www.google.com/">Saiba mais</ButtonComponent>
            </ButtonContainerComponent>
            
        </CardComponent>
    )
}