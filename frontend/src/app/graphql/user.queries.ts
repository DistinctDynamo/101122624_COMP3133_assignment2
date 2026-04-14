import { gql } from "apollo-angular";

const Login = gql `
query User($password: String!){
    user(password: $password) {
        username
        email
    }
}
`

const SignUp = gql`
mutation CreateUser($username: String!, $email: String!, $password: String!){
    createUser(username: $username, email: $email, password: $password){
        username
        email
        password
    }
}
`

export {Login, SignUp}