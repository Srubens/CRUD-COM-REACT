import React from 'react'
import Main from '../templates/Main'
import './home.css'

export default props =>
    <Main icon="home" title="Início"
        subtitle="projeto crud com react">
        <div className="home display-4">
            Bem Vindo!
            <hr/>
            <p>Sistema para exemplificar um cadastro desenvolvido em React!</p>
        </div>
    </Main>