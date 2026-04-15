import { gql } from "apollo-angular";

const Login = gql `
query Login($email: String!, $password: String!){
    login(email: $email, password: $password) {
        username
        email
    }
}
`

const SignUp = gql`
mutation SignUp($username: String!, $email: String!, $password: String!){
    signUp(username: $username, email: $email, password: $password){
        username
        email
        password
    }
}
`

export {Login, SignUp}