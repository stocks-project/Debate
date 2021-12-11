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
            schema: process.env.DB_NAME,
        });
    }

    public static async select<T extends Object>(query: string): Promise<T[]> {
        return await this.sequelize.query<T>(query, {type: QueryTypes.SELECT});
    }
    public static async insert(query: string): Promise<any> {
        return await this.sequelize.query(query, {type: QueryTypes.INSERT});
    }
    public static async update(query: string): Promise<any> {
        return await this.sequelize.query(query, {type: QueryTypes.UPDATE});
    }
}

export default CommonDao;