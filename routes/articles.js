const express = require('express');
const articles = express.Router();
const Article = require('../models/Article');

articles.get('/', async (req, res) => {
   try {
        const articles = await Article.find();
        res.json(articles);
   } catch(err) {
       res.json({ message: err })
   }
});



articles.post('/', async (req, res) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description
    });
    
    try {
        const savedArticle = await article.save();
        res.json(savedArticle);
    } catch(err) {
        res.json({ message: err })
    }
    
});


articles.get('/:articleId', async (req,res) => {
    try {
        const article = await Article.findById(req.params.articleId);
        res.json(article);
    } catch(err) {
        res.json({ message: err })
    }
})


articles.delete('/:articleId', async (req, res) => {
    try {
        const removedArticle = await Article.remove({_id: req.params.articleId });
        res.json(removedArticle);
    } catch(err) {
        res.json({ message: err })
    }
    
});



articles.patch('/:articleId', async (req, res) => {
    try {
       const updatedArticle = await Article.updateOne(
           {_id: req.params.articleId }, 
           { $set : { title: req.body.title } }
        );
        res.json(updatedArticle);
    } catch(err) {
        res.json({ message: err });
    }
    
})

module.exports = articles;





