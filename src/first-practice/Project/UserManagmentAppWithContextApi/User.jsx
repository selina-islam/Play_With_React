import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const User = ({ user }) => {
        const { id, name } = user
        const { user: users, setUser } = useContext(UserContext)

        const handleDelete = () => {
                const filteredUsers = users.filter((u) => u.id !== id)
                setUser(filteredUsers)
        }

        return (
                <div
                        style={{
                                marginBottom: '10px',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                maxWidth: '400px',
                        }}
                >
                        <div>
                                <p>ID: {id}</p>
                                <h3>{name}</h3>
                        </div>
                        <button
                                onClick={handleDelete}
                                style={{
                                        backgroundColor: 'red',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '3px',
                                        cursor: 'pointer',
                                        padding: '5px 10px',
                                        height: 'fit-content',
                                }}
                        >
                                Delete
                        </button>
                </div>
        )
}

export default User