const express = require('express');
const authors = express.Router();
const Author = require('../models/Author');

/**
 * @author Daniel Ramos
 * @since 02-Abril-2020
 * Get - retorna todos los autores en la BD
 */
authors.get('/', async (req, res) => {
   try {
        const authors = await Author.find();
        res.json(authors);
   } catch (err) {
       res.json({ message: err })
   }
});


/** 
 * @author Daniel Ramos
 * @since 02-Abril-2020
 * Post - Envia un nuevo autor a la BD
 */
authors.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name
    });
    try {
        const savedAuthor = await author.save();
        res.json(savedAuthor);
    } catch (err) {
        res.json({ message: err })
    }
});


/**
 * @author Daniel Ramos
 * @since 02-Abril-2020
 * Get - Trae un autor especifico dado su Id
 * @param {String} authorId Id del autor que se quiere consultar
 */
authors.get('/:authorId', async (req,res) => {
    try {
        const author = await Author.findById(req.params.authorId);
        res.json(author);
    } catch (err) {
        res.json({ message: err })
    }
})


/**
 * @author Daniel Ramos
 * @since 02-Abril-2020
 * Delete - Borra un autor en la BD dado su Id
 * @param {String} authorId Id del autor que se quiere borrar
 */
authors.delete('/:authorId', async (req, res) => {
    try {
        const removedAuthor = await Author.remove({ _id: req.params.authorId });
        res.json(removedAuthor);
    } catch (err) {
        res.json({ message: err })
    }
});


/**
 * @author Daniel Ramos
 * @since 02-Abril-2020
 * Patch - Actualiza el nombre de un autor en la BD dado su Id
 * @param {String} authorId Id del autor que se quiere actualizar
 */
authors.patch('/:authorId', async (req, res) => {
    try {
        const upatedAuthor = await Author.updateOne(
           { _id: req.params.authorId }, 
           { $set : { name: req.body.name } }
        );
        res.json(upatedAuthor);
    } catch (err) {
        res.json({ message: err });
    }
    
})


// Exportación del modulo
module.exports = authors;

