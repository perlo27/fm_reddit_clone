import Koa from 'koa';
// import jwt from 'koa-jwt';
import { ApolloServer, gql } from 'apollo-server-koa';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';
import cors from '@koa/cors';
import winston from 'winston';
import Router from 'koa-router';
import { logger } from './logging';
import { config } from './config';

import welcome from './routes/welcome';
import { typeDefs, resolvers } from './schema';

const app = new Koa();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

app.use(helmet());
app.use(cors());
app.use(logger(winston));
app.use(bodyParser());

const unprotectedRouter = new Router();

// Hello World route
unprotectedRouter.get('/', welcome.helloWorld);
app.use(unprotectedRouter.routes()).use(unprotectedRouter.allowedMethods());

server.applyMiddleware({ app, path: '/api' });

app.listen(config.port);

console.log(`Server running on port ${config.port}`);
