import { FC, useState, FormEvent, ChangeEvent } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_USER } from '../GraphQL/Mutation'
import './UpdateUser.scss'

const UpdateUser: FC = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        age: 0
    })
    const [id, setId] = useState('')
    const [updateUser, { error }] = useMutation(UPDATE_USER)

    const handleUpdate = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        updateUser({ variables: { firstName: user.firstName, lastName: user.lastName, email: user.email, age: +user.age, id: id }})
        setUser({
            firstName: '',
            lastName: '',
            email: '',
            age: 0
        })
    }

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target
        setUser(prevSt => ({...prevSt, [name] : value}))
    }

    return (
        <form className='update-user' onSubmit={handleUpdate}>
            <input type='number' className='update-user__input'  placeholder='Enter Id to be updated' value={id} onChange={e => setId(e.target.value)} />
            <input type='text' className='update-user__input'  name='firstName' placeholder='Update FirstName' value={user.firstName} onChange={handleChange} />
            <input type='text' className='update-user__input'  name='lastName' placeholder='Update LastName' value={user.lastName} onChange={handleChange} />
            <input type='email' className='update-user__input'  name='email' placeholder='Update Email' value={user.email} onChange={handleChange} />
            <input type='number' className='update-user__input'  name='age' placeholder='Update Age' value={user.age} onChange={handleChange} />
            <button className='update-user__btn' type='submit'>Update</button>
        </form>
    )
} 

export default UpdateUser