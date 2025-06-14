import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'

const Newuser = () => {
        const [newUser, setNewUser] = useState('')
        const { user, setUser } = useContext(UserContext)

        const handleSubmit = (e) => {
                e.preventDefault()
                if (!newUser.trim()) return // empty input check

                const newUserObj = {
                        id: new Date().getTime().toString(),
                        name: newUser.trim(),
                }

                setUser([...user, newUserObj])
                setNewUser('')
        }

        return (
                <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                        <input
                                type="text"
                                placeholder="Add new user"
                                value={newUser}
                                onChange={(e) => setNewUser(e.target.value)}
                                required
                                style={{ padding: '8px', width: '250px' }}
                        />
                        <button type="submit" style={{ marginLeft: '10px', padding: '8px 12px' }}>
                                Add User
                        </button>
                </form>
        )
}

export default Newuser