import * as express from 'express';
import path from 'path';
import controller from './documentController';
import crypto from 'crypto';
import multer from 'multer';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: function(req, file, cb) {
        crypto.pseudoRandomBytes(16, function(err, raw) {
            if (err) {
                return cb(err);
            }
            cb(null, raw.toString('hex') + path.extname(file.originalname));
        })
    }
});
const upload = multer({storage});

export default express
    .Router()
    .get('/:id', (req, res) => controller.findById(req, res))
    .post('/', upload.any(), (req, res) => controller.create(req, res))
    .get('/', (req, res) => controller.all(req, res))
    .put('/:id', (req, res) => controller.update(req, res))
    .patch('/:id', (req, res) => controller.patch(req, res))
    .delete('/:id', (req, res) => controller.destroy(req, res));

