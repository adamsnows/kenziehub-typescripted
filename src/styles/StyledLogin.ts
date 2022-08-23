import styled from 'styled-components';


const StyledLogin = styled.div`
    color: white;
    background-color: var(--grey-3) ;
    color: white;
    border-radius: 5px;
    width: 80%;
    justify-content: center;
    animation: fadeIn 3s;
    .bgPassword {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--grey-2);
        color: var(--grey-1);
        border: 1px solid white;
        border-radius: 5px;
        height: 35px;

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
    svg {
        margin: 10px;
        cursor: pointer;
        font-size: 1.5rem;
        
    }
    svg:hover {
        animation: 1s pulse;
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
    font-size: 0.7rem;
    }
    
    .login-input {
    border: 1px solid white;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--grey-2);
    color: var(--grey-1);
    }
    .password-input {
    background-color: var(--grey-2);
    border: none;
    margin: 10px;
    width: 100%;
    color: var(--grey-1);
    }
    input::-webkit-input-placeholder {
    color: var(--grey-1);
    transition: 0.5s;
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
    .enter-button {
        background-color: var(--color-primary);
        color: white;
    }
    .link-button {
        width: 100%;
    }
    .register-button {
        background-color: var(--grey-1);
        color: white;
        width: 100%;
    }
    @media screen and (min-width: 900px){
        width: 400px;
    }
`

export default StyledLogin