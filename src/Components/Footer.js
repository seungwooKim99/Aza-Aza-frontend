import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    margin: 50px 0px;
    color: ${props => props.theme.darkGreyColor};
`;

export default () => (
    <Footer>
        Aza-Aza service / {new Date().getFullYear()} Copyright &copy; seungwooKim99
    </Footer>
);