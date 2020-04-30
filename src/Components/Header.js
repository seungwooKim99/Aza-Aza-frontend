import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Header = styled.header`
    border: 0.4px solid black;
    background-color: ${props => props.theme.darkOrangeColor};
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1px;
    border: 0px;
`;

const HeaderWrapper = styled.div`
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    display: flex;
    justify-content: space-around;
`;

const HeaderColumn = styled.div`
`;

const Text = styled.span`
    font-weight: 200;
    color: white;
    font-size: 15px;
`;

const HeaderLink = styled(Link)`

`;

export default () => (
    <Header>
        <HeaderWrapper>
            <HeaderColumn>
                <Text>
                    Aza Aza
                </Text>
            </HeaderColumn>
            <HeaderColumn>
                <Link to="/">
                    <Text>All Goals</Text>
                </Link>
            </HeaderColumn>
            <HeaderColumn>
                <Link to="/achieved">
                    <Text>Achieved Goals</Text>
                </Link>
            </HeaderColumn>
            <HeaderColumn>
                <Link to="/achieving">
                    <Text>Achieving Goals</Text>
                </Link>
            </HeaderColumn>
            <HeaderColumn>
                <Link to="/mygoals">
                    <Text>My Goals</Text>
                </Link>
            </HeaderColumn>
            <HeaderColumn>
                <Link to="/:username">
                    <Text>Profile</Text>
                </Link>
            </HeaderColumn>
        </HeaderWrapper>
    </Header>
);