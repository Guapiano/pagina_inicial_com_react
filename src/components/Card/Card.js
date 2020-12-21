import React from 'react';
import {CardComponent,ParagraphContainerComponent,ParagraphComponent,ButtonContainerComponent,ButtonComponent,MessengerContainerComponent,MessengerIconComponent,MessengerTextComponent} from './CardStyle';
import icon from '../../assets/messenger-icon.png';

export default function Card(){
    return(
        <CardComponent>
            <MessengerContainerComponent>
                <MessengerIconComponent src={icon}></MessengerIconComponent>
            </MessengerContainerComponent>
            <MessengerTextComponent>Venha para o Messenger</MessengerTextComponent>
            <ParagraphContainerComponent>
                <ParagraphComponent>Nós temos tudo o que você precisa.</ParagraphComponent>
            </ParagraphContainerComponent>
            <ButtonContainerComponent>
                <ButtonComponent href="https://www.google.com/">Saiba mais</ButtonComponent>
            </ButtonContainerComponent>
        </CardComponent>
    )
}