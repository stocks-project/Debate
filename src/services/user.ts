import UserDao from "../database/user";

class UserMethods {
    public static async setName(body: any, ip: string) {
        const { name } = body;
        return await UserDao.setName(name, ip);
    }
}

export default UserMethods