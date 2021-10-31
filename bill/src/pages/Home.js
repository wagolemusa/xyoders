import React, { useEffect, useState } from  'react'
import Header from '../Header/Header'
import Posts from '../posts/Posts';
import Middle_pages from './Middle_page';
import axios from "axios"
import { useLocation } from 'react-router';

export default function Home(){
    const [posts, setPosts] = useState([]);
    const { search} = useLocation();

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("http://localhost:5000/api/posts" +search)
            setPosts(res.data)
          
        }
        fetchPosts();
    },[search])
    return(
        <div className="home">
            <Header/>
            <Posts posts={posts} />
            <Middle_pages/>
        </div>
    )
}