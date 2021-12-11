import { User } from "../user/interfaces";

export interface VotePost {
    title: string;
    content: string;
    positiveCount: number;
    negativeCount: number;
    voteCount:number;
    commentCount: number;
    view: number;
    imgSrc: string;
}

export interface VoteComment {
    user: User;
    content: string;
}

export interface VoteLog {
    seq: number;
    post_id: number;
    user_id: number;
    selected_type: number;
    createdAt: string;
}