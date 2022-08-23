
import styled from "styled-components";

const StyledDashboard = styled.div`
    width: 80%;
    height: 70%;
    justify-content: unset;
    padding: 20px;
    animation: fadeInDown 1s;
    
    .button-logout {
        background-color: var(--grey-3);
        padding: 10px;
        width: 80px;
        border-radius: 5px;
        color: white;
        border: none;
        transition: 0.5s;
    }
    .button-logout:hover {
        background-color: var(--grey-2);
        transition: 0.5s;
    }
    .header-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid var(--grey-3);
    }
    .user-name {
        color: white;
        font-weight: bolder;
    }
    .user-module {
        color: var(--grey-1);
        margin: 20px 0 20px 0;
        font-size: 0.9rem;
    }
    .user-name, .user-module {
        margin: 30px 0 30px 0;
    }
    .user-container {
        border-bottom: 2px solid var(--grey-3);
    }
    .future-description {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bolder;
        margin: 2rem 0 2rem 0;
        text-align: center;

        .icon {
            margin: 50px;
            font-size: 5rem;
            animation: pulse 1s;
            animation-iteration-count: infinite;
        }
    }
    .languages-container {
        margin-top: 2rem;
        width: 100%;
        max-height: 450px;
        overflow-y: auto;
        border-radius: 5px;
        background-color: var(--grey-3);
        display: flex;
        flex-direction: column;
        align-items: center;
        ::-webkit-scrollbar {
        width: 5px;
  }

        ::-webkit-scrollbar-thumb {        
        background-color: var(--grey-2);
        border-radius: 1.25rem;
  }
    }
    
    .tecnologies {
        display: flex;
        width: 100%;
        color: white;
        justify-content: space-between;
        margin-top: 2rem;
        align-items: center;
        font-size: 1.2rem;
        font-weight: bolder;        
    }
    .add-icon {
        padding: 10px;
        border-radius: 5px;
        background-color: var(--grey-3);
        transition: 0.5s;
        cursor: pointer;
    }
    .add-icon:hover {
        background-color: var(--grey-2);
        transition: 0.5s;
    }
    .language {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0 1rem 0;
        width: 80%;
        background-color: var(--grey-4);
        padding: 20px;
        border-radius: 5px;
        color: white;
        animation: fadeInDown 1s;
        cursor: pointer;
        transition: 0.3s;
        :hover {
            background-color: var(--grey-2);
            transition: 0.3s;
        }
    }
    .language-name {
        font-weight: bolder;
    }
    @media screen and (min-width: 900px) {
        width: 600px;
        .user-container {
            display: flex;
            justify-content: space-between;
        }       
    }
`

export default StyledDashboard