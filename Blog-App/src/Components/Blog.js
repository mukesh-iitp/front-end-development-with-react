import {useEffect, useRef, useState } from "react";

//Blogging App using Hooks
export default function Blog(){

    //const [title, setTitle] = useState("");
    //const [content, setContent] = useState("");
    
    const [formData, setFormData] = useState({title: "", content: ""}); // passing object in useState();

    const [blogs, setBlogs] = useState([]);

    const titleRef = useRef(null);

    useEffect(() => {
        titleRef.current.focus()
    },[]) //will work as componentDidMount()

    useEffect(() =>{
        if(blogs.length && blogs[0].title){
            document.title = blogs[0].title;
        }
        else
            document.title = "No Blogs!!"
    },[blogs]) //dependency added to make sure if blogs will change then this effect will take place
    
    //Passing the synthetic event as argument to stop refreshing the page on submit
    function handleSubmit(e){
        e.preventDefault();

        setBlogs([{title: formData.title,content:formData.content}, ...blogs]); // "..." rest operator used to gather multiple individual elements and consolidate them into a single collection (an array or an object) 
        //setTitle(""); //for clearing title box after submit
        //setContent(""); //for clearing content box after submit
        titleRef.current.focus();
        setFormData({title:"",content:""})
        console.log(blogs);
    }

    function removeBlog(i){
        setBlogs(blogs.filter((blog,index) => i!==index));
    }

    return(
        <>
        {/* Heading of the page */}
        <h1>Write a Blog!</h1>

        {/* Division created to provide styling of section to the form */}
        <div className="section">

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>

                {/* Row component to create a row for first input field */}
                <Row label="Title">
                        <input className="input"
                                placeholder="Enter the Title of the Blog here.."
                                ref={titleRef}
                                // value={title}
                                value={formData.title}
                                // onChange={(e) => setTitle(e.target.value)}
                                onChange={(e) => setFormData({title: e.target.value, content: formData.content})}
                        />
                </Row >

                {/* Row component to create a row for Text area field */}
                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.."
                                // value={content}
                                value={formData.content}
                                //onChange={(e) => setContent(e.target.value)}
                                onChange={(e) => setFormData({title: formData.title, content: e.target.value})}
                        />
                </Row >

                {/* Button to submit the blog */}            
                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
        {/* <h3>{title}</h3>
        <p>{content}</p> */}
        {blogs.map((blog,i) => (
            <div className="blog" key={i}>
                <h3>{blog.title}</h3>
                <hr/>
                <p>{blog.content}</p>

                <div className="blog-btn">
                    {/* <button onClick={removeBlog} className="btn remove"> */}
                    <button onClick={() => removeBlog(i)} className="btn remove">
                        Delete
                    </button>
                </div>
            </div>
            ) //() with this (parentheses give an implicit return)  
        )}
        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
