import './Posts.scss';
import {useEffect, useState} from "react";
import Post from "../Post";
import Form from "../Form";
import {useDispatch, useSelector} from "react-redux";
import {selectorAllPosts} from "../../selectors";
import {actionFetchAllPosts, actionFetchAllProducts} from "../../reducers/posts.reducer";

const Posts = () => {

    const dispatch = useDispatch();

    useEffect( () => {

        dispatch(actionFetchAllPosts("https://jsonplaceholder.typicode.com/posts"));

    },[]);


    const posts = useSelector(selectorAllPosts);

    return (
        <main className="container">
            <section className="posts">
                <div className="posts__add-btn"><Form/></div>
                <div className="posts__posts-list">
                    {posts?.map((post, index) => <Post post={post} key={index}/>)}
                </div>
            </section>
        </main>
    )
}

export default Posts;