import { FC } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_USERS } from '../GraphQL/Queries'
import { DELETE_USER } from '../GraphQL/Mutation'
import './Users.scss'

const Users:FC = () => {
    const { data: userData, loading } = useQuery(GET_USERS)
    const [ deleteUser, { data } ] = useMutation(DELETE_USER)
    

    const handleDelete = (id:any):void => {
        deleteUser({ variables: { id } })
    }

    return (
        <div className='users'>
            {!loading && userData.getUsers.map((user:any) => (
                <div className='users__card'>
                    <p className='users__description'><span>Id :</span> {user.id}</p>
                    <p className='users__description'><span>FirstName :</span> {user.firstName}</p>
                    <p className='users__description'><span>LastName: </span> {user.lastName}</p>
                    <p className='users__description'><span>Email :</span> {user.email}</p>
                    <p className='users__description'><span>Age :</span> {user.age}</p>
                    <button className='users__btn' onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Users