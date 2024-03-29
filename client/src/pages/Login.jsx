import { Link } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../responsive"
import { useContext, useRef } from "react"
import { loginCall } from "../apiCalls"
import { Context } from "../context/Context"

const Container = styled.div`
  min-width: 100vw;
   min-height: 100vh; 
   background-color: #f0f2f5;
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
   

  
`

const Wrapper = styled.div`
   width: 70%;
   height: 70%;
   display: flex;
 /*   ${mobile({flexDirection:"column"})} */
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
/*   ${mobile({alignItems:"flex-start"})} */
 
`

const Logo = styled.h3`
   font-size: 60px;
   color: #4d4dff;
`

const Desc = styled.span`
  font-size: 25px;
  
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
`

const Box = styled.div`
   height: 300px;
   background-color: white;
   border-radius: 10px;
  /*  display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between; */
    padding: 20px;
   /* ${mobile({width:"250px", marginTop:"15px"})} */
`

const Form = styled.form`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-between;
     gap: 20px;
`

const Input = styled.input`
  width: 350px;
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid gray;
  padding-left: 5px;
/*   ${mobile({width:"250px"})} */

  &:focus{
    outline: none;
  }
`

const Button = styled.button`
   width: 350px;
  height: 50px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  color: white;
  background-color: #4d4dff;
  cursor: pointer;
/*   ${mobile({width:"250px"})} */
`

const Forgot = styled.span`
   
`

const RegisterButton = styled.button`
   width: 300px;
   height: 50px;
   border-radius: 10px;
   border: none;
   font-size: 20px;
   background-color: #2d9649;
   color: white;
   cursor: pointer;
/*    ${mobile({width:"250px"})} */
`

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {dispatch} = useContext(Context);
  const handleClick = (e) =>{
    e.preventDefault();
    loginCall(
      {email:email.current.value, password:password.current.value}, dispatch
    );
  }
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>Hello</Logo>
                <Desc>Connect with friends and the world</Desc>
            </Left>
            <Right>
                <Box>
                    <Form onSubmit={handleClick}>
                    <Input placeholder="E-mail" type={"email"} required={true} ref={email}></Input>
                    <Input placeholder="Password" type={"password"} required={true} minLength={6} ref={password}></Input>
                    <Button type="submit">Log In</Button>
                    <Forgot>Forgot Password?</Forgot>
                    <Link to="/register">
                    <RegisterButton>Create a New Account</RegisterButton>
                    </Link>
                    </Form>
                </Box>
            </Right>
        </Wrapper>
    </Container>
  )
}
