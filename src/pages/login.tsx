import '../utils/fontAwesome'
import { LoginContainer } from '../styles/pages/Login'
import Input from '../components/input/Input'
import Head from '../components/Head'
import { useState } from 'react'

const Login: React.FC = () => {
  const [divClass, setDivClass] = useState('container')
  const addClass = () => {
    setDivClass('container sign-up-mode')
  }

  const removeClass = () => {
    setDivClass('container')
  }

  return (
    <LoginContainer>
      <div className={divClass}>
        <Head title="Login" />
        <div className="forms-container">
          <div className="sign-in-sign-up">
            <form action="" className="sign-in-form">
              <h2 className="title">Entrar</h2>
              <Input
                icon="user"
                type="text"
                placeholder="Nome de Usuário"
                divClass="input-field"
              />

              <Input
                icon="lock"
                type="password"
                placeholder="Senha"
                divClass="input-field"
              />
              <input type="submit" value="Login" className="btn solid" />
            </form>

            <form action="" className="sign-up-form">
              <h2 className="title">Cadastrar</h2>
              <Input
                icon="user"
                type="text"
                placeholder="Nome de Usuário"
                divClass="input-field"
              />
              <Input
                icon="envelope"
                type="email"
                placeholder="Senha"
                divClass="input-field"
              />
              <Input
                icon="lock"
                type="password"
                placeholder="Senha"
                divClass="input-field"
              />
              <input type="submit" value="Cadastrar" className="btn solid" />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Novo aqui?</h3>
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
                Cadastrar
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
