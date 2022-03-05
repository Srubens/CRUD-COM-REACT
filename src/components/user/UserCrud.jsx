import React, {Component, useEffect, useState} from 'react'
import axios from 'axios'
import Main from '../templates/Main'

const headerProps = {
    icon:'users',
    title:'Usuários',
    subtitle:"CRUD de usuários"
}

const baseURL = "http://localhost:3001/users"

const initialState = {
    user: { name:'', email:'' },
    list: []
}

export default class UserCrud extends Component{

    constructor(props){
        super(props)
        this.state = { ...initialState }
    }

    componentDidMount(){
        axios(baseURL).then(resp =>{
            this.setState({ list: resp.data })
        })
    }
    
    state = { ...initialState }

    // componentWillMount(){
    //     axios(baseURL).then(resp =>{
    //         this.setState({ list: resp.data })
    //     })
    // }

    clear(){
        this.setState({ user:initialState.user })
    }

    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseURL}/${user.id}` : baseURL
        axios[method](url, user)
            .then(resp =>{
                const list = this.getUpdateList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdateList(user, add = true){
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list 
    }

    updateField(event){
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value 
        this.setState({ user })
    }

    renderTable(){
        return(
            <div className="table-responsive">
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.rederRows() }
                    </tbody>
                </table>
            </div>
        )
    }

    rederRows(){
        return this.state.list.map(user => {
            return (
                <tr key={user.id} >
                    <td>{ user.name }</td>
                    <td>{ user.email }</td>
                    <td>
                        <button title="editar" className='btn btn-warning'
                        onClick={() => this.load(user)}>
                            <i className='fa fa-pencil'></i>
                        </button>
                        <button title="excluir" className='btn btn-danger ml-3 '
                        onClick={()=> this.remove(user)}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    renderForm(){
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <label htmlFor='name' >Nome:</label>
                        <input  type="text" 
                            className='form-control'
                            name="name"
                            value={this.state.user.name}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite seu nome"
                        />
                    <br />
                    </div>
                    <div className="col-12 col-md-12">
                        <label htmlFor='email' >E-mail:</label>
                        <input type="text" 
                            className="form-control"
                            name="email"
                            value={this.state.user.email}
                            placeholder="Digite seu e-mail"
                            onChange={e => this.updateField(e)}
                        />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 col-md-12 d-flex justify-content-end">
                        <button type='button' className="btn btn-primary"
                        onClick={ e => this.save(e) }
                        >
                            Salvar
                        </button>
                        <button type='button' className="btn btn-secondary ml-3"
                        onClick={ e => this.clear(e) }
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user){
        this.setState({user})
    }

    remove(user){
        axios.delete(`${baseURL}/${user.id}`).then(resp =>{
            const list = this.getUpdateList(user, false)
            this.setState({ list })
        })
    }

    render(){
        console.log( this.state.list )
        return(
            <Main {...headerProps} >
                { this.renderTable() }
                { this.renderForm() }
            </Main>
        )
    }
}