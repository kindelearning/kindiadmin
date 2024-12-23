// export default () => ({});

module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SG.qDyzMeHRSKizPlkiOFFwXw.fhb1SZpS4FaKF0_MMbodRgFM-6oOK8o-MPov_-ymMig"), // Replace with your SendGrid API key
    },
    settings: {
      defaultFrom: "noreply@kindilearning.com", // Replace with your email
      defaultReplyTo: "support@kindilearning.com", // Replace with your email
    },
  },
});
