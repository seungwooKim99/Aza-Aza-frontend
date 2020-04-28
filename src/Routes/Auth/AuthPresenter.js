import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Box = styled.div`
    ${props => props.theme.whiteBox}
    width: 100%;
    max-width: 300px;
`;

const InfoBox = styled.div`
    width: 200px;

`;

const UserBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Container = styled(Box)`
    padding: 50px 40px 40px 40px;
    padding-bottom: 30px;
    margin-bottom: 15px;
    form {
        width: 100%;
        input{
            width: 100%;
            &:not(:last-child){
                margin-bottom: 7px;
            }
        }
        button {
            margin-top: 10px;
            margin-bottom: 5px;
        }
    }
`;

const SignUpBox = styled.div`
    width: 100%;
    padding-top: 8px;
    align-items: center;
    text-align: center;
`;

const TextBox = styled.div`
    font-size: 11px;
    color: ${props => props.theme.blackColor};
`;

const SignUpLink = styled.span`
    color: ${props => props.theme.darkOrangeColor};
    cursor: pointer;
`;

export default ({
    setAction,
    action,
    email,
    password,
    username,
    firstName,
    lastName,
    secret,
    onSubmit,
    toSignUp
}) => {

    return (
        <Wrapper>
            <Container>
                <InfoBox></InfoBox>
                <UserBox>
                    {action === "login" && (
                        <>
                            <form onSubmit={onSubmit}>
                                <Input placeholder={"Email"} {...email} type="email" />
                                <Input placeholder={"Password"} {...password} type="password" />
                                <Button text={"Log in"} />
                            </form>
                            <SignUpBox>
                                <TextBox>
                                    If you don't have account, <SignUpLink onClick={toSignUp}>Sign Up</SignUpLink>
                                </TextBox>
                            </SignUpBox>
                        </>)}
                    {(action === "signUp" || action === "confirm") && (
                        <>
                            <form onSubmit={onSubmit}>
                                <Input placeholder={"Email"} {...email} type="email" />
                                <Input placeholder={"Password"} {...password} type="password" />
                                <Input placeholder={"Username"} {...username} type="text" />
                                <Input placeholder={"First Name"} {...firstName} type="text" />
                                <Input placeholder={"Last Name"} {...lastName} type="text" />
                                {(action === "signUp") && (
                                    <Button text={"Sign up"} />
                                )}
                            </form>
                        </>
                    )}
                    {action === "confirm" && (
                        <>
                            <form onSubmit={onSubmit}>
                                <Input placeholder={"Paste your secret"} {...email} required {...secret} />
                                <Button text="confirm" />
                            </form>
                        </>
                    )
                    }
                </UserBox>
            </Container>
        </Wrapper>
    );
};