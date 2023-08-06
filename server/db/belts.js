import { client } from ".";
import factory from "../utils/handlerFactory";

const Model = client.belt;
const queryOptions = {
  include: {
    activity: true,
    color: true,
  },
};

export const getAll = async (query) => {
  return factory.getAll(Model, query, queryOptions);
};

export const getOne = async (id) => {
  return factory.getOne(Model, id, queryOptions);
};

export const createOne = async (body) => {
  return factory.createOne(Model, body);
};

export const updateOne = async (body, id) => {
  return factory.updateOne(Model, body, id);
};

export const deleteOne = async (id) => {
  return factory.deleteOne(Model, id);
};
