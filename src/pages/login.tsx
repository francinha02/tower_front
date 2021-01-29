import { useState } from 'react'
import { LoginContainer } from '../styles/pages/Login'

const Login: React.FC = () => {
  // const [loginError, setLoginError] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <LoginContainer>
      <h1>Login</h1>
      <input
        name="username"
        type="text"
        value={username}
        placeholder="Nome de usuário"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        name="password"
        type="password"
        value={password}
        placeholder="Senha"
        onChange={e => setPassword(e.target.value)}
      />
      <button>Entrar</button>
    </LoginContainer>
  )
}

export default Login
