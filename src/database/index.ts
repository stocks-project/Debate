import { QueryTypes, Sequelize } from "sequelize";

class CommonDao {
    protected static sequelize: Sequelize;
    public static async init() {
        this.sequelize = new Sequelize({
            dialect: 'mysql',
            host: process.env.DB_HOST,
            username: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: process.env.DB_PASS,
        });
    }

    public static async select<T extends Object>(query: string): Promise<T[]> {
        const [result, _] = await this.sequelize.query<T[]>(query, {type: QueryTypes.SELECT});
        return result;
    }
    public static async insert(query: string): Promise<any> {
        const [result, _] = await this.sequelize.query(query, {type: QueryTypes.INSERT});
        return result;
    }
}

export default CommonDao;