const express = require('express');
const router = express.Router();
const path = require('path');

const accountJson = require(path.resolve(__dirname, '../account/account.json'));
const detailsJson = require('../account/details');

router.post('/api/v1/user/details/info', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: detailsJson });
});

router.post('/api/v1/app/login', (req, res) => {
    const { uid, password } = req.body;

    if (!uid || !password) {
        return res.status(400).json({ message: 'UID and password are required.' });
    }

        const user = accountJson[uid];

        if (!user) {
            return res.status(200).json({
                code: 102,
                message: 'Account does not exist.',
                data: null
            });
        }

        if (user.password !== password) {
            return res.status(200).json({
                code: 108,
                message: 'Wrong password.',
                data: null
            });
        }

        res.status(200).json({
            code: 1,
            message: 'SUCCESS',
            data: {
                userId: uid,
                accessToken: 'offline'
            }
        });
});

module.exports = router;