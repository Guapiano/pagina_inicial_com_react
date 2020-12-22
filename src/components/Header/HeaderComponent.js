import React from 'react';
import {HeaderComponent, FavoriteComponent, NotificationComponent, SearchInputComponent} from './HeaderComponentStyle';
import {FaBell,FaHeart} from 'react-icons/fa'

export default function Header(){
    return(
        <HeaderComponent>
            <FavoriteComponent>
                <FaHeart size={14} color="#04345C"/>
            </FavoriteComponent>
            <SearchInputComponent placeholder="Busque por empresas"/>
            <NotificationComponent>
                <FaBell size={14} color="#04345C"/>
            </NotificationComponent>
        </HeaderComponent>
    )
}