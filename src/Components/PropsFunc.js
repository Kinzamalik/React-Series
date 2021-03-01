import userEvent from '@testing-library/user-event'
import React,{useState} from 'react'

function PropsFunc(props) {
    const [name, setName] = useState('Kinza');
    console.warn(props)
    return (
        <div>
            <h1 name={name}></h1>
            <button onClick={()=>{setName('Malik')}}>update</button>
        </div>
    )
}

export default PropsFunc
