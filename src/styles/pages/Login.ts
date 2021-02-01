import styled from 'styled-components'

export const LoginContainer = styled.div`
  .container {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
  }

  .container::before {
    content: '';
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background: linear-gradient(-45deg, #a61313 0%, #ff8787 100%);
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    z-index: 6;
    transition: 1.8s ease-in-out;
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
    z-index: 5;
    transition: 1s 0.7s ease-in-out;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 5rem;
    overflow: hidden;

    grid-column: 1 / 2;
    grid-row: 2 / 6;

    transition: 0.2s 0.7s ease-in-out;
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
    background-color: #c72b2b;
    color: #f0f0f0;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    transition: 0.5s;
  }

  .btn:hover {
    background-color: #ec4949;
  }

  .panels-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .panel {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    z-index: 7;
  }

  .panel .content {
    color: #fff;
    transition: 0.9s 0.6s ease-in-out;
  }

  .panel h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
  }

  .panel p {
    font-size: 0.95rem;
    padding: 0.7rem 0;
  }

  .btn.transparent {
    margin: 0;
    background: none;
    border: 2px solid #fff;
    width: 130px;
    height: 41px;
    font-weight: 600;
    font-size: 0.8rem;
  }

  .left-panel {
    pointer-events: all;
    padding: 3rem 17% 2rem 12%;
  }

  .right-panel {
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
  }

  svg:nth-child(2) {
    width: 100%;
  }

  .image {
    width: 100%;
    transition: 1.1s 0.4s ease-in-out;
  }

  .right-panel .content,
  .right-panel .image {
    transform: translateX(800px);
  }

  /* ANIMATION */
  .container.sign-up-mode::before {
    transform: translate(100%, -50%);
    right: 52%;
  }
  .container.sign-up-mode .left-panel .image,
  .container.sign-up-mode .left-panel .content {
    transform: translateX(-880px);
  }

  .container.sign-up-mode .right-panel .content,
  .container.sign-up-mode .right-panel .image {
    transform: translateX(0px);
  }

  .container.sign-up-mode .left-panel {
    pointer-events: none;
  }

  .container.sign-up-mode .right-panel {
    pointer-events: all;
  }

  .container.sign-up-mode .sign-in-sign-up {
    left: 25%;
  }

  .container.sign-up-mode form.sign-in-form {
    z-index: 1;
    opacity: 0;
  }

  .container.sign-up-mode form.sign-up-form {
    z-index: 2;
    opacity: 1;
  }

  @media (max-width: 870px) {
    .container {
      min-height: 880px;
      height: 100vh;
    }

    .container::before {
      width: 1500px;
      height: 1500px;
      left: 30%;
      bottom: 68%;
      transform: translateX(-50%);
      right: initial;
      top: initial;
      transition: 2s ease-in-out;
    }

    .sign-in-sign-up {
      width: 100%;
      left: 50%;
      top: 80%;
      transform: translate(-50%, -100%);
      transition: 1s 0.8s ease-in-out;
    }

    .panels-container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr 1fr;
    }

    .panel {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 2.5rem 8%;
    }

    .panel .content {
      padding-right: 15%;
      transition: 0.9s 0.8s ease-in-out;
    }

    .panel h3 {
      font-size: 1.2rem;
    }

    .panel p {
      font-size: 0.7rem;
      padding: 0.5rem 0;
    }

    .btn.transparent {
      width: 110px;
      height: 35px;
      font-size: 0.7rem;
    }

    .image {
      width: 200px;
      transition: 0.9s 0.6s ease-in-out;
    }

    .left-panel {
      grid-row: 1 / 2;
    }

    .right-panel {
      grid-row: 3 / 4;
    }

    .right-panel .content,
    .right-panel .image {
      transform: translateY(300px);
    }

    .container.sign-up-mode::before {
      transform: translate(-50%, 100%);
      bottom: 32%;
      right: initial;
    }

    .container.sign-up-mode .left-panel .image,
    .container.sign-up-mode .left-panel .content {
      transform: translateY(-300px);
    }

    .container.sign-up-mode .sign-in-sign-up {
      top: 5%;
      transform: translate(-50%, 0);
      left: 50%;
    }
  }

  @media (max-width: 570px) {
    form {
      padding: 0 1.5rem;
    }

    .image {
      display: none;
    }

    .panel .content {
      padding: 0.5rem 1rem;
    }

    .sign-in-sign-up {
      top: 70%;
    }

    .container::before {
      bottom: 72%;
      left: 50%;
    }

    .container.sign-up-mode::before {
      bottom: 28%;
      left: 50%;
    }
  }
`
