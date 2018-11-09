const express = require('express');
const app = express();
const uuidv1 = require('uuid/v1');
const LinkModel = require('./models').link;

//Import LinksControllers
const LinksController = require("./controllers/links-controller");

module.exports = (express) => {
    const router = express.Router();

    router.get('/api/v1/links', (req,res) =>{
        LinksController.getAllLinks(req, res);   
    });

    router.delete('/api/v1/link/delete/:id', (req,res) =>{
        LinksController.deleteLinkById(req,res);
    });

    router.put('/api/v1/link/update/:id', (req,res) =>{
        LinksController.updateLinkById(req,res);
    });

    router.get('/api/v1/link/:id', (req,res) =>{
        LinksController.getLinkById(req,res);
    });

    router.post('/api/v1/addlink', (req,res) =>{
        LinksController.addLink(req,res);
    });

    return router;

};