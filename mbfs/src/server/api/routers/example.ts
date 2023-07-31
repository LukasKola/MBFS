import { create } from "domain";
import { date, z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const CarSchema = z.object({
  fuel: z.string(),
  manufacturer: z.string(),
  model: z.string(),
  engineVal: z.string(),
  color: z.string(),
  prize: z.string(),
  picture: z.string(),
  year: z.string()
});


export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});

export const carRouter = createTRPCRouter({
  getCars: publicProcedure
    .query(({ctx}) => {
      return ctx.prisma.car.findMany()
    }),

  addCar: publicProcedure
    .input(CarSchema)
    .mutation( async ({ input, ctx}) => {
      const newCar = await ctx.prisma.car.create({
        data: {
          ...input
        }
      })
      return newCar
    }),

  deleteCar: publicProcedure
    .input(z.string())
    .mutation(async ({ input, ctx}) => {
      const deletedCar = await ctx.prisma.car.delete({
        where: {
          id: input
        }
      })
      return deletedCar
    }),
    updateCar: publicProcedure
    .input(z.object({
      id: z.string(),
      data: CarSchema,
    }))
    .mutation(async({input, ctx}) => {
      const updatedCar = await ctx.prisma.car.update({
        where: {
          id: input.id
        },
        data: {
          ...input.data
        }
      })
    })
})
