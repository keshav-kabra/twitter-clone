import React, { Component } from 'react';
import './SidebarElement.css'

export function SidebarElement({active, Icon, text}) {
    return (
        <div className="sidebarOptions">
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}


