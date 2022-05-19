import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBlogs(){
    const [post, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () =>{
            const res = await axios.get("posts/all/post")
            setCats(res.data);
        };
        getCats();
    }, []);
    
return(
    <div className="blog-back">
    <div className="posts">
        <div className="container-fluid">
        <div className="row">
            {post.map((p)=>(
                <div  className="col-md-3">   
                            <div className="mini-track__body">
                            <Link to={`/post/${p._id}`}>
                                {p.photo && <img className="postImg" src={p.photo} alt="" />}
                            </Link><br/>
                                <div className="postCats">
                                 
                             <div className="linkme">
                                <Link to={`/post/${p._id}`} className="link">
                                    <span className="postTitle">{p.title}</span>
                                </Link>
                            </div>
                            
                                <p>
                                    {p.desc.substring(0, 100)}
                                </p>
                                <div className="button--link-small">
                                <Link to={`/post/${p._id}`} className="link">
                                    <span className="postTitle">DETAILS <i class="fas fa-arrow-right"></i></span>
                                </Link>
                               </div>
                               
                                </div>
                                {/* <div className="postdate">{new Date(post.createdAt).toDateString()}</div> */}
                    </div>
                </div>
                
        ))}
        
    </div>
    </div>
</div>
</div>
)
 }
export default AllBlogs;