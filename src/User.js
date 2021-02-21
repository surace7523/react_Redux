import React from 'react'


const User=(props)=>{
    console.warn(props.data)
    const{data}=props

    return (
        <div>
            <h1>userComponent</h1>
            <h4>{data.name}</h4>
        </div>
    )
}

export default User;
