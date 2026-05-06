import React from 'react'
import './Auth.css'

class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true, activeLogin: true, activeRegister: false,
            l_login: '', l_password: '',
            r_login: '', r_email: '', r_password: '', r_repeat_password: ''
        }
        // inputs refs
        this.ref_login = React.createRef()
        this.ref_password = React.createRef()
    }
    toRegister = () => {
        this.setState({activeLogin: false, activeRegister: true})
    }
    toLogin = () => {
        this.setState({activeLogin: true, activeRegister: false})
    }
    show = (data) => {
        this.setState({show:true})
        if (data && data.login && data.password) {
            this.setState({l_login: data.login, l_password: data.password})
            this.ref_login.current.value = data.login
            this.ref_password.current.value = data.password
        }
    }
    hide = () => {
        this.setState({show:false, l_login: "", l_password: ""})
    }
    login = () => {
        // trigger here
    }
    register = () => {
        // trigger here
    }
    handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({[name]: value})
    }
    render() {
        if (!this.state.show) {
            return null
        }

        let activeAuthLogin = this.state.activeLogin ? "active" : ""
        let activeAuthRegister = this.state.activeRegister ? "active" : ""
        return (
            <div className="Auth">
                <div id="AuthLogin" className={`form login ${activeAuthLogin}`}>
                    <div className="image"/>
                    <div className="window">
                        <div className="header">
                            <span className="title">Войти в аккаунт</span>
                            <span className="desc">Войдите в свой аккаунт прямо сейчас</span>
                        </div>
                        <div className="inputs">
                            <input type="text" ref={this.ref_login} name="l_login" className="login-input" placeholder="Логин" pattern="[a-zA-Z0-9]" onChange={this.handleInput} />
                            <input type="password" ref={this.ref_password} name="l_password" className="login-input" placeholder="Пароль" onChange={this.handleInput} />
                        </div>
                        <div className="buttons">
                            <button className="base" onClick={this.toRegister}>Регистрация</button>
                            <button className="green" onClick={this.login}>Войти</button>
                        </div>
                    </div>
                </div>
                <div id="AuthRegister" className={`form register ${activeAuthRegister}`}>
                    <div className="image"/>
                    <div className="window">
                        <div className="header">
                            <span className="title">Регистрация</span>
                            <span className="desc">Создание нового персонажа</span>
                        </div>
                        <div className="inputs">
                            <input type="text" name="r_login" className="login-input" placeholder="Логин" onChange={this.handleInput} />
                            <input type="text" name="r_email" className="login-input" placeholder="Email" onChange={this.handleInput} />
                            <input type="password" name="r_password" className="login-input" placeholder="Пароль" onChange={this.handleInput} />
                            <input type="password" name="r_repeat_password" className="login-input" placeholder="Пароль еще раз" onChange={this.handleInput} />
                        </div>
                        <div className="buttons">
                            <button className="base" onClick={this.toLogin}>Авторизация</button>
                            <button className="green" onClick={this.register}>Создать</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth