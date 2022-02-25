import React, {Component} from 'react'
import Main from '../templates/Main'

const headerProps = {
    icon:'users',
    title:'Usuários',
    subtitle:"CRUD de usuários"
}

export default class UserCrud extends Component{
    render(){
        return(
            <Main {...headerProps} >
                Cadastro de Usuários
            </Main>
        )
    }
}