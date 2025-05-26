import { createContext, useReducer, type ReactNode, useContext } from 'react'
import type { Blog, BlogAction } from '../types/Blog'

type BlogContextType = {
  blogs: Blog[]
  dispatch: React.Dispatch<BlogAction>
}

const BlogContext = createContext<BlogContextType | undefined>(undefined)

const BlogReducer = (state: Blog[], action: BlogAction): Blog[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload]
    case 'EDIT':
      return state.map(blog =>
        blog.id === action.payload.id ? { ...blog, ...action.payload } : blog
      )
    case 'DELETE':
      return state.filter(blog => blog.id !== action.payload)
    default:
      return state
  }
}

export function BlogProvider({ children }: { children: ReactNode }) {
  const [blogs, dispatch] = useReducer(BlogReducer, [])

  return (
    <BlogContext.Provider value={{ blogs, dispatch }}>
      {children}
    </BlogContext.Provider>
  )
}

export const useBlogContext = () => {
  const context = useContext(BlogContext)
  if (!context) {
    throw new Error('useBlogContext must be used within a BlogProvider')
  }
  return context
}