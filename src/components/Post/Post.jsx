import './Post.scss';

const Post = ({post}) => {
    const {title, userId, body} = post;
    return(
        <div className="post">
            <div className="post__header">
                <h3 className="post__title">{title}</h3>
                <div className="post__user">User: {userId}</div>
            </div>

            <div className="post__body">{body}</div>
        </div>
    )
}

export default Post;