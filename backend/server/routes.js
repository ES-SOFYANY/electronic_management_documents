import documentRouter from './api/documents/documentRouter';

export default function routes(app) {
  app.use('/api/v1/documents', documentRouter);
}
