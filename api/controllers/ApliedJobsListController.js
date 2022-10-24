'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM apliedjobslist'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM apliedjobslist WHERE userID = ?'
        db.query(sql, [req.params.userID], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let userID = req.params.userID;
        let sql = 'UPDATE apliedjobslist SET ? WHERE userID = ?'
        db.query(sql, [data, userID], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO apliedjobslist SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM apliedjobslist WHERE userID = ?'
        db.query(sql, [req.params.userID], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}