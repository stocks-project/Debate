import CommonDao from "./index";
import { VoteLog, VotePost } from "../controllers/vote/interfaces";
import User from "../controllers/user/interfaces";

class VoteDao extends CommonDao {
    public static async vote(postId: number, voteType: number, ip: string): Promise<boolean> {
        const userId = await super.select<{id: number}>(`SELECT id FROM vote_user WHERE ip='${ip}'`);

        if (userId.length) { 
            const voteLog = await super.select<VoteLog>(`SELECT * FROM vote_log vl
            JOIN vote_user vu on ip='${ip}'
            WHERE vl.user_id = vu.id AND vl.post_id = ${postId};`);
            if (voteLog.length) {
                return false;
            }
            const query = `INSERT INTO vote_log (post_id, user_id, selected_type) 
            values (${postId},${userId[0].id}, ${voteType})`
            await this.insert(query);
            return true;
        }

        return false;
    }

    public static async getVotePosts(page?: number): Promise<VotePost[]> {
        const pageSize = 10;
        if (page) {

        }
        const query = `SELECT * FROM vote_post ORDER BY createdAt DESC LIMIT ${pageSize} OFFSET ${(page || 0) * pageSize}`        
    
        return await this.select<VotePost>(query);
    }

    public static async createVotePost(title: string, content: string, ip: string, comment: number): Promise<VotePost[]> {
        const userIdQuery = `SELECT * FROM vote_user WHERE ip='${ip}'`;
        const user = await this.select<User>(userIdQuery);
        if(user.length) {
            const insertQuery = `INSERT INTO vote_post (title,content,writer_id, comment) values ('${title}','${content}',${user[0].id}, ${comment})`;        
            return await this.insert(insertQuery);   
        }
        throw new Error('Check User IP');
    }
}

export default VoteDao;