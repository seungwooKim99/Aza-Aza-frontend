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

export const CREATE_ACCOUNT = gql`
    mutation createAccount(
        $email: String!
        $username: String!
        $firstName: String
        $lastName: String
        $password: String!
    ){
        createAccount(
            email: $email
            username: $username
            firstName: $firstName
            lastName: $lastName
            password: $password
        )
    }
`;

export const CONFIRM_SECRET = gql`
    mutation confirmSecret($secret: String!, $email: String!){
        confirmSecret(secret: $secret, email: $email)
    }
`;

export const UNLOCK_USER = gql`
    mutation unlockUser($email: String!){
        unlockUser(email: $email)
    }
`;

export const REQUEST_SECRET = gql`
    mutation requestSecret($email: String!){
        requestSecret(email: $email)
    }
`;