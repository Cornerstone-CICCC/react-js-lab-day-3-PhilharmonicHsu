import { type ChangeEvent, useState } from 'react'
import { useBlogContext } from '../context/BlogContext'
import type { Blog } from '../types/Blog';
import {v4 as uuid} from 'uuid'
import { useNavigate } from 'react-router-dom';

export default function AddBlog() {
    const { blogs, dispatch } = useBlogContext()
    const navigate = useNavigate()
    
    const [data, setData] = useState<Blog>({
        id: uuid(),
        title: '',
        content: '',
        published: false
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setData(prevState => ({
          ...prevState,
          [name]: value
        }))
    }    

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target

        setData(prevState => {
    
          return {
            ...prevState,
            published: checked
          }
        })
    }

    const handleAdd = () => {
        dispatch({type: 'ADD', payload: data})
        navigate(-1)
    }

    return <div className='flex-1 p-4'>
        <h1 className='text-4xl'>New Blog</h1>
        <br />
        <div className='flex flex-col gap-4'>
            <div className='flex w-full items-center gap-4'>
                <label className='w-40' htmlFor='title'>Title:</label>
                <input 
                    className='border-1 p-1 flex-1' 
                    type="text" 
                    id="title" 
                    name='title' 
                    value={data?.title} 
                    onChange={handleChange}
                />
            </div>
            <div className='flex w-full items-start gap-4'>
                <label className='w-40' htmlFor='content'>Context:</label>
                <textarea 
                    className='border-1 p-1 flex-1' 
                    id="context" 
                    name='content' 
                    value={data?.content} 
                    onChange={handleChange}
                />
            </div>
            <div className='flex w-full items-center gap-4'>
                <label className='w-40' htmlFor='published'>Published:</label>
                <input 
                    type="checkbox" 
                    name='published' 
                    checked={data?.published} 
                    onChange={handleCheckboxChange}
                />
            </div>
        </div>
        <div className='flex justify-end'>
            <button 
                className='bg-gray-800 px-4 py-2 text-white cursor-pointer'
                onClick={handleAdd}
            >
                Add
            </button>
        </div>
    </div>
}