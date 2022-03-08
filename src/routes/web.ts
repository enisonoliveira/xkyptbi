import express from "express";
const router = express.Router();

router.post('/book/save', function(req, res) {
    res.send(`incluir livro`);
});

router.put('/book/save', function(req, res) {
    res.send(`incluir livro`);
});
 
router.delete('/book/delete', function(req, res) {
    res.send(`deletar livro`);
});
 
router.get('/books/listAll/:name,:page', function(req, res) {
    res.send(`listar livros`);
});
 
router.get('/books/listOne/:id', function(req, res) {
    res.send(`Detalhar livro`);
});

module.exports = router;