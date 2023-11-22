export const getCollectionByUserId = (collection, userId) => collection.filter(item => item.userId === userId);

export const getUsernameById = (users, id) => users.find(user => user.id === id).name;

export const getFullAddress = user => `${user.address.zipcode}, ${user.address.street}, ${user.address.suite}, ${user.address.city}`;