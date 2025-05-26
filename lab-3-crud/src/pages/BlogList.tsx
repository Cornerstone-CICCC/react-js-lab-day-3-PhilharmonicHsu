import { Link, useNavigate } from 'react-router-dom'
import { useBlogContext } from '../context/BlogContext'


export default function BlogList() {
    const navigate = useNavigate();
    const { blogs, dispatch } = useBlogContext()

    const handleDelete = (blogId: string) => {
        dispatch({type: 'DELETE', payload: blogId})
    }

    return <div className="flex-1 px-4 py-2">
        <div className='flex justify-between mb-4'>
            <div className='text-4xl'>Blogs</div>
            <button 
                className='bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer'
                onClick={() => navigate("new")}
            >
                New Blog
            </button>
        </div>
        <ul>
            {blogs.map((blog, index) => <li key={index}>
                <div className='flex justify-between'>
                    <Link className='text-xl' to={blog.id}>{blog.title}</Link>
                    <button 
                        className='bg-red-400 text-white px-4 py-2 rounded-md cursor-pointer'
                        onClick={() => handleDelete(blog.id)}
                    >
                        DELETE
                    </button>
                </div>
            </li>)}
        </ul>
    </div>
}