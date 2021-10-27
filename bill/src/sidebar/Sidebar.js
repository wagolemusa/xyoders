import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar(){

    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () =>{
            const res = await axios.get("http://localhost:5000/api/categories")
            setCats(res.data);
        };
        getCats();
    }, []);
    return (
        <div>
            <div class="list-group">
            {cats.map((c) =>(
                <Link to={`/?cat=${c.name}`} className="link">
                    <div className="list-group-item list-group-item-action">{c.name} </div>
                </Link>
               
            ))}
            
            </div>
        </div>
    )
}