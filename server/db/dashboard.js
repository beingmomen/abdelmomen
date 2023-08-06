import { client } from ".";

export const getAll = async (filter = {}) => {
  const modelNames = [
    { name: "User", icon: "i-clarity-administrator-line" },
    { name: "Activity", icon: "i-tabler-activity" },
    { name: "Coach", icon: "i-fa6-solid-person-chalkboard" },
    { name: "Championship", icon: "i-la-award" },
    // { name: "Moderator", icon: "i-fa6-solid-user-plus" },
    { name: "Color", icon: "i-fa6-solid-palette" },
    { name: "Belt", icon: "i-tabler-ribbon-health" },
    { name: "Player", icon: "i-devicon-plain-karatelabs" },
    { name: "Event", icon: "i-ic-outline-edit-calendar" },
    {
      name: "MediaType",
      icon: "i-streamline-entertainment-play-list-2-player-television-movies-slider-media-tv-players-video",
    },
    { name: "MultiMedia", icon: "i-iconoir-add-media-video" },
  ];

  const userFilter = {
    where: {
      NOT: {
        role: "DEV",
      },
    },
  };

  // Create an array of promises for each model's count operation
  const countPromises = modelNames.map(async ({ name, icon }) => {
    let count = null;
    if (name === "User") {
      count = await client[name].count(userFilter);
    } else {
      count = await client[name].count();
    }
    return { name, icon, count };
  });

  // Wait for all promises to resolve
  return await Promise.all(countPromises);
};
