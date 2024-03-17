"use client"
import React from 'react'
import { useForm } from 'react-hook-form'

const FormPost = () => {
    const { register, handleSubmit } = useForm();
    const submit = (data: any) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(submit)} action="" className='flex flex-col items-center justify-center gap-5 mt-10'>
            <input type="text" placeholder="post title..."
                {...register("title")}
                className="input input-bordered w-full max-w-lg" />
            <textarea className="textarea textarea-bordered w-full max-w-lg"
                {...register("content")}
                placeholder="post content..."></textarea>
            <select {...register("tag")} className="select select-bordered w-full max-w-lg">
                <option disabled selected>select tags</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>

            <button className='btn btn-primary w-full max-w-lg'>Create</button>
        </form>
    )
}

export default FormPost
