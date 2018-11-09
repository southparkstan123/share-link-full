const LinkModel = require('../models').link;

module.exports = class LinksController{

    static getAllLinks(req, res) {
        return LinkModel.findAll()
            .then(links => res.json(links))
            .catch(err => res.json(err));
    };

    static deleteLinkById(req, res) {
        return LinkModel.destroy({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            LinkModel.findAll()
                .then(links => res.json(links))
                .catch(err => res.json(err));
        }).catch(err => res.json(err));
    };

     static updateLinkById(req, res) {
        return LinkModel.findOne({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            result.url = req.body.url;
            result.title = req.body.title;
            result.isShared = req.body.isShared;
            result.tags = req.body.tags;
            result.save().then(() => {
                LinkModel.findAll()
                    .then(links => res.json(links))
                    .catch(err => res.json(err));
            }).catch(err => res.json(err));
        }).catch(err => res.json(err));
    };

    static getLinkById(req, res) {
        return LinkModel.findOne({
            where: {
                id: req.params.id
            }
        }).then(result => res.json(result))
        .catch(err => res.json(err));
    };

    addLink(req, res) {
        let link = new LinkModel();
        link.url = req.body.url;
        link.title = req.body.title;
        link.isShared = req.body.isShared;
        link.tags = req.body.tags;
        return link.save()
        .then((result) => {
            LinkModel.findAll()
                .then(links => res.json(links))
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
    };
}