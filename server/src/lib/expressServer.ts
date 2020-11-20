import * as express from 'express';
import * as path from 'path';
import chalk from 'chalk';
import { error404, error500 } from '../middleware/errors';
var cors = require('cors')


const port = process.env.PORT || 8082;
const host = process.env.SERVER_HOST || 'localhost';

const expressServer = (app: express.Application, isDev = false) => {
  if (!app) {
    console.log('Server application instance is undefined');
    throw new Error('Server application instance is undefined');
  }

  app.set('port', port);
  app.set('ipAdress', host);
  app.use(cors())
  app.get('/jobs', (req, res) =>
    res.sendFile(path.join(__dirname, '../assets/jobs.json')),
  );

  app.get('/filters', (req, res) =>
    res.sendFile(path.join(__dirname, '../assets/filters.json')),
  );

  app.use(error404);
  app.use(error500);

  /* eslint-disable no-console */
  // @ts-ignore
  app.listen(port, host, () =>
    console.log(`
        =====================================================
        -> Server (${chalk.bgBlue('SPA')}) 🏃 (running) on ${chalk.green(
      host,
    )}:${chalk.green(`${port}`)}
        =====================================================
      `),
  );
  /* eslint-enable no-console */

  return app;
};

export default expressServer;
