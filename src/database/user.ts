import CommonDao from "./index";
import { VoteLog, VotePost } from "../controllers/vote/interfaces";
import User from "../controllers/user/interfaces";

class UserDao extends CommonDao {
    public static async setName(name: number, ip: string): Promise<boolean> {
        const userQuery = `SELECT * FROM vote_user WHERE ip = '${ip}'`;
        const users = await super.select<User>(userQuery);
        let result = false;

        if (users.length) {
            const query = `UPDATE vote_user SET name = '${name}' WHERE ip = '${ip}'`;
            result = await super.update(query);
        } else {
            const query = `INSERT INTO vote_user (name, ip) values ('${name}','${ip}')`;
            result = await super.insert(query);
            
        }
        console.log(result);
        
        return result;
    }    
}

export default UserDao;