import React, { useState, Component,useEffect } from "react";
import "./App.css";
import { SRLWrapper } from "simple-react-lightbox";
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import {useParams,useHistory } from 'react-router-dom';
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup';
import Axios from 'axios';
import NewForm from "./NewForm";
import NewForm2 from "./NewForm2";

function ProductD() {
  
    const [count, setCountin] = useState(0);
    
    const [LOP, setLOP] = useState([]);
    const [LOL, setLOL] = useState([]);
    const [Post, setPost] = useState({});
    
   
    const[ListComment,setListComment]=useState([]);
    const[NewComment,setNewComment]=useState("");
    let{id}=useParams();

    const value =localStorage.getItem("form")
    const ch=JSON.parse(value);
    const[changer,setchanger]=useState(ch);
    let history =useHistory();
    const[Form,fs]=useState(true);
   
    useEffect(()=> {
            Axios.get(`http://localhost:3001/posts/byId/${id}`).then((response)=> {
            setPost(response.data)
            setCountin(response.data.Likes.length)
            Axios.put("http://localhost:3001/posts/Rate",{
              PostRate:JSON.stringify(response.data.Likes.length),
            id: id
          })
            })
            
          Axios.get(`http://localhost:3001/Comment/${id}`).then((response)=> {
              setListComment(response.data)
          })
          Axios.get("http://localhost:3001/posts/N",{headers:{accessToken:localStorage.getItem("accessToken")}}).then((response)=> {
          setLOP(response.data.ListPost)
          if(localStorage.getItem("accessToken")){
            setLOL(response.data.LikedPost.map((like)=>{return like.PostId}))}}) 
},[]); 
 
  const addComment = () => {
        Axios.post("http://localhost:3001/comment", {
            Comment: NewComment,
            PostId: id,
          },
          {
            headers:{
              accessToken:localStorage.getItem("accessToken"),
            },
          }
          )
          .then((response) => {
            if(response.data.error) {
              setNewComment("");
            }else {
            const commentToAdd = { Comment:NewComment ,UserName:response.data.UserName};
            setListComment([...ListComment, commentToAdd]);
            setNewComment("");
          }
          });
  };
  
  const like=(id) => {
   
      Axios.post("http://localhost:3001/like",
      {PostId: id},
      {headers:{accessToken:localStorage.getItem("accessToken")}}
        ).then((response) => {
      
         Axios.get(`http://localhost:3001/posts/byId/${id}`).then((response)=> {
      setCountin(response.data.Likes.length)
       Axios.put("http://localhost:3001/posts/Rate",{
        PostRate:JSON.stringify(response.data.Likes.length),
       id: id
     })
      
      });
     
      if(LOL.includes(id)){
        setLOL(LOL.filter((i)=>{
          return i!=id
        }))
      }else{
          setLOL([...LOL,id])   
      }})
};




  
  var Img=Post.PostName;
    return(
      <div>
      <div >
        
         <div className="proImg">
           <img className="imgSize2" src={"/Product/"+Img+".png"} />
            <div className="WPD">
              <div className="StyleBorder">
                <div className="rowp ">
                    <SRLWrapper >
                          <div className="columnp">
                            <img src={"/Product/"+Img+".png"} className="WPD2" ></img>
                          </div>
                          <div className="columnp">
                            <img src={"/Product/"+Img+"2.png"} className="WPD2" ></img>
                          </div>
                          <div className="columnp">
                            <img src={"/Product/"+Img+"3.png"} className="WPD2" ></img>
                          </div>
                          <div className="columnp">
                            <img src={"/Product/"+Img+"4.png"} className="WPD2" ></img>
                          </div>
                      </SRLWrapper>
                </div>
              </div>
            </div>     
         </div>
      <div className="proInfo">
        <p ><h2>{Post.PostName}</h2>
          <ul >  
            <li><a >Property:  </a>{Post.PostDetail}</li>
            <li><a >Price: </a>{Post.PostPrice}$</li>
          </ul>
        </p>
        <div >
        <div className="Control "><button className="ButtonsControl ">Buy</button></div>
           <div className="Control"><button className="ButtonsControl " onClick={() =>fs(false)}>Add Cart</button></div>
        <div className="Control2" style={{width:"fit-content"}}
            >
            {LOL.includes(Post.id) ? <button className="buttonStyle RedHeart" onClick={() =>like(Post.id)}>
                <FaHeart />
                </button> 
            :<button className="buttonStyle "  onClick={() =>like(Post.id)}> 
                <FiHeart />
                </button>} 
           </div>
           
           <a>{count}</a>
           
           </div>
           <div className="Comment_Container">
             <div className="Comment_Result">
               
               {ListComment.map((value, index)=>{
                                return(
                                <p key={index}>
                                    <a  >{value.UserName}:</a>
                                    <p  className="Comment_Style">  {value.Comment}</p>
                                </p>
                                );
                                })}
               
             </div>
             <div className="Comment_Control">
             <input type="text" autoComplete="off" placeholder="Comment here...etc" className="Comment_Text"
              value={NewComment} 
              onChange={(event)=>{
                setNewComment(event.target.value)
              }}/>
                  

                  <button onClick={addComment} className="Comment_Send">Send</button>
                
             </div>
           </div>
      </div>
        </div>{console.log(ch)}
       
        <div className={(Form ? 'CloseForm':'OpenForm')}>
        {changer ?
         <h3 className="Start_Order_title">Start New Order?</h3>
        
                :
        <h3 className="Start_Order_title">Add item to cart?</h3>
        }
         <div className="Start_Order_div">
            <button className="pad close_button"  onClick={() =>fs(true)}>&#10005;</button> 
          {changer ? 
          <div className="AddOrder"><NewForm  /></div>
          :
         <div className="AddOrder"><NewForm2  /></div> }
          </div>
          </div>
          
        
     
    </div>
    )};
export default ProductD;
 