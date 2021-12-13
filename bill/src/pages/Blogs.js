import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

export default function Blog({post}){
    return(
        <div>
        <section>
                <div className="container">
                            <div className="mini-track__body">
                            <Link to={`/post/${post._id}`}>
                                {post.photo && <img className="postImg" src={post.photo} alt="" />}
                            </Link><br/>
                               
                                <div className="postCats">
                              
                                    {post.categories.map((c) =>{
                                       return(<span className="postcats">{c.name}</span>);
                                    })}
                             <div className="linkme">
                                <Link to={`/post/${post._id}`} className="link">
                                    <span className="postTitle">{post.title}</span>
                                </Link>
                            </div>
                            
                                <p>
                         
                         
                                  {post.desc.substring(0, 100)}  
                                </p>
                                <div className="button--link-small">
                                <Link to={`/post/${post._id}`} className="link">
                                    <span className="postTitle">DETAILS <i class="fas fa-arrow-right"></i></span>
                                </Link>
                               </div>
                               
                                </div>
                                {/* <div className="postdate">{new Date(post.createdAt).toDateString()}</div> */}
                    </div>
                </div>
           
        </section>
        </div>
    )
}
