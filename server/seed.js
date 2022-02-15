require('dotenv').config()

const CONNECTION_STRING = process.env.CONNECTION_STRING

const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
    }
})

module.exports = {


seed: (req, res) => {
    sequelize.query(`
        drop table if exists users;
        drop table if exists emailSub;
        create table users (
            user_id SERIAL PRIMARY KEY, 
            firstName VARCHAR(50),
            lastName varchar(50),
            email_address VARCHAR(100),
            password VARCHAR(100)
        );

        insert into users 
        (firstName, lastName, email_address, password)
        VALUES ('Alaina', 'Smith', 'as@gmail.com', 'Hello123');

        create table emailSub(
            emailSub_id SERIAL PRIMARY KEY,
            firstName VARCHAR(50),
            lastName VARCHAR(50),
            email_address VARCHAR(100)
        );

        create table teachers(
            teachers_id SERIAL PRIMARY KEY,
            name VARCHAR(100)
        );

        create table favorites(
            favorites_id SERIAL PRIMARY KEY,
            teachers_id INTEGER NOT NULL REFERENCES teachers(teachers_id)
        )

    `).then(() => {
        console.log('Successfully Registered, please login to continue!')
        res.sendStatus(200)
    }).catch(err => console.log('error seeding DB', err))
}

}