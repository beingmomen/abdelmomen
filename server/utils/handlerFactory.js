exports.getAll = async (Model, query, options = {}) => {
  try {
    function isObjectEmpty(obj) {
      return JSON.stringify(obj) === "{}";
    }

    const { page = 1, limit = 10, filter = {} } = query;
    const skip = (page - 1) * limit;

    const queryOptions = {
      orderBy: {
        createdAt: "asc",
      },
    };

    if (!isObjectEmpty(filter)) {
      const filterData = JSON.parse(filter);
      queryOptions.where = filterData;
    }

    if (query.limit !== "all") {
      queryOptions.take = limit;
      queryOptions.skip = skip;
    }

    const data = await Model.findMany({ ...queryOptions, ...options });
    delete queryOptions.take;
    delete queryOptions.skip;
    const count = await Model.count(queryOptions);
    await data.forEach((el, i) => (el.hash = i + 1 + skip));

    return {
      data,
      count,
    };
  } catch (error) {
    return appError(error);
  }
};

exports.getOne = async (Model, id, options = {}) => {
  try {
    return Model.findUnique({
      where: {
        id,
      },
      ...options,
    });
  } catch (error) {
    return appError(error);
  }
};

exports.createOne = async (Model, body) => {
  try {
    return Model.create({ data: body });
  } catch (error) {
    return appError(error);
  }
};

exports.updateOne = async (Model, body, id) => {
  try {
    return Model.update({
      where: {
        id,
      },
      data: body,
    });
  } catch (error) {
    return appError(error);
  }
};

exports.deleteOne = async (Model, id) => {
  try {
    return Model.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    return appError(error);
  }
};

exports.findUnique = async (Model, uniqueKey) => {
  try {
    return Model.findUnique({
      where: {
        ...uniqueKey,
      },
    });
  } catch (error) {
    return appError(error);
  }
};
