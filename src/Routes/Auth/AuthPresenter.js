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
    max-width: 600px;
`;

const InfoBox = styled.div`
    width: 50%;
    float: left;

`;

const UserBox = styled.div`
    width: 50%;
    float: right;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Container = styled(Box)`
    padding: 70px 40px 40px 40px;
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
            margin-top: 20px;
            margin-bottom: 20px;
        }
    }
`;

const SignUpBox = styled.div`
    width: 100%;
    padding-top: 8px;
    align-items: center;
    text-align: center;
    padding-bottom: 20px;
`;

const TextBox = styled.div`
    font-size: 11px;
    color: ${props => props.theme.blackColor};
`;

const SignUpLink = styled.span`
    color: ${props => props.theme.darkOrangeColor};
    cursor: pointer;
`;

const Info = styled.div`
    font-size: 30px;
    font-weight: 300;
    color: ${props => props.theme.darkOrangeColor};
    padding-bottom: 40px;
`;

const SubInfo = styled(Info)`
    font-size: 13px;
    font-weight: 200;
    color: ${props => props.theme.blackColor};
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
                <InfoBox>
                    <Info>Aza Aza Service</Info>
                    <SubInfo>We help you achieve your goals</SubInfo>
                </InfoBox>
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