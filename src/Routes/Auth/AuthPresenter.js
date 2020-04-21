import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

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
    max-width: 350px;
`;

const Form = styled(Box)`
    padding: 40px;
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
        }
    }
`;

export default ({
    setAction,
    action,
    email,
    password,
    onSubmit
}) => {

    return (
        <Wrapper>
            <Form>
                {action === "login" && (
                    <>
                        <form onSubmit={onSubmit}>
                            <Input placeholder={"Email"} {...email} type="email" />
                            <Input placeholder={"Password"} {...password} type="password" />
                            <Button text={"Log in"} />
                        </form>
                    </>)}

            </Form>
        </Wrapper>
    );
};