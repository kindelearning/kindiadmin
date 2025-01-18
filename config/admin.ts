export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', "L2V8/1DANy18gPESHyAiVg=="),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', "F6mXpESmB1Ga74HD+lHLZg=="),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', "hyUHkaxe56O7dxAPZlOVeQ=="),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
