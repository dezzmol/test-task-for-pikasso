import React from 'react';
import {FixedSizeList as List} from "react-window"
import Row from "./Row";

const PostsList = () => {

    return (
        <List itemSize={200} height={700} itemCount={100} width={500}>
            {Row}
        </List>
    );
};

export default PostsList;