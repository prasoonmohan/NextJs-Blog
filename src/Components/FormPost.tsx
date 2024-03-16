import React from 'react'

const FormPost = () => {
    return (
        <form action="" className='flex flex-col items-center justify-center gap-5 mt-10'>
            <input type="text" placeholder="post title..." className="input input-bordered w-full max-w-lg" />
            <textarea className="textarea textarea-bordered w-full max-w-lg" placeholder="post content..."></textarea>
            <select className="select select-bordered w-full max-w-lg">
                <option disabled selected>Who shot first?</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
        </form>
    )
}

export default FormPost
