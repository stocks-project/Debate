import VoteDao from "../database/vote";

class VoteMethods {
    public static async vote(body: any, ip: string) {
        const { postId, voteType } = body;
        return await VoteDao.vote(postId, voteType, ip);
    }

    public static async getVotePosts(query: any) {
        const { page } = query;
        return await VoteDao.getVotePosts();
    }


    public static async getVotePostDetail(query: any) {
        const { id } = query;
        const votePost = await VoteDao.getVotePostDetail(id);
        return {
            votePost,
        };
    }

    public static async createVotePost(body: any, ip: string) {
        const { title, content, comment } = body;
        return await VoteDao.createVotePost(title, content,ip, comment);
    }
}

export default VoteMethods