import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background: linear-gradient(-45deg, #4481eb, #04befe);
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
  }

  .forms-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .sign-in-sign-up {
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    width: 50%;
    display: grid;
    grid-template-columns: 1fr;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 5rem;
    overflow: hidden;

    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  form.sign-in-form {
    z-index: 2;
  }

  form.sign-up-form {
    z-index: 1;
    opacity: 0;
  }

  .title {
    font-size: 2.2rem;
    margin-bottom: 10px;
  }

  .input-field {
    max-width: 380px;
    width: 100%;
    height: 55px;
    background-color: #f0f0f0;
    margin: 10px 0;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 0.4rem;
  }

  .input-field {
    .svg-inline--fa {
      display: block;
      margin: auto;
      color: #acacac;
    }
  }

  .input-field input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1.rem;
    color: #333;
  }

  .input-field input::placeholder {
    color: #aaa;
    font-weight: 500;
  }

  .btn {
    width: 150px;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 50px;
    cursor: pointer;
    background-color: #5995fd;
    color: #f0f0f0;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    transition: 0.5s;
  }

  .btn:hover {
    background-color: #4d84e2;
  }
  svg:nth-child(2) {
    width: 100%;
  }
`
