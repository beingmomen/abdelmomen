import { client, Prisma } from ".";
import bcrypt from "bcrypt";
import factory from "../utils/handlerFactory";

const Model = client.user;

export const getAll = async (query) => {
  return factory.getAll(Model, query);
};

export const createUser = async (userData) => {
  const body = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 12),
    passwordConfirm: bcrypt.hashSync(userData.passwordConfirm, 12),
  };
  return factory.createOne(Model, body);
};

export const updateOne = async (body, id) => {
  return factory.updateOne(Model, body, id);
};

export const getByUniqueKey = (key) => {
  return factory.findUnique(Model, key);
};

export const resetPassword = (hashedToken) => {
  return client.user.findFirst({
    where: {
      passwordResetToken: hashedToken,
      passwordResetExpires: {
        gt: Date.now(),
      },
    },
  });
};

export const deleteOne = async (id) => {
  return factory.deleteOne(Model, id);
};
