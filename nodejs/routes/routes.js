const express = require('express');
const sem = require('semaphore')(1);
const router = express.Router();

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: '192.168.1.111',
    database: 'postgres',
    password: 'password',
    port: 5432,
})


router.get('/products', function (req, res, next) {
    console.log(req.session.id)
    pool.query('SELECT * FROM aia_products', (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows)
    })
})

router.get('/session', function (req, res, next) {
    res.json({"session_id": req.session.id})
})

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

purchases = {}

const query = 'SELECT COUNT(*) FROM aia_products WHERE id = ANY($1)'
const query_delet = 'DELETE FROM aia_products WHERE id = ANY($1)'

router.post('/buy', function (req, res, next) {
    console.log(req.session.id)
    purchases[req.session.id] = 'PENDING'
    sem.take(() => {

        pool.query(query, [req.body.products], (error, results) => {
            if (error) {
                throw error
            }
            if (parseInt(results.rows[0].count) !== req.body.products.length) {
                sem.leave()
                purchases[req.session.id] = 'FAIL'
                res.redirect('/purchase/status')
            }
            else {
                pool.query(query_delet, [req.body.products], () => {sem.leave()})
                purchases[req.session.id] = 'SUCCESS'
                res.redirect('/purchase/status')
            }

        })

    })
})

router.get('/purchase/status', function (req, res, next) {
    console.log(req.session.id)
    const status = purchases[req.session.id]
    res.json({"status": (status) ? status : 'FAIL'})
    if (status !== 'PENDING') req.session.destroy()
})

module.exports = router;
