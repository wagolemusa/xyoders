import React, { useContext, useState,useEffect } from 'react'
import './write.css'
import { Context } from '../context/Context'
import axios from 'axios'

function Write(){
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState("")
    const [categories, setCategories] = useState("")
    const { user } = useContext(Context)

    const handelUpload = async (e) =>{
        try{
            const image = e.target.files[0]
            const formData = (new FormData());
            formData.append("photo", image);
            const {data} = await axios.post("/posts/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*"
                }
            })
            setFile(data)
            
        }catch(error){
            console.log(error)
        }
    }
    
    const handelSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            desc,
            photo:file,
            categories,
        };

     
        try{
            const res = await axios.post("/posts", newPost);
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
        <div className="container-fluid">
            <div class="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
            <div className="wite">
 
                
            <form  encType="multipart/form-data" className="writeForm" onSubmit={handelSubmit}>
            { file && (
                    <img className="writeImg" src={file} alt="" />
                )}

                    <div className="wirteFormGroup">
                        <label htmlFor="fileInput">Upload Images&nbsp;
                            <i className="writeIcon fas fa-plus"></i><br/><br/>
                            
                            <input type="file" id="fileInput" style={{display:"none"}}  name="image"
                             onChange={handelUpload}/>

                            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} 
                            onChange={(e) => setTitle(e.target.value)}/>
                        </label>
                    </div>
                    <br/>


                    <div class="form-outline">
                        <label class="form-label" for="form5Example1"></label>
                            <select class="select"  onChange={(e) => setCategories(e.target.value)}
                            >
                                 {cats.map((c) =>(
                            <option>{c.name}</option>
                                 ))}
                            </select>
                                 
                           
                        </div>
                    <div className="wirteFormGroup">
                        <textarea  value={desc}
                            placeholder="Write about Code ....."
                            type="text"
                            className="writeInput writeText" 
                            //  onChange={(e) => setMarkd/own(e.target.value)}
                            // onChange={inputdata}
                             onChange={(e) => setDesc(e.target.value)}
                            // onChange={inputdata}
                             >
                        </textarea>
                       
                    </div>
                    <br/> <br/>
                    <button type="submit" class="btn btn--orange">Publish</button>
                   
                </form>
            </div>
            </div>
            <div className="col-md-2">
          
                {/* <ReactMarkdown children={desc} remarkPlugins={[remarkGfm]} />, */}
            </div>
        </div>
            
        </div>
        </section>
    )
}
export default Write;