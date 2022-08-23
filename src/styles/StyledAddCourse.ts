
import styled from "styled-components";

const StyledPai = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        background-color: rgba(18, 18, 20, 0.6);
        backdrop-filter: blur(2px);
        width: 100%;
        height: 100%;
        top: 0;
        animation: fadeIn 1s;
        font-family: 'Inter';
        
    label {
        font-size: 0.7rem;
    }
    .addCourse {
        width: 100%;
        height: 300px;
        background-color: var(--grey-3);
        border-radius: 5px;
        overflow: hidden;
        width: 80%;
        .input-tech-container {
            display: flex;
            flex-direction: column;
            margin: 10px;
            color: white;
            input, select {
                padding: 10px;
                border: 1px solid white;
                border-radius: 5px;
                background-color: var(--grey-2);
                margin: 10px 0 10px 0;
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
                padding: 10px;
                border-radius: 5px;
                border: none;
                color: white;
                background-color: var(--color-primary);
            }
        }
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 50px;
            background-color: var(--grey-2);
            box-shadow: 0px 0px 6px 5px var(--grey-2);
            h2, .icon {
                margin: 10px;
                color: white;
            }
            h2 {
                font-weight: bolder;
            }
            .icon {
                cursor: pointer;
            }
        }

    }
    @media screen and (min-width: 900px){
    .addCourse {
            width: 500px;
        } 
}
`

export default StyledPai