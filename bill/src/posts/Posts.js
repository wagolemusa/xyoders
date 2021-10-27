import React from "react";
import Blog from "../pages/Blogs";

export default  function Posts({posts}){
    return(
        <div className="blog-back">
        <div className="posts">
            <div className="container">
            <div className="row">
                {posts.map((p)=>(
                    <div  className="col-md-4">
                        <Blog post={p}/>
                    </div>
            ))}
            
        </div>
        </div>
    </div>
    </div>
    );
}
