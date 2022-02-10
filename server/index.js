const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000 ;
const sequelize = require('sequelize')
// const {connect} = require('testConnection')
const bcrypt = require('bcrypt')

//Middleware
app.use(express.json());
app.use(cors());

//Put endpoints here
app.post('/register', async (req, res) => {
  const {firstName, lastName, email_address, password} = req.body
  const checkUser = await sequelize.query(`
  SELECT * FROM users WHERE email_address = '${email_address}'
  `)
  // console.log(checkUser[1].rowCount)
  if(checkUser[1].rowCount !== 0) {
    res.status(500).send('Email Address already Exists')
  } else {
    const salt = bcrypt.genSaltSync(10)
    const passwordHash = bcrypt.hashSync(password, salt)
    await sequelize.query(`
    INSERT INTO users(firstName, lastName, email_address, password)
    VALUES (
      '${firstName}',
      '${lastName}',
      '${email_address}'
      '${passwordHash}'
    )
    `)
    const userInfo = await sequelize.query(`
      SELECT id, firstName, lastName, email_address FROM users WHERE email_address = '${email_address}'
    `)
    res.status(200).send(userInfo)
  }
})

app.post('/login', async (req, res) => {
  const {email_address, password} = req.body
  const validUser = await sequelize.query(`
    SELECT * FROM users WHERE 
    email_address = '${email_address}'
    password = '${password}'     
  `).catch((err) => console.log(err))
  console.log(validUser)
  if(validUser[1].rowCount === 1) {
    if (bcrypt.compareSync(password, validUser[0][0].password)) {
      let object = {
        id: validUser[0][0].id,
        email_address: validUser[0][0].email_address,
        password
      }
      res.status(200).send(object)
    } else {
      res.status(401).send('Password is Incorrect')
    }
  } else {
    res.status(401).send('Username is Incorrect')
  }
})

// connect()

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));