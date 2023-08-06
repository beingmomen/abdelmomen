import { client } from ".";
import factory from "../utils/handlerFactory";

const Model = client.player;
const queryOptions = {
  include: {
    belts: {
      include: {
        belt: true, // Include the entire Belt object
      },
    },
    activity: true,
    championship: true,
  },
};

export const getAll = async (query) => {
  return factory.getAll(Model, query, queryOptions);
};

export const getOne = async (id) => {
  return factory.getOne(Model, id, queryOptions);
};

export const createOne = async (body) => {
  const belts = body.belts;
  delete body.belts;
  const data = await factory.createOne(Model, body);

  const formattedData = belts.map((item) => ({
    ...item,
    playerId: data.id,
    date: new Date(item.date),
  }));

  await client.BeltRef.createMany({
    data: formattedData,
  });

  return data;
};

export const updateOne = async (body, id) => {
  const belts = body.belts;
  delete body.belts;

  await client.BeltRef.deleteMany({
    where: {
      playerId: id,
    },
  });

  const data = await factory.updateOne(Model, body, id);

  const formattedData = belts.map(({ id, ...rest }) => ({
    ...rest,
    playerId: data.id,
    date: new Date(rest.date),
  }));

  await client.BeltRef.createMany({
    data: formattedData,
  });

  return data;
};

export const deleteOne = async (id) => {
  return factory.deleteOne(Model, id);
};
