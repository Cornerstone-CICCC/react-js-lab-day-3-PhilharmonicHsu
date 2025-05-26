import { useNavigate, useParams } from "react-router-dom";
import { useBlogContext } from '../context/BlogContext'


export default function BlogDetail() {
    const { blogId } = useParams();
    const { blogs, dispatch } = useBlogContext()
    const navigate = useNavigate();
    
    const blog = blogs.find(blog => blog.id === blogId)!;

    return <div className="flex-1">
        <p>Title: {blog.title}</p>
        <p>Contect: {blog.content}</p>
        <p>Published: {blog.published ? 'Published' : 'Not Published Yet'} </p>
        <div className="flex gap-4">
            <button 
                className="text-white bg-gray-800 rounded-md px-4 py-2 cursor-pointer"
                onClick={() => navigate(-1)}
            >
                Back To List
            </button>
        </div>
        
    </div>
}