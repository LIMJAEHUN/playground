import styled from "styled-components";


const Loginarea = styled.div`
    width: 50vh;
    height: 20vh;
    position: relative;
    margin: auto;
    top:-30%;
    background-color: white;
    border: 1px solid black;
`
const Inputarea = styled.div`

`
const Inputbox = styled.div`
    width: 200px;
    background-color: white;
    position: relative;
    left: 10%;
    padding: 2%;
    border: 1px solid black;
`
const LoginButton = styled.button`
    position: relative;
    right: -10%;
`
const Login = () =>{

    return(
        <Loginarea>Login
            <Inputarea>
                <Inputbox>ID</Inputbox>
                <Inputbox>PW</Inputbox>
                <LoginButton>Lbutton</LoginButton>
                <LoginButton>찾기</LoginButton>
             </Inputarea>
        </Loginarea>
    )



}
export default Login;