// export default () => ({});

module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"), // Replace with your SendGrid API key
    },
    settings: {
      defaultFrom: "noreply@buildingandflats.com", // Replace with your email
      defaultReplyTo: "support@kindilearning.com", // Replace with your email
    },
  },
});
