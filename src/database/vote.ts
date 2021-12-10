import CommonDao from "./index";
import { VotePost } from "../controllers/vote/interfaces";

class VoteDao extends CommonDao {
    public static async vote(postId:string, voteType: number, ip: string): Promise<boolean> {
        const userId = await super.select<{id: number}>(`SELECT id FRON vote_user WHERE ip=${ip}`);

        if (userId) { 
            const query = `INSERT INTO vote_log (post_id, user_id, selected_type) 
            values ('${postId}',${userId}, ${voteType})`
            await this.insert(query);
            return true;
        }

        return false;
    }

    public static async getVotePosts(page?: number): Promise<VotePost[]> {
        const pageSize = 10;
        if (page) {

        }
        const query = `SELECT count(*) FROM vote_post LIMIT ${pageSize} OFFSET ${(page || 0) * pageSize} ORDER BY createdAt DESC`

        return await this.select<VotePost>(query);
    }
}

export default VoteDao;