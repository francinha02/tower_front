import '../utils/fontAwesome'
import { LoginContainer } from '../styles/pages/Login'
import Input from '../components/input/Input'
import Head from '../components/Head'
import { useState } from 'react'
import api from '../utils/api'
import { useRouter } from 'next/dist/client/router'

const Login: React.FC = () => {
  const [handleClass, setHandleClass] = useState('container')
  const [loginError, setLoginError] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const addClass = () => {
    setHandleClass('container sign-up-mode')
  }

  const removeClass = () => {
    setHandleClass('container')
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await api.post('/users/auth', { username, password })
    if (window && res.status === 200) {
      localStorage.setItem('token', res.data.token)
      router.push('/maps')
    }
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
