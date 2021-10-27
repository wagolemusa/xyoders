import React, { useContext, useState,useEffect } from 'react'
import './write.css'
import index from '../images/index.jpeg'
import { Context } from '../context/Context'
import axios from 'axios'

function Write(){
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState("")
    const [categories, setCategories] = useState("")
    const { user } = useContext(Context)

    const handelSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            desc,
            categories,
        };
        if (file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;

            try{
                await axios.post("/upload", data);
            } catch (err){}
        }try{
            const res  = await axios.post("/posts", newPost);
            window.location.replace("/post/" +  res.data._id);
        } catch (err) {}

    };

    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () =>{
            const res = await axios.get("http://localhost:5000/api/categories")
            setCats(res.data);
        };
        getCats();
    }, []);

    return(
        <section className="writesetion">
        <div className="container" >
            <div className="wite">
            <form  className="writeForm" onSubmit={handelSubmit}>
                { file && (
                    <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
                )}
                

                    <div className="wirteFormGroup">
                        <label htmlFor="fileInput">Upload Images&nbsp;
                            <i className="writeIcon fas fa-plus"></i><br/><br/>
                            
                            <input type="file" id="fileInput" style={{display:"none"}} 
                            onChange={(e) => setFile(e.target.files[0])}/>
                            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} 
                            onChange={(e) => setTitle(e.target.value)}/>
                        </label>
                    </div>
                    <br/>


                    <div class="form-outline mb-4">
                        <label class="form-label" for="form5Example1"></label>
                            <select class="select" onChange={(e) => setCategories(e.target.value)}
                            >
                                 {cats.map((c) =>(
                            <option>{c.name}</option>
                                 ))}
                            </select>
                                 
                           
                        </div>
                    <div className="wirteFormGroup">
                        <textarea 
                            placeholder="Write about Code ....."
                            type="text"
                            className="writeInput writeText"
                            onChange={(e) => setDesc(e.target.value)}>
                        </textarea>
                       
                    </div>
                    <br/> <br/>
                    <button type="submit" class="btn btn--orange">Publish</button>
                   
                </form>
            </div>
            
        </div>
        </section>
    )
}
export default Write;