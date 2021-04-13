const express = require("express");
const router = express.Router();

router.route('/')
    .get(nameReply)
    .post(nameReply)

router.get('/about', (req, res) => {
    res.send('The /routes/name endpoint sends back the first and last name you send in your request.')
});

function nameReply(req, res) {
    const method = req.method;
    const firstName = method === "GET" ? req.query.first : req.body.first;
    const lastName = method === "GET" ? req.query.last : req.body.last;

    res.format({

        'text/plain': () => {
            res.send(`name: ${firstName} ${lastName}`)
        },

        'text/html': () => {
            let html = '<ul>';
            html += `<li>name: ${firstName} ${lastName}</li>`;
            html += '</ul>';
            res.send(html);
        },

        'application/json': () => {
            res.json({ 'name': `${firstName} ${lastName}` });
        },

        'default': () => {
            res.status(406).send('Not Acceptable')
        }
    });
}

module.exports = router;