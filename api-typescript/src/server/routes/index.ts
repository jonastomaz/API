import {Router} from 'express';
import {CidadesController} from './../controllers';

const router = Router();

router.get('/', (_, res) => {
    return res.send("olá, dev");
});

router.get('/cidades', CidadesController.getALLValidation, CidadesController.getALL);
router.post('/cidades', CidadesController.createValidation, CidadesController.create);
router.get('/cidades/:id', CidadesController.getByidValidation, CidadesController.getByid);
router.put('/cidades/:id', CidadesController.updateByidValidation, CidadesController.updateByid);
router.delete('/cidades/:id', CidadesController.deleteByidValidation, CidadesController.deleteByid);

export {router};