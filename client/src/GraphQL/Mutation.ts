import { gql } from '@apollo/client'

export const CREATE_USER = gql`
    mutation createUser($firstName: String!, $lastName: String!, $email: String!, $age: Int!) {
        createUser(firstName: $firstName, lastName: $lastName, email: $email, age: $age) {
            firstName
            lastName
            email
            age
        }
    }
`

export const DELETE_USER = gql`
    mutation deleteUser($id: ID) {
        deleteUser(id: $id) {
            id
        }
    }
`

export const UPDATE_USER = gql`
mutation updateUser($firstName: String, $lastName: String, $email: String, $age: Int, $id: ID) {
    updateUser(firstName: $firstName, lastName: $lastName, email: $email, age: $age, id: $id) {
      firstName
      lastName
      email
      age
    }
  }
`