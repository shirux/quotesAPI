const express = require('express');
const quotes = express.Router();
const Quote = require('../models/Quote');


/**
 * @author Daniel Ramos
 * @since 02-Abril-2020
 * Get - retorna todas las citas de la BD
 */
quotes.get('/', async (req, res) => {
   try {
        const quotes = await Quote.find().populate('author');
        res.json(quotes);
   } catch (err) {
       res.json({ message: err })
   }
});


/**
 * @author Daniel Ramos
 * @since 02-Abril-2020
 * Post - Envia una nueva cita a la BD
 */
quotes.post('/', async (req, res) => {
    const quote = new Quote({
        quote: req.body.quote,
        year: req.body.year,
        source: req.body.source,
        author: req.body.author
    });
    
    try {
        const savedQuote = await quote.save();
        res.json(savedQuote);
    } catch (err) {
        res.json({ message: err })
    }
    
});


/**
 * @author Daniel Ramos
 * @since 02-Abril-2020
 * Get - Retorna una cita dado su Id
 * @param {String} quoteId Id de la cita que se quiere consultar
 */
quotes.get('/:quoteId', async (req,res) => {
    try {
        const quote = await Quote.findById(req.params.quoteId).populate('author');
        res.json(quote);
    } catch (err) {
        res.json({ message: err })
    }
})


/**
 * @author Daniel Ramos
 * @since 02-Abril-2020
 * Delete - Elimina una cita dada su Id
 * @param {String} quoteId Id de la cita a eliminar
 */
quotes.delete('/:quoteId', async (req, res) => {
    try {
        const removedQuote = await Quote.remove({ _id: req.params.quoteId });
        res.json(removedQuote);
    } catch (err) {
        res.json({ message: err })
    }
});


/**
 * @author Daniel Ramos
 * @since 02-Abril-2020
 * Patch - Actualiza una cita dada su Id
 * @param {String} quoteId Id de la cita a actualizar
 */
quotes.patch('/:quoteId', async (req, res) => {
    try {
        const updatedQuote = await Quote.findOne({ _id: req.params.quoteId });

        // Validaciones del header para actualizar el campo
        if (req.body.quote !== undefined) updatedQuote.quote = req.body.quote;
        if (req.body.year !== undefined) updatedQuote.year = req.body.year;
        if (req.body.source !== undefined) updatedQuote.source = req.body.source;
        if (req.body.author !== undefined) updatedQuote.author = req.body.author;
        
        // Se guarda la cita actualizada
        updatedQuote.save();
        res.json(updatedQuote);
    } catch (err) {
        res.json({ message: err });
    }
})


/**
 * @author Daniel Ramos
 * @since 02-Abril-2020
 * @param {String} authorId Id del autor 
 * Get - Retorna todas las citas dado el Id de un autor
 */
quotes.get('/author/:authorId', async (req, res) => {
    try {
        const quotes = await Quote.find({ author: req.params.authorId }).populate('author');
        res.json(quotes);
    } catch (err) {
        res.json(err);
    }
});


// Exportación del modulo
module.exports = quotes;





