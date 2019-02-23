import React from 'react'
import Friend from './Friend.js'

const Person = (props) => {
    const mappedFriends = props.friends.map((friend, i) => <li><Friend name={friend} key={i}/></li>)
    return (
        <div style={{ backgroundColor: props.favColor }}>
            <h1>Hi, my name is {props.name}, and I am {props.age} years old.</h1>
            <h3>These are {props.name}'s friends:</h3>
            <ul>
                {mappedFriends}
            </ul>
        </div>
    )
}
export default Person