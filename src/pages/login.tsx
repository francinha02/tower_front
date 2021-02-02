import '../utils/fontAwesome'
import { LoginContainer } from '../styles/pages/Login'
import Input from '../components/input/Input'
import Head from '../components/Head'
import { useCallback, useState } from 'react'
import { useAxios } from '../hooks/useAxios'

const Login: React.FC = () => {
  const [handleClass, setHandleClass] = useState('container')
  const [loginError, setLoginError] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const addClass = () => {
    setHandleClass('container sign-up-mode')
  }

  const removeClass = () => {
    setHandleClass('container')
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch('http://201.39.69.70:3000/users/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
      })
    }).then(async res => {
      if (res.ok) {
        console.log(await res.json())
      }
    })
  }

  return (
    <LoginContainer>
      <div className={handleClass}>
        <Head title="Login" />
        <div className="forms-container">
          <div className="sign-in-sign-up">
            <form onSubmit={handleSubmit} className="sign-in-form">
              <h2 className="title">Entrar</h2>
              <Input
                icon="user"
                type="text"
                placeholder="Nome de Usuário"
                onChange={e => setUsername(e.target.value)}
              />

              <Input
                icon="lock"
                type="password"
                placeholder="Senha"
                onChange={e => setPassword(e.target.value)}
              />
              <input type="submit" value="Login" className="btn solid" />
            </form>

            <form action="" className="sign-up-form">
              <h2 className="title">Cadastrar</h2>
              <Input icon="user" type="text" placeholder="Nome de Usuário" />
              <Input icon="envelope" type="email" placeholder="Senha" />
              <Input icon="lock" type="password" placeholder="Senha" />
              <input type="submit" value="Cadastrar" className="btn solid" />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Esqueceu a Senha?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores quia tenetur ipsum deserunt commodi tempore officiis!
                Porro, vel enim quasi repellat, voluptas, earum saepe deserunt
                amet optio ad explicabo beatae.
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={addClass}
              >
                Recuperar
              </button>
            </div>
            <img src="/authentication.svg" className="image" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>Um de nós?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores quia tenetur ipsum deserunt commodi tempore officiis!
                Porro, vel enim quasi repellat, voluptas, earum saepe deserunt
                amet optio ad explicabo beatae.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={removeClass}
              >
                Entrar
              </button>
            </div>
            <img src="/location_search.svg" className="image" />
          </div>
        </div>
      </div>
    </LoginContainer>
  )
}

export default Login
