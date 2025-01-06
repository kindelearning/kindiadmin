// src/api/user/routes/google-auth.js

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/auth/google",
      handler: "google-auth.googleAuth",
      config: {
        policies: [],
      },
    },
  ],
};
