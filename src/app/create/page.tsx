"use client"
import FormPost from '@/Components/FormPost'
import { FormInputPosts } from '@/types'
import { log } from 'console'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

const page = () => {
    const handleCreatePost: SubmitHandler<FormInputPosts> = (data) => {
        console.log(data);
    }
    return (
        <div>
            <h3 className="text-2xl my-4 font-bold text-center">Add new post</h3>
            <FormPost submit={handleCreatePost} />
        </div>
    )
}

export default page
