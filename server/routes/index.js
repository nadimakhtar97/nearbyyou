const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const {catchErrors} = require('../handlers/errorHandlers');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/',catchErrors(storeController.getStores));
router.get('/stores',catchErrors(storeController.getStores));
router.get('/stores/:id/edit',catchErrors(storeController.editStore));
router.get('/store/:slug',catchErrors(storeController.getStoreBySlug))
router.post('/add/:id',catchErrors(storeController.updateStore));
router.post('/add',catchErrors(storeController.createStore));
router.get('/Tags',catchErrors(storeController.getStoresByTag));
router.get('/Tags/:Tags',catchErrors(storeController.getStoresByTag));
// router.get('/login',userController.loginForm);
router.post('/register',userController.register,authController.login);
router.post('/login',authController.login);
router.post('/forgot',catchErrors(authController.forgot));
router.post('/forgot/reset/:token',authController.confirmedPasswords,catchErrors(authController.updatePassword));


router.get('/api/stores/near',catchErrors(storeController.mapStores));




module.exports = router;


