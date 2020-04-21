import { gql } from "apollo-boost";

export const LOG_IN = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password:$password)
    }
`;

export const LOCAL_LOG_IN = gql`
    mutation logUserIn($token: String!){
        logUserIn(token: $token) @client
    }
`;