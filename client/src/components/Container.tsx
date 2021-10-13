import { FC } from 'react'
import '../App.scss'

const Container: FC = (props) => {
    return (
        <div className='container'>
            {props.children}
        </div>
    )
}

export default Container