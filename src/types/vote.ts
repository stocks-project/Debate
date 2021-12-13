export type Detail = {
    id: number;
    title: string;
    content: string;
    negativePercent: number;
    positivePercent: number;
    view: number;
    imgSrc: string;
    voteCount: number;
};

export type Post = {
    id: number;
    title: string;
    content: string;
    positiveCount: number;
    negativeCount: number;
    view: number;
    imgSrc: string;
};
