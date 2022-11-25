import React from 'react'
import Personal_info from '../Personal_info/Personal_info'
import Name from '../Name/Name'
import Address from '../Address/Address'
import Email from '../Email/Email'
import '../Profile/Profile.css'
const Profile = () => {
    return (
        <div className='profile'>
            <Address />
            <Personal_info />
            <Name />
            <Email/>
        </div>
    )
}

export default Profile
