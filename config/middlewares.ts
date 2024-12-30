module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": [
            "'self'",
            "http://localhost:1337",
            "http://localhost:3000",
          ],
          "img-src": ["'self'", "data:", "blob:", "http://localhost:1337"],
          "media-src": ["'self'", "data:", "blob:", "http://localhost:1337"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: ["https://kindilearning-4c2uuxq6i-kindi.vercel.app"], // Your frontend's URL
      methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
