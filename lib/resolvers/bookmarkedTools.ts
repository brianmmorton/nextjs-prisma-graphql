import 'reflect-metadata';
import { Resolver, Subscription } from 'type-graphql';
import { BookmarkedTool } from '@generated/type-graphql';

@Resolver()
export class BookmarkedToolResolver {
  @Subscription(returns => BookmarkedTool, {
    subscribe: (_, args, context) => {
      return context.prisma.$subscribe.users({ mutation_in: [args.mutationType] });
    },
  })
  bookmarkedToolCreated(): BookmarkedTool {
    console.log(this);
    return {
      id: 'xxxx',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 'xxxxx',
      toolId: 'zzzzz',
    }
  }
}