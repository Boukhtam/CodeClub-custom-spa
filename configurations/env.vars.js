require('dotenv').config();


module.exports = {
    app : process.env.APP || 'dev',
    port : process.env.PORT || '1337',
    db_dialect : process.env.DB_DIALECT || 'mongodb',
    db_host : process.env.DB_HOST || 'localhost',
    db_port : process.env.DB_PORT || '27017',
    db_name : process.env.DB_NAME || 'CodeClub',
    db_user : process.env.DB_USER || 'root',
    db_password : process.env.DB_PASSWORD || 'password',
    jwt_encryption : process.env.JWT_ENCRYPTION || 'BLALBLA',
    jwt_expiration : process.env.JWT_EXPIRATION || 1000*60*60*24*7,
    session_encryption : 'secret',
    session_expiration: 1000 * 60, // one min
    cookie_encryption: 'secret',
    cookie_name: 'session_id'
};