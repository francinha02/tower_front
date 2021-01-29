import { useState } from 'react'

import '../utils/fontAwesome'
import { LoginContainer } from '../styles/pages/Login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Authentication from '../assets/authentication.svg'
import LocationSearch from '../assets/location_search.svg'

const Login: React.FC = () => {
  // const [loginError, setLoginError] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <LoginContainer>
      <div className="forms-container">
        <div className="sign-in-sign-up">
          <form action="" className="sign-in-form">
            <h2 className="title">Entrar</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={['fas', 'user']} size="lg" />
              <input type="text" placeholder="Nome de Usuário" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={['fas', 'lock']} size="lg" />
              <input type="password" placeholder="Senha" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>

          <form action="" className="sign-up-form">
            <h2 className="title">Cadastrar</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={['fas', 'user']} size="lg" />
              <input type="text" placeholder="Nome de Usuário" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={['fas', 'envelope']} size="lg" />
              <input type="text" placeholder="E-mail" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={['fas', 'lock']} size="lg" />
              <input type="password" placeholder="Senha" />
            </div>
            <input type="submit" value="Cadastrar" className="btn solid" />
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Novo aqui?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              quia tenetur ipsum deserunt commodi tempore officiis! Porro, vel
              enim quasi repellat, voluptas, earum saepe deserunt amet optio ad
              explicabo beatae.
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Cadastrar
            </button>
          </div>
          <Authentication />
        </div>

        <div className="panel left-panel">
          <div className="content">
            <h3>Um de nós?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              quia tenetur ipsum deserunt commodi tempore officiis! Porro, vel
              enim quasi repellat, voluptas, earum saepe deserunt amet optio ad
              explicabo beatae.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Entrar
            </button>
          </div>
          <LocationSearch />
        </div>
      </div>
    </LoginContainer>
  )
}

export default Login
