import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import post from '../../components/Post/Post';

class Blog extends Component {
    state = {
        posts:[]
    }
    componentDidMount(){
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    //console.log(response);
    const post = response.data.slice(0,4);
    const updatedpost = post.map(post=>{
        return {
            ...post,
            author : 'max'
        }
    });
    this.setState({ posts : updatedpost });
    }  
    );
    }
    postSelectHandler 
    render () {
        const posts =  this.state.posts.map(post=>{
            return <Post key= {post.id} title={post.title} author={post.author} clicked ={post.author} />
        });
        return (
              <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;