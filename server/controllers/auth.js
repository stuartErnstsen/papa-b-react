const bcrypt = require('bcryptjs')

module.exports = {
    login: async (req, res) => {
        const { emailInput, passwordInput } = req.body
        const db = req.app.get('db')
        try {
            const [foundUser] = await db.auth.check_user(emailInput)
            if (!foundUser) {
                return res.status(409).send('User with that email does not exist!')
            }
            const passwordIsAuthenticated = bcrypt.compareSync(passwordInput, foundUser.hashword)
            if (passwordIsAuthenticated) {
                delete foundUser.hashword
                req.session.user = foundUser
                return res.status(200).send(foundUser)
            } else {
                return res.status(409).send('User password or email is incorrect!')
            }
        } catch (err) {
            console.log(err)
            return res.status(500).send(err)
        }

    },
    register: async (req, res) => {
        const { email, password, first, last } = req.body
        const db = req.app.get('db')
        try {
            const [foundUser] = await db.auth.check_user(email)
            if (foundUser) {
                return res.status(409).send('Email is already in use!')
            }
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)
            const [newUser] = await db.auth.register(email, first, last, hash)
            delete newUser.hashword
            req.session.user = newUser
            return res.status(200).send(newUser)
        } catch (err) {
            console.log(err)
            return res.status(500).send(err)
        }
    },
    logout: async (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    userOnSession: async (req, res) => {
        console.log('hit')
        const { user } = req.session
        if (user) {
            return res.status(200).send(user)
        }
        else {
            return res.status(404).send('not found')
        }
    },
}