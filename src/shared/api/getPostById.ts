import {baseApi} from "./baseApi";
import {PostModel} from "../consts/postModel";

export const getPostById = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPost: build.query<PostModel, number>({
            query: (postId) => ({
                method: "GET",
                url: "/posts/" + postId
            })
        })
    })
})