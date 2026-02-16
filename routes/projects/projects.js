const express = require('express');

const router =  express.Router();

router.post('/', (req, res) => {
    res.json({msg: 'Add project'});
});

router.put('/:id', (req, res) => {
    res.json({msg: 'Update project'})
})

router.get('/', (req, res) => {
    res.json({msg: 'Get all projects'});
});

router.get('/:id', (req, res) => {
    res.json({msg: 'Get project by ID'});
});

module.exports = router;