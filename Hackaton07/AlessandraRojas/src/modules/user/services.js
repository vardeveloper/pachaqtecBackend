const User = require('./entity');

let users = [];

class UserService {
  getAllUsers() {
    return users;
  }

  getUserById(userId) {
    return users.find(user => user.id === userId);
  }

  createUser(newUser) {
    const user = new User(users.length + 1, newUser.name, newUser.email);
    users.push(user);
    return user;
  }

  updateUser(userId, dataToUpdate) {
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) return null;

    users[userIndex] = { ...users[userIndex], ...dataToUpdate };
    return users[userIndex];
  }

  deleteUser(userId) {
    users = users.filter(user => user.id !== userId);
  }

  addToCart(userId, product, quantity) {
    const user = users.find(user => user.userId === userId);
    if (!user) throw new Error('User not found');

    user.addToCart(product, quantity);
  }

  removeFromCart(userId, product) {
    const user = users.find(user => user.userId === userId);
    if (!user) throw new Error('User not found');

    user.removeFromCart(product);
  }
}

module.exports = new UserService();
