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
        linksController.getAllLinks(req, res);   
    });

    router.delete('/api/v1/link/delete/:id', (req,res) =>{
        linksController.deleteLinkById(req,res);
    });

    router.put('/api/v1/link/update/:id', (req,res) =>{
        linksController.updateLinkById(req,res);
    });

    router.get('/api/v1/link/:id', (req,res) =>{
        linksController.getLinkById(req,res);
    });

    router.post('/api/v1/addlink', (req,res) =>{
        linksController.addLink(req,res);
    });

    return router;

};