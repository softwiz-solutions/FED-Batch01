import React from 'react'
// const {title,description}=props
const Card = ({title="hello",description="demo"}) => {
  
    return (
        <div className='w-1/2 h-32 bg-yellow-100 shadow-lg rounded-sm border-2 border-black p-4'>
            <h1>
                {title}
            </h1>
            <p>{description}</p>
        </div>
    )
}

export default Card
