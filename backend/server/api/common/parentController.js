
export class ParentController {

    respondWithResult(res, statusCode) {
        statusCode = statusCode || 200;
        return function(entity) {
            if (entity) {
                return res.status(statusCode).json(entity);
            }
        };
    }

     respondWithoutResult(res) {
        return () => {
            res.status(204).end()
        };
    }

     handleEntityNotFound(res) {
         return function(entity) {
             if (!entity) {
                res.status(404).end();
            }
            return entity;
        };
    }

     handleError(res, statusCode) {
        statusCode = statusCode || 500;
        return function(err) {
            res.status(statusCode).send(err);
        };
    }
}


export default ParentController;
