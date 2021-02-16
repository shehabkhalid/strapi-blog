module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        host:'localhost',
        port:27017,
        database: 'dr-yasser-blog'
      },
      options: {
        ssl: false,
      },
    },
  },
});