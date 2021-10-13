import { FC, useState, ChangeEvent, FormEvent } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_USER } from '../GraphQL/Mutation'
import './InputForm.scss'

const InputForm:FC = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        age: 0
    })
    const [createUser, { loading, error }] = useMutation(CREATE_USER)

    const handleChange = (evt : ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target
        setUser(prevSt => ({...prevSt, [name]: value}))
    }

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        console.log(user)
        createUser({ variables: { firstName: user.firstName, lastName: user.lastName, email: user.email, age: +user.age } })
        setUser({
            firstName: '',
            lastName: '',
            email: '',
            age: 0
        })
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input type='text' className='form__input' name='firstName' placeholder='Enter FirstName' value={user.firstName} onChange={handleChange} />
            <input type='text' className='form__input' name='lastName' placeholder='Enter LastName' value={user.lastName} onChange={handleChange} />
            <input type='email' className='form__input' name='email' placeholder='Enter Email' value={user.email} onChange={handleChange} />
            <input type='number' className='form__input' name='age' placeholder='Enter Age' value={user.age} onChange={handleChange} />
            <button className='form__btn' type='submit'>Create</button>
        </form>
    )
}

export default InputForm