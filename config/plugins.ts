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
      google: {
        clientId: '1055268493431-9l6ee7s7d7o14dfg5vhh9pr0jgq7rlh7.apps.googleusercontent.com',
        clientSecret: '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',
        redirect_uri: env('https://proper-fun-404805c7d9.strapiapp.com/api/connect/google/callback'),
      },
    },
  },
});
