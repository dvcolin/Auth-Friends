import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import SignUpForm from './SignUpForm'

const Friends = () => {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data)
            setFriends(res.data)
        })
        .catch(err => console.log(err.response))
    }, [])

    const addFriend = values => {
        setFriends(values);
    }

    return (
        <div>
            <SignUpForm addFriend={addFriend} />
            <h1>Friends</h1>
            {friends.map(friend => 
            <div key={friend.id}>
                <h2>{friend.name}</h2>
                <p>{friend.email}</p>
                <p>{friend.age}</p>
            </div>
            )}
        </div>
    )
}

export default Friends
