import type { FastifyInstance } from "fastify";
import fastify from "fastify";

const app: FastifyInstance = fastify();

app.listen(
  {
    port: 3333,
  },
  () => console.log('Server is running on port 3333')
)