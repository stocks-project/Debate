import { VoteComment, VoteLog } from "../controllers/vote/interfaces";
import VoteDao from "../database/vote";

class VoteMethods {
    public static async vote(body: any, ip: string): Promise<VoteLog[]> {
        const { postId, voteType } = body;
        return await VoteDao.vote(postId, voteType, ip);
    }

    public static async getVotePosts(query: any) {
        const { page } = query;
        return await VoteDao.getVotePosts();
    }


    public static async getVotePostDetail(query: any, ip: string) {
        const { id } = query;
        const votePost = await VoteDao.getVotePostDetail(id, ip);
        return {
            votePost,
        };
    }

    public static async createVotePost(body: any, ip: string) {
        const { title, content, comment } = body;
        return await VoteDao.createVotePost(title, content,ip, comment);
    }

    public static async getVoteComment(body: any): Promise<VoteComment[]> {
        const { title } = body;
        return await VoteDao.getVoteComment(title);
    }

    public static async createVoteComment(body: any, ip: string) {
        const { title, content } = body;
        return await VoteDao.createVoteComment(title, content, ip);
    }
}

export default VoteMethods