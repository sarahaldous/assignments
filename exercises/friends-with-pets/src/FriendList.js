import React from 'react'
import Friend from './Friend'
import { write } from 'fs';

function FriendList(props){
    const mappedFriend = props.friends.map((friend, i) =>
                <Friend key={i}
                    name={friend.name}
                    age={friend.age}
                    pets={friend.pets}/>)
    return (
        
        <div id="whole-thing">
        <h1 id="title">People and their Pets</h1>
            {mappedFriend}
            
        </div>
    )
}


export default FriendList