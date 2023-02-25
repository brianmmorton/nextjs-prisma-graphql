import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { PrismaClient } from '@prisma/client';
import { buildSchema } from 'type-graphql';
import { resolvers } from '@generated/type-graphql';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { NextApiRequest, NextApiResponse } from 'next';

import { SampleResolver } from '../../lib/resolvers/notifications';
import prisma from '../../services/prisma';
import { BookmarkedToolResolver } from 'lib/resolvers/bookmarkedTools';

export interface GraphQLContext {
  prisma: PrismaClient;
  req: NextApiRequest;
  res: NextApiResponse;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const schema = await buildSchema({
    resolvers: [...resolvers, SampleResolver, BookmarkedToolResolver],
    validate: false,
    emitSchemaFile: true
  });
  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    context: (): GraphQLContext => ({ prisma: prisma(), req, res }),
  });

  await apolloServer.start();

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}
