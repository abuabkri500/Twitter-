"use client"
import React from 'react'
import { useQuery } from '@apollo/client'
import { gql } from "graphql-tag"
import Loading from './Loading'

const GETUSERS = gql`
    query getAllUser {
        users {
            id
            email
            password
            username
        }
    }
`;

type User = {
    id: string
    email: string
    password?: string
    username: string
}


const userDetails = () => {
    const { data, loading, error } = useQuery(GETUSERS)
    console.log(data);
    if (loading) {
        return <Loading />
    }
    if (error) {
        throw new Error(error.message)
    }
    if (data) {
        return (
            <div>
                {data.users.map((user: User) => (
                    <>
                        <h1>{user.username}</h1>
                    </>
                ))}
            </div>
        )
    }
}

export default userDetails