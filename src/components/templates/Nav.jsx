import './nav.css'
import React from 'react'
import MenuItem from './MenuItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <MenuItem href="/" key={props.id} className="home" title="Início" />
            <MenuItem href="/" key={props.id} className="users" title="Usuário" />
        </nav>
    </aside>