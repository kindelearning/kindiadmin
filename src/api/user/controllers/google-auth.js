// src/api/user/controllers/google-auth.js

const admin = require('firebase-admin');
const { sanitizeEntity } = require('@strapi/utils');

// Initialize Firebase Admin SDK
const serviceAccount = require('../../../config/firebase/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = {
  // Google Sign-in Authentication
  async googleAuth(ctx) {
    const { token } = ctx.request.body;

    try {
      // Verify the Firebase ID Token
      const decodedToken = await admin.auth().verifyIdToken(token);

      const userId = decodedToken.uid;
      const email = decodedToken.email;

      // Check if user already exists in Strapi based on email
      let user = await strapi.db.query('plugin::users-permissions.user').findOne({ where: { email } });

      if (!user) {
        // If the user doesn't exist, create a new user
        user = await strapi.plugins['users-permissions'].services.user.add({
          username: email, // You can set other data as you need
          email,
          provider: 'google', // Set the provider as Google
          password: Math.random().toString(36).slice(-8), // Generate a random password
        });
      }

      // Generate a JWT token for the user in Strapi
      const jwt = strapi.plugins['users-permissions'].services.jwt.issue({ id: user.id });

      // Send the JWT back to the client
      ctx.send({ jwt });

    } catch (error) {
      console.error('Error verifying token:', error);
      ctx.badRequest('Invalid token', { error: error.message });
    }
  },
};
