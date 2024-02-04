import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {getPostById} from "shared/api/getPostById";
import {Button} from "shared/ui/button";

interface Props {
    postId: number
}

const PostCard: FC<Props> = ({postId}) => {
    const {data} = getPostById.useGetPostQuery(postId)

    return (
        <article>
            <h2>{data?.title}</h2>
            <p>{data?.body}</p>
            <Link to="/">
                <Button
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    Назад
                </Button>
            </Link>
        </article>
    );
};

export default PostCard;