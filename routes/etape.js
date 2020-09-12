var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var etape_controller = require('../controllers/etape');

router.get('/', etape_controller.etape_liste );

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', etape_controller.test);


router.post('/create', etape_controller.etape_create);

router.get('/:id', etape_controller.etape_details);

router.put('/:id/update', etape_controller.etape_update);

router.delete('/:id/delete', etape_controller.etape_delete);


module.exports = router;
