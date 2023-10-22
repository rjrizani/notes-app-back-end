/* eslint-disable import/no-extraneous-dependencies *//* eslint-disable linebreak-style */
const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();


const server = Hapi.server({
  port: 5000,
  host: 'localhost',
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});