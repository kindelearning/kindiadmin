export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['hvbhktocOSsXjZNUDwVywg==','n9tfLUSPgOErrNyeP96iNA==','uv+X6pRR9w+BFsixKHSNNg==','2aCU5mVlFDDg7KZUcbMJbg==']),
    // keys: env.array('APP_KEYS', ['yourKey1', 'yourKey2']),
  },
});
