import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'



const Content = (props) => {
   
    let{author_name,blog_title,images,read_time,publish_date}=props.post;
    let ReadTime=props.ReadTime
    let Bookmark=props.Bookmarks
    return (
        <div>
            <div className="card my-3 m-auto" >
  <img src={images.blog_cover_image} alt="" className='img-fluid' />
  <div className="card-body">
<div className='d-flex justify-content-between  my-3 align-items-center row  '>
<div className='d-flex col-sm-8 '>
    <div className="row align-items-center g-0 ">
<div className="col-sm-3  ">
    <img src={images.author_image} className='img-thumbnail rounded-circle 5 ' style={{width:50,}}/>
</div>
<div className='px-2 col-sm-9  lh-1'>
<h6 className='fw-bold'>{author_name}</h6>
<span style={{fontSize:14,}}>{publish_date} </span>
</div>
    </div>
 

</div>
<div className='col-sm-4 text-center py-3'>
<p>{read_time} min read  <span className='fs-6' onClick={()=> Bookmark(props.post)} ><FontAwesomeIcon icon={faBookmark} /> </span> </p>
</div>

</div>


    <h5 className="card-title py-2">{blog_title}</h5>
    <a  onClick={()=> ReadTime(props.post)}  className="btn btn-sm btn-warning fw-semibold mb-3">Mark as read</a>
  </div>
</div>
        </div>
    );
};

export default Content;