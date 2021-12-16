import { User } from "../user/interfaces";

export interface VotePost {
    title: string;
    content: string;
    positivePercent: number;
    negativePercent: number;
    voteCount:number;
    commentCount: number;
    view: number;
    imgSrc: string;
}

export interface VotePostDetail extends VotePost {
    comments: VoteComment[];
}

export interface VoteComment {
    postId: number;
    user: User;
    content: string;
    createdAt: string;
}

export interface VoteLog {
    seq: number;
    post_id: number;
    user_id: number;
    selected_type: number;
    createdAt: string;
}