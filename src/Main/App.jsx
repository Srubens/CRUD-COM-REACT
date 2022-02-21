import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './app.css'

import React from 'react'
import Logo from "../components/templates/Logo"
import Nav from '../components/templates/Nav'
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer'

export default props =>
    <div className="app">
        <Logo/>
        <Nav/>
        <Main icon="home" title="Início"
        subtitle="projeto crud com react" />
        <Footer/>
    </div>