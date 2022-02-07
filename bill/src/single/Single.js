import React from 'react';
import { useContext, useEffect, useState } from "react";
import './single.css'
import { useLocation } from 'react-router'
import axios from 'axios'
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";


function Single() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const { user } = useContext(Context);

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        };
        getPost();
    }, [path]);

    // Deleting
    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username }
            });
            window.location.replace("/")
        } catch (err) { }
    };

    // Update
    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                desc
            });
            // window.location.reload();
            setUpdateMode(false)
        } catch (err) { }
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="singlePost">
                            <div className="singlePostWrapper">

                                {post.photo && (
                                    <img
                                        src={post.photo}
                                        alt=""
                                        className="singlePostImg"
                                    />
                                )}

                                {
                                    updateMode ? (
                                        <input type="text" value={title} className="singlePostInput"
                                            onChange={(e) => setTitle(e.target.value)} />
                                    ) : (

                                        <h1 className="singlePostTile">
                                            {title}
                                            {post.username === user?.username && (
                                                <div className="singlePostEdit">
                                                    <i className="singlePostIcon far fa-trash-alt"
                                                        onClick={handleDelete}></i>
                                                    <i className="singlePostIcon fas fa-dumpster-fire"
                                                        onClick={() => setUpdateMode(true)}></i>
                                                </div>
                                            )}

                                        </h1>
                                    )}

                                <div className="singlePostInfo">
                                    <span className="singlePostAuthor">Author:
                                        <Link to={`/?user=${post.username}`} className="link">
                                            <b>{post.username}</b>
                                        </Link>
                                    </span>
                                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                                </div>
                                {updateMode ? (
                                    <textarea className="singlePostDescUpdate" value={desc}
                                        onChange={(e) => setDesc(e.target.value)}

                                    />
                                ) : (
                                    <p className="singlePostDesc">
                                        {desc}
                                    </p>
                                )}
                            </div>
                            {
                                updateMode && (
                                    <button className="siglePostButton" onClick={handleUpdate}>Update</button>
                                )
                            }

                        </div>
                    </div>
                    <br /><br /><br />
                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Single 