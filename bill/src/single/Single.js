import React from 'react'
import './single.css'
import post from '../images/post.jpeg'

function Single(){
    return(
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="singlePost">
                            <div className="singlePostWrapper">
                                <img src={post} class="singlePostImg" alt="" />
                                <h1 className="singlePostTile">
                                    Advanced SQL in PostgreSQL
                                    <div className="singlePostEdit">
                                        <i className="singlePostIcon far fa-trash-alt"></i>
                                        <i className="singlePostIcon fas fa-dumpster-fire"></i>
                                    </div>
                                </h1>
                                <div className="singlePostInfo">
                                    <span className="singlePostAuthor">Author: <b>Wagole musa</b></span>
                                    <span className="singlePostDate">I hour ago</span>
                                </div>
                                <p className="singlePostDesc">
                                I have a table is postgres database and the table has a column name castimage with the data type bytea.
                                 I inserted image into the column with a query (it shows [binary data]).
                                When i tried to show the image in my HTML page it doesn't show.
                                Is there a way to display image in my page? OR should I change the field data type which I used to store Image?
                                I have a table is postgres database and the table has a column name castimage with the data type bytea.
                                 I inserted image into the column with a query (it shows [binary data]).
                                When i tried to show the image in my HTML page it doesn't show.
                                Is there a way to display image in my page? OR should I change the field data type which I used to store Image?
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="col-md-4">
                        <h1>This is Side bar</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Single 