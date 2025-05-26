import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Layout from './pages/Layout';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import AddBlog from './pages/AddBlog';
import EditBlog from './pages/EditBlog';
import NotFound from './pages/NotFound';


function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<BlogList />} />
        <Route path="blog/:blogId" element={<BlogDetail />} />
        <Route path="blog/new" element={<AddBlog />} />
        <Route path="blog/edit/:blogId" element={<EditBlog />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
