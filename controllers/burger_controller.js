const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll(function(data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(["name", "devoured"], [req.body.name, req.body.devoured], (res) => {
        res.json({ id: res.insertId })
    })
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;

    console.log("condition is ", condition);

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        (res) => {
            if(res.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    )
});

module.exports = router;