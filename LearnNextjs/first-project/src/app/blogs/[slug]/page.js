import React from 'react'

const page = ({ params }) => {
    console.log("params", params.id);
    const paramId = params.slug
    console.log("params id");
    return (
        <div>
            <h1>this is dynamic page {paramId} </h1>
        </div>
    )
}

export default page
