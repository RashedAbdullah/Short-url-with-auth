const sessionIdUserMap = new Map();

const setUser = (id, user) => {
  sessionIdUserMap.set(id, user);
};

const getUser = (id) => {
  sessionIdUserMap.get(id);
};

module.exports = { setUser, getUser };
