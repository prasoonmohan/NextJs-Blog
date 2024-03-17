"use client"
import { FormInputPosts } from '@/types'
import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormPostProps {
    submit: SubmitHandler<FormInputPosts>
}

const FormPost: FC<FormPostProps> = ({ submit }) => {
    const { register, handleSubmit } = useForm<FormInputPosts>();

    return (
        <form onSubmit={handleSubmit(submit)} action="" className='flex flex-col items-center justify-center gap-5 mt-10'>
            <input type="text" placeholder="Post title..."
                {...register("title", { required: true })}
                className="input input-bordered w-full max-w-lg" />
            <textarea className="textarea textarea-bordered w-full max-w-lg"
                {...register("content", { required: true })}
                placeholder="Post content..."></textarea>
            <select defaultValue={""} {...register("tag", { required: true })} className="select select-bordered w-full max-w-lg">
                <option disabled selected>select tags</option>
                <option>Javascript</option>
                <option>Php</option>
                <option>Python</option>
            </select>

            <button type="submit" className='btn btn-primary w-full max-w-lg'>Create</button>
        </form>
    )
}

export default FormPost
