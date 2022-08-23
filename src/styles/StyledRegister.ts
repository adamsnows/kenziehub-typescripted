import styled from 'styled-components';


const StyledLogin = styled.div`
    background-color: var(--grey-3) ;
    color: white;
    border-radius: 5px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: fadeIn 3s;
    .register-create, .register-description {
        text-align: center;
        margin: 15px;
    }
    .register-create {
        font-weight: bolder;
    }
    .register-description {
        font-size: 0.7rem;
        color: var(--grey-1);
    }
    .login {
    display: flex;
    justify-content: center;
    padding-top: 2rem;
    font-weight: bolder;
    }
    .register {
        display: flex;
        justify-content: center;
        font-weight: lighter;
        color: var(--grey-1);
        font-size: 0.8rem;
        margin: 10px;
    }
    .label {
        font-size: 0.7rem;
    }
    
    form {
    display: flex;
    justify-content: center;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    }
    label {
    margin: 10px 0 10px 0;
    }
    input, select {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--grey-2);
    color: var(--grey-1);
    }
    input::-webkit-input-placeholder {
        color: var(--grey-1);
    }
    input:focus::-webkit-input-placeholder {
    color: transparent;
    transition: 0.5s;
 }
    button {
    border-radius: 5px;
    border: none;
    margin: 15px 0 15px 0;
    padding: 10px;
    }
    .link-button {
        width: 100%;
    }
    .login-button {
        width: 100%;
    }
    .register-button {
        background-color: var(--color-primary-Disable);
        color: white;
    }
    @media screen and (min-width: 900px){
        width: 500px;
    }
`

export default StyledLogin