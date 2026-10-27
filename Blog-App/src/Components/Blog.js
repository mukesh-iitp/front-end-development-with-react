import {useEffect, useReducer, useRef, useState } from "react";
import { db } from "../firebaseinit";
import { collection , doc, setDoc, onSnapshot, deleteDoc} from "firebase/firestore";

function blogReducer(state, action){
    switch(action.type){

        case "GET":
            return action.blogs; // Loads Firestore blogs into state

        // case "ADD":
        //     return [action.blog, ...state];
        
        // case "REMOVE":
        //     return state.filter((blog, index) => index !== action.index);
        
        default:
            //return [];
            return state;
    }
}

//Blogging App using Hooks
// export default function Blog(){
export default function Blog(){

    //const [title, setTitle] = useState("");
    //const [content, setContent] = useState("");
    
    const [formData, setFormData] = useState({title: "", content: ""}); // passing object in useState();

    // const [blogs, setBlogs] = useState([]);
    const [blogs, dispatch] = useReducer(blogReducer, [])

    const titleRef = useRef(null);

    useEffect(() => {
        titleRef.current.focus()
    },[]) //will work as componentDidMount()

        //Get all documents in a collection
    useEffect(() =>{
        // async function fechData() {
        //     const snapShot = await getDocs(collection(db, "blogs"))
        //     console.log(snapShot)
        //     const blogs = snapShot.docs.map((doc) =>{
        //         return{
        //             id: doc.id,
        //             ...doc.data()
        //         }
        //     })
        //     console.log(blogs);
        //     dispatch({ type: "GET", blogs: blogs });
        // }
        // fechData();
        onSnapshot(collection(db,"blogs"),(snapShot) =>{
            const blogs = snapShot.docs.map((doc) =>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
            })
            console.log(blogs);
            dispatch({ type: "GET", blogs: blogs });
        });

    },[]);

    useEffect(() =>{
        if(blogs.length && blogs[0].title){
            document.title = blogs[0].title;
        }
        else
            document.title = "No Blogs!!"
    },[blogs]) //dependency added to make sure if blogs will change then this effect will take place


    //Passing the synthetic event as argument to stop refreshing the page on submit
    async function handleSubmit(e){
        e.preventDefault();

        // setBlogs([{title: formData.title,content:formData.content}, ...blogs]); // "..." rest operator used to gather multiple individual elements and consolidate them into a single collection (an array or an object) 
        // dispatch({type:"ADD", blog:{title: formData.title,content:formData.content}});
        //setTitle(""); //for clearing title box after submit
        //setContent(""); //for clearing content box after submit
        titleRef.current.focus();

        // Add a new document with a generated id.
        const docRef = doc(collection(db, "blogs"))

        // const res = await addDoc(collection(db, "blogs"), {
        // await addDoc(collection(db, "blogs"), {
        // await addDoc(docRef, {
        await setDoc(docRef, {
            title: formData.title,
            content: formData.content,
            createdOn: new Date()
        });
        // console.log('Added document with ID: ', res.id);
        console.log('Added document with ID: ', docRef.id);

        setFormData({title:"",content:""})
        console.log(blogs);
    }

    async function removeBlog(id){
        // setBlogs(blogs.filter((blog,index) => i!==index));
        // dispatch({type: "REMOVE", id : id});
        const docRef = doc(db, "blogs", id);
        await deleteDoc (docRef);
        
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
                                required
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
                    <button onClick={() => removeBlog(blog.id)} className="btn remove">
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
