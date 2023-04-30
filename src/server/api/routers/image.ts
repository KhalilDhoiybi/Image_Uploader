import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const imageRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ url: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const image = await ctx.prisma.image.create({
        data: {
          url: input.url,
        },
      });
      return { image };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.image.findMany();
  }),
});
