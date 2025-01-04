module.exports = {
  routes: [
    {
      method: 'PUT',
      path: '/users/:userId/kids/:kidId',
      handler: 'user.updateKid',
      config: {
        auth: false, // Adjust as per your needs
      },
    },
  ],
};
