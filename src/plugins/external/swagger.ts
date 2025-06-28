import fp from 'fastify-plugin'
import fastifySwagger from '@fastify/swagger'

export default fp(
  async (fastify) => {
    await fastify.register(fastifySwagger, {
      openapi: {
        info: {
          title: 'Fastify demo API',
          version: '1.0.0'
        }
      }
    })

    // Wystawiamy ręcznie endpoint na potrzeby Scalar
    fastify.get('/openapi.json', async () => fastify.swagger())
  },
  { name: 'swagger' }
)
