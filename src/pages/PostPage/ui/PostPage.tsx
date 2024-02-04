import React from 'react';
import {useParams} from "react-router-dom";
import PostCard from "../../../entities/PostCard/ui/PostCard";

const PostPage = () => {
    const params = useParams()
    const {postId} = params

    return (
        <main>
            {postId &&
                <PostCard postId={Number(postId)} />
            }
        </main>
    );
};

export default PostPage;