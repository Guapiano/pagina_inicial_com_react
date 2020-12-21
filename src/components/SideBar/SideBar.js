import React from 'react';
import {SideBarComponent,SideBarContentsComponent,HomePageContainerComponent,HomePageComponent,LogoTitleContainerComponent,LogoTitleComponent} from './SideBarStyle'

export default function SideBar(){
    return(
        <SideBarComponent>
            <SideBarContentsComponent>

                <HomePageContainerComponent>
                    <HomePageComponent href="https://www.google.com/">Início</HomePageComponent>
                </HomePageContainerComponent>

                <LogoTitleContainerComponent>
                    <LogoTitleComponent>JOBFINDER</LogoTitleComponent>
                </LogoTitleContainerComponent>
                
            </SideBarContentsComponent>
        </SideBarComponent>
    )
}