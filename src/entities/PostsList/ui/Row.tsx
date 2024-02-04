import React from 'react';
import {getPostById} from "shared/api/getPostById";
import {Button} from "shared/ui/button";
import {Link} from "react-router-dom";

const Row = ({ index, style }: { index: number, style: React.CSSProperties }) => {
    const {data: post} = getPostById.useGetPostQuery(index + 1)

    return (
        <article style={style}>
            <header>
                <h1>{post?.id}. {post?.title}</h1>
            </header>
            <p>{post?.body?.slice(0, 100)}...</p>
                <Link to={"/post/" + post?.id}>
                    <Button
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        Просмотр
                    </Button>
                </Link>
        </article>
    );
};

export default Row;