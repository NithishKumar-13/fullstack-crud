import React, { FC } from 'react'
import InputForm from './components/InputForm'
import Users from './components/Users'
import UpdateUser from './components/UpdateUser'
import Container from './components/Container'
import './App.scss'

const App:FC = () => {
    return (
        <div className='app'>
            <InputForm />
            <Container>
              <Users />
              <UpdateUser />
            </Container>
        </div>
    )
}

export default App