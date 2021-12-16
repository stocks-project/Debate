import CommonDao from "./index";
import { VoteComment, VoteLog, VotePost, VotePostDetail } from "../controllers/vote/interfaces";
import User from "../controllers/user/interfaces";

class VoteDao extends CommonDao {


    public static async vote(postId: number, voteType: number, ip: string): Promise<VoteLog[]> {
        const user = await super.getUserByIp(ip);

        if (user) { 
            const voteLog = await super.select<VoteLog>(`SELECT * FROM vote_log vl
            JOIN vote_user vu on ip='${ip}'
            WHERE vl.user_id = vu.id AND vl.post_id = ${postId};`);
            if (voteLog.length) {
                return voteLog;
            }
            const query = `INSERT INTO vote_log (post_id, user_id, selected_type) 
            values (${postId},${user.id}, ${voteType})`
            await this.insert(query);
            return [];
        }

        return [];
    }

    public static async getVotePosts(page?: number): Promise<VotePost[]> {
        const pageSize = 10;
        if (page) {

        }
        const query = `SELECT * FROM vote_post ORDER BY createdAt DESC LIMIT ${pageSize} OFFSET ${(page || 0) * pageSize}`        
    
        return await this.select<VotePost>(query);
    }

    public static async getVotePostDetail(id: number, ip: string): Promise<VotePostDetail> {
        const postQuery = `SELECT * FROM vote_post WHERE id=${id}`;
        const voteCountQuery = `SELECT count(*) as count, selected_type FROM vote.vote_log WHERE post_id = ${id} GROUP BY selected_type ORDER BY selected_type ASC;`;
        const commentQuery = `SELECT user_id, content, createdAt FROM vote_comment WHERE post_id = ${id}`;
        const user = await super.getUserByIp(ip);
        const isVoteQuery = `SELECT count(*) as count FROM vote_log WHERE user_id = ${user?.id} AND post_id=${id}`;
        const isVote = (await this.select<{count: number}>(isVoteQuery)).at(0)?.count;
        const comments = await this.select<VoteComment>(commentQuery);
        const posts: VotePost[] = await this.select<VotePost>(postQuery);
        const voteCount = await this.select<{count: number, selected_type: number}>(voteCountQuery);
        const post = posts[0];        

        if (voteCount.length === 2) {
            const total = voteCount[0].count + voteCount[1].count;
            post.negativePercent = voteCount[0].count / total;
            post.positivePercent = voteCount[1].count / total;
            post.voteCount = 1;
        } else {
            if (voteCount.find(x => x.selected_type === 1)) {
                post.positivePercent = 1;
                post.negativePercent = 0;
                post.voteCount = 1;
            } else if (voteCount.find(x => x.selected_type === 0)) {
                post.positivePercent = 0;
                post.negativePercent = 1;
                post.voteCount = 1;
            } else {
                post.positivePercent = 0;
                post.negativePercent = 0;
                post.voteCount = 0;
            }
        }
        return {
            ...post,
            isVote: isVote || 0,
            comments,
        };
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

    public static async getVoteComment(id: number): Promise<VoteComment[]> {
        const selectQuery = `SELECT vc.* FROM vote_comment vc
         JOIN vote_post vp id=${id}`;
        return await this.select<VoteComment>(selectQuery);
    }

    public static async createVoteComment(id: number, content: string, ip: string) {
        const user = await super.getUserByIp(ip);
        
        if(user) {
            const insertQuery = `INSERT INTO vote_comment (post_id, user_id ,content) values (${id}, ${user.id}, ${content})`
            const [result, _] = await this.insert(insertQuery);
            return result;
        }

        return 0;
    }
}

export default VoteDao;