import React, { useEffect, useState } from 'react';
import Content from '../Content/Content';
import Sidebar from '../Sidebar/Sidebar';
import { notify } from '../Toast/Toast';


const Main = () => {
let[post,setPost]=useState([]);

useEffect(()=>{
fetch('data.json').then(res=> res.json()).then(data=> setPost(data.posts))


},[])
let [time,SetTime]=useState([]);



let ReadTime=(post)=>{


SetTime([...time,post])

}

 let [bookmark,setBookmark]=useState([]);

let Bookmarks=(p)=>{
let toast=bookmark.find(i => i=== p)

if (toast) {
    notify();
    setBookmark([...bookmark,p])

}else{

    setBookmark([...bookmark,p])
}



}

    return (
        <div>
           <div className="row m-5">
            <div className="col-md-7">
             {
                post.map(allpost => <Content post={allpost} key={allpost.id} 
                    ReadTime={ReadTime}
                    Bookmarks={Bookmarks}
                    ></Content>)
             }
            </div>
            <div className="col-md-5">
               {
               <Sidebar
               time={time}
               post={bookmark}
               ></Sidebar>
               
               }
            </div>
           </div>
        </div>
    );
};

export default Main;