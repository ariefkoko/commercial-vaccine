const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(3)

function hasPassword(password){
    return bcrypt.hashSync(password,salt)
}

// const key = hasPassword('uhuuy')  ====> // masuk ke database

// console.log(bcrypt.compareSync('uh1uuy',key))

function correctPassword(password,resultHas){           // cek 
    return bcrypt.compareSync(password,resultHas)
}

// console.log(key)
// console.log(correctPassword("uhuy",key))

module.exports = {
    hasPassword,correctPassword
}