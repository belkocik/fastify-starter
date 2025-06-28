import fp from 'fastify-plugin'
import scalar from '@scalar/fastify-api-reference'

export default fp(
  async (fastify) => {
    await fastify.register(scalar, {
      routePrefix: '/api/docs',
      configuration: {
        title: 'Demo API',
        layout: 'modern',
        theme: 'mars',
        url: '/openapi.json'
      }
    })
  },
  { name: 'scalar' }
)
