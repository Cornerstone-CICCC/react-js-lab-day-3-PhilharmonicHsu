import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { BlogProvider } from '../context/BlogContext'


export default function Layout(){
    return <>
        <div className="flex flex-col h-screen">
            <Header firstname="Phil"/>
            <BlogProvider>
                <Outlet />
            </BlogProvider>
            <Footer />
        </div>
    </>
}