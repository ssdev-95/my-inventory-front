const products = require('../product')
const express = require('express')

export const connextion = async (req, res) => {
    res.send(req.body)
}
