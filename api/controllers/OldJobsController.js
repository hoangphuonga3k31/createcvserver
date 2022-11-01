'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM oldjobs'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM oldjobs WHERE cvid = ?'
        db.query(sql, [req.params.cvid], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    update: (req, res) => {
        let data = req.body;
        let id = req.params.id;
        let sql = 'UPDATE oldjobs SET ? WHERE cvid = ?'
        db.query(sql, [data, cvid], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO oldjobs SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM oldjobs WHERE id = ?'
        db.query(sql, [req.params.cvid], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}