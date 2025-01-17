// export default () => ({});

module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env(
        "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"
      ), // Replace with your SendGrid API key
    },
    settings: {
      defaultFrom: "support@kindi.education", // Replace with your email
      defaultReplyTo: "support@kindi.education", // Replace with your email
    },
  },
  'users-permissions': {
    enabled: true,
    config: {
      providers: {
        auth0: {
          clientId: env('AUTH0_CLIENT_ID'),
          clientSecret: env('AUTH0_CLIENT_SECRET'),
          domain: env('AUTH0_DOMAIN'),
        },
      },
      redirect: 'https://kindilearning.vercel.app/', // Replace with your front-end URL

      
    },
  },
});
// jwtSecret: env('JWT_SECRET'),
//       jwt: {
//         expiresIn: '7d',
//       }