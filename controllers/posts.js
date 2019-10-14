let router = require("express").Router();
let db = require("../models/");
require("dotenv").config();
let jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
    console.log(req.body)
    db.post.create({
        title: req.body.title,
        content: req.body.content,
        author: req.user.id
    })
    .then(post => {
        res.status(201).send(post)
    })
})

router.get("/", (req, res) => {
    db.post.findAll({ where: { author: req.user.id } }).then(posts => {
        res.status(201).send(posts)
    })
    .catch(error => {
        console.log("Error getting posts", error)
        res.status(503).send({
            message:
                "Seems like we are not able to get all of your posts"
        })
    })
})

// A route that gets ALL of the posts by ALL of the users
router.get("/allposts", (req, res) => {
    db.post.findAll().then(posts => {
        res.status(201).send(posts)
    })
    .catch(error => {
        console.log("Error getting ALL of the posts", error)
        res.status(503).send({
            message: "Seems like we are not able to get all of the posts at the moment."
        })
    })
})

router.put("/:id", (req, res, next) => {
    console.log(req.body)
    db.post.update(
        {title: req.body.title,
        content: req.body.content},
        {where: {id: req.params.id}}
    ).then(editedPost => {
        res.status(201).send(editedPost)
    })
    .catch(error => {
        console.log("Error trying to update post", error)
        res.status(503).send({
            message:
                "There was a problem trying to update your post"
        })
    })
})

router.delete("/:id", (req, res) => {
    db.post.destroy({
        where: {id: req.params.id}
    })
    .then(deletedPost => {
        console.log(deletedPost)
    })
    .catch(error => {
        console.log("There was an error deleting your post", error)
        res.status(503).send({
            message:
                "There was a problem trying to delete your post"
        })
    })
})

module.exports = router;