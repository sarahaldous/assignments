import React from 'react'
import BlogPost from './BlogPost'

function BlogList(props){
    const mappedBlogPost = props.BlogPost.map(blogPost, i) => 
        <BlogPost key={i}
            title={blogPost.title}
            subtitle={blogPost.subtitle}
            author={blogPost.author}
            date={blogPost.date}
}

export default BlogList