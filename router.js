const express = require('express');
const app = express();
const uuidv1 = require('uuid/v1');
const LinkModel = require('./models').link;

//Import LinksControllers
const LinksController = require("./controllers/links-controller");

//Create a LinksController
const linksController = new LinksController();

module.exports = (express) => {
    const router = express.Router();

    router.get('/api/v1/links', (req,res) =>{
        // LinkModel.findAll()
        //     .then(links => res.json(links))
        //     .catch(err => res.json(err));

        linksController.getAllLinks(req, res);   
    });

    router.delete('/api/v1/link/delete/:id', (req,res) =>{
        // LinkModel.destroy({
        //     where: {
        //         id: req.params.id
        //     }
        // }).then((result) => {
        //     console.log(result);
        //     LinkModel.findAll()
        //         .then(links => res.json(links))
        //         .catch(err => res.json(err));
        // }).catch(err => res.json(err));
        linksController.deleteLinkById(req,res);
    });

    router.put('/api/v1/link/update/:id', (req,res) =>{
        // LinkModel.findOne({
        //     where: {
        //         id: req.params.id
        //     }
        // }).then((result) => {
        //     result.url = req.body.url;
        //     result.title = req.body.title;
        //     result.isShared = req.body.isShared;
        //     result.tags = req.body.tags;
        //     result.save().then(() => {
        //         LinkModel.findAll()
        //             .then(links => res.json(links))
        //             .catch(err => res.json(err));
        //     }).catch(err => res.json(err));
        // }).catch(err => res.json(err));

        linksController.updateLinkById(req,res);
    });

    router.get('/api/v1/link/:id', (req,res) =>{
        // LinkModel.findOne({
        //     where: {
        //         id: req.params.id
        //     }
        // }).then(result => res.json(result))
        // .catch(err => res.json(err));

        linksController.getLinkById(req,res);
    });

    router.post('/api/v1/addlink', (req,res) =>{
        // let link = new LinkModel();
        // link.url = req.body.url;
        // link.title = req.body.title;
        // link.isShared = req.body.isShared;
        // link.tags = req.body.tags;
        // link.save()
        // .then((result) => {
        //     console.log(result);
        //     LinkModel.findAll()
        //         .then(links => res.json(links))
        //         .catch(err => res.json(err));
        // })
        // .catch(err => console.log(err));

        linksController.addLink(req,res);
    });

    return router;

};