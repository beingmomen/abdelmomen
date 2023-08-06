import { client } from ".";
import factory from "../utils/handlerFactory";

const Model = client.event;
const queryOptions = {
  include: {
    videos: true,
    activity: true,
  },
};

export const getAll = async (query) => {
  return factory.getAll(Model, query, queryOptions);
};

export const getOne = async (id) => {
  return factory.getOne(Model, id, queryOptions);
};

export const createOne = async (body) => {
  const videos = body.videos;
  delete body.videos;
  const data = await factory.createOne(Model, body);

  const formattedData = videos.map((item) => ({
    ...item,
    eventId: data.id,
  }));

  await client.EventRef.createMany({
    data: formattedData,
  });

  return data;
};

export const updateOne = async (body, id) => {
  const videos = body.videos;
  delete body.videos;

  await client.EventRef.deleteMany({
    where: {
      eventId: id,
    },
  });

  const data = await factory.updateOne(Model, body, id);

  const formattedData = videos.map(({ id, ...rest }) => ({
    ...rest,
    eventId: data.id,
  }));

  await client.EventRef.createMany({
    data: formattedData,
  });

  return data;
};

export const deleteOne = async (id) => {
  return factory.deleteOne(Model, id);
};
