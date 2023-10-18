import React from 'react';

const Title = ({pos}) => {
    return (
        <div className='m-2'>

<div className="card text-bg-light mb-3 border-success rounded-3">

  <div className="card-body">
    <p>{pos}</p>
    
  </div>
</div>
          
        </div>
    );
};

export default Title;