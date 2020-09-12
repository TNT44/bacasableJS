var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var projet_controller = require('../controllers/projet');

router.get('/', projet_controller.projet_liste );

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', projet_controller.test);


router.post('/create', projet_controller.projet_create);

router.get('/:id', projet_controller.projet_details);

router.put('/:id/update', projet_controller.projet_update);

router.delete('/:id/delete', projet_controller.projet_delete);


module.exports = router;
