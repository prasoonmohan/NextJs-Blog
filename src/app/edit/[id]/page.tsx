"use client"

import FormPost from '@/Components/FormPost';
import { FormInputPosts } from '@/types';
import React from 'react'
import { SubmitHandler } from 'react-hook-form';

const EditPostPage = () => {
    const handleEditPOst: SubmitHandler<FormInputPosts> = (data) => {
        console.log(data);
    }
    return (
        <div>
            <h3 className="text-2xl my-4 font-bold text-center">Edit post</h3>
            <FormPost submit={handleEditPOst} isEditing />
        </div>
    )
}

export default EditPostPage
