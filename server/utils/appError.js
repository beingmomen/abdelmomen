import { Prisma } from "../db";

export const appError = (error) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    console.warn("Prisma 1");
    const code = error.code;
    const key = error.meta.target?.split("_")[1];
    // The .code property can be accessed in a type-safe manner
    if (code === "P2002") {
      throw createError({
        statusCode: 409,
        statusMessage: `This ${key} exist, Try another one `,
        stack: false,
      });
    } else if (code === "P2023") {
      throw createError({
        statusCode: 409,
        statusMessage: `This ObjectID is no exist`,
        stack: false,
      });
    } else {
      throw createError({
        statusCode: 409,
        statusMessage: `This ObjectID is no exist`,
        stack: false,
      });
    }
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    console.warn("Prisma 2", error);

    throw createError({
      statusCode: 409,
      statusMessage: `Invalid Keys`,
      stack: false,
    });
  } else {
    console.warn("Prisma else", error);

    throw createError({
      statusCode: "409",
      statusMessage: error.message,
      stack: false,
    });
  }
};
