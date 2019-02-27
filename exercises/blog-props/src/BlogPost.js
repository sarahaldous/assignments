import React from 'react'

function BlogPost(props){
    return (
        <div>
            <h1>{BlogPost.title}</h1>
            <h3>{BlogPost.subtitle}</h3>
            <p>Posted by {BlogPost.author} on {BlogPost.date}</p>
        </div>
    )
}
export default BlogPost