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
}

export default VoteMethods