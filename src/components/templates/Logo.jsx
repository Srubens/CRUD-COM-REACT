import './logo.css'
import React from 'react'
import logo from '../../assets/images/logo.png'

export default props =>
    <aside className="logo">
        <a href="/">
            <img src={logo} alt="logo" />
        </a>
    </aside>