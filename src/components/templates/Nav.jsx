import './nav.css'
import React from 'react'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'


export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/" > 
                <MenuItem  key={props.id} className="home"  /> Início
            </Link>
            <Link to="/users"  > 
                <MenuItem className="users" key={props.id} /> Usuário
            </Link>
        </nav>
    </aside>