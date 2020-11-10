const organizationsResolver = ({ userId = null, offset = 0, limit = 10 }) => {
  let orgs = [...global.ORGANIZATIONS.values()];
  // filter by userId if provided
  if (userId) orgs = orgs.filter((org) => org.userIds.includes(userId));

  return {
    nodes: orgs.slice(offset, offset + limit),
    count: orgs.length,
  };
};

module.exports = organizationsResolver;
