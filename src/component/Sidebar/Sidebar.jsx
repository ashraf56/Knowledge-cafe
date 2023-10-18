import React from 'react';
import Title from '../Title/Title';

const Sidebar = ({time,post}) => {
  




    let totalTime=0;
  for (const min of time) {
          totalTime=totalTime + min.read_time;
     
  }
    return (
        <div className='sticky-top mt-2'>
            <div className="alert alert-primary text-center" >
  <p>Spent time on read : {totalTime} min</p>
</div>


<div className='alert alert-primary text-center'>
<p>Bookmarked Blogs : {post.length}</p>

{
post.map(pos=> <Title pos={pos.blog_title} ></Title> )

}

</div>

        </div>
    );
};

export default Sidebar;