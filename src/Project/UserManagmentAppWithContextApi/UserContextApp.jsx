import React, { useState } from 'react'
import { UserContext } from './UserContext'
import Users from './Users'
import Newuser from './Newuser'

const UserContextApp = () => {
        const [user, setUser] = useState([
                { id: 1, name: 'Saiful Islam' },
                { id: 2, name: 'Mohammad (SM)' }
        ])

        return (
                <UserContext.Provider value={{ user, setUser }}>
                        <div style={{ padding: '20px' }}>
                                <Newuser />
                                <Users />
                        </div>
                </UserContext.Provider>
        )
}

export default UserContextApp