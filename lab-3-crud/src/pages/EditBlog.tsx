import { useNavigate, useParams } from "react-router-dom";
import { useBlogContext } from '../context/BlogContext'
import { type ChangeEvent, useState } from "react";
import type { Blog } from "../types/Blog";


export default function EditBlog() {
    const { blogId } = useParams();
    const navigate = useNavigate();
    const { blogs, dispatch } = useBlogContext()
    const originalBlog = blogs.find(blog => blog.id === blogId)!;

    const [blog, setBlog] = useState<Blog>(originalBlog)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setBlog(prevState => ({
            ...prevState,
            [name]: value
        }))
    }    

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target

        setBlog(prevState => {
    
            return {
            ...prevState,
            published: checked
            }
        })
    }

    const handleEdit = () => {
        dispatch({type: 'EDIT', payload: blog})
        navigate(-1)
    }


    return <div className='flex-1 p-4'>
        <h1 className='text-4xl'>Edit Blog</h1>
        <br />
        <div className='flex flex-col gap-4'>
            <div className='flex w-full items-center gap-4'>
                <label className='w-40' htmlFor='title'>Title:</label>
                <input 
                    className='border-1 p-1 flex-1' 
                    type="text" 
                    id="title" 
                    name='title' 
                    value={blog.title} 
                    onChange={handleChange}
                />
            </div>
            <div className='flex w-full items-start gap-4'>
                <label className='w-40' htmlFor='content'>Context:</label>
                <textarea 
                    className='border-1 p-1 flex-1' 
                    id="context" 
                    name='content' 
                    value={blog.content} 
                    onChange={handleChange}
                />
            </div>
            <div className='flex w-full items-center gap-4'>
                <label className='w-40' htmlFor='published'>Published:</label>
                <input 
                    type="checkbox" 
                    name='published' 
                    checked={blog.published} 
                    onChange={handleCheckboxChange}
                />
            </div>
        </div>
        <div className='flex justify-end'>
            <button 
                className='bg-gray-800 px-4 py-2 text-white cursor-pointer'
                onClick={handleEdit}
            >
                Submit 
            </button>
        </div>
    </div>
}