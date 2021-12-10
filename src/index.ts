import app from './app';
import CommonDao from './database';
import dotenv from 'dotenv';

const PORT = 7006;

const initialize = async () => {
    dotenv.config();
    await CommonDao.init();
}

const startApp = () => {
    app.listen(PORT,() => {
        console.log(`SERVER OPENED ON PORT ${PORT}`);
    })
}

initialize().then(() => {
    startApp();
});