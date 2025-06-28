import helmet from '@fastify/helmet'

export const autoConfig = {
  // Set plugin options here
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"], // 🔥 to dodaj
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:']
    }
  }
}

/**
 * This plugins sets the basic security headers.
 *
 * @see {@link https://github.com/fastify/fastify-helmet}
 */
export default helmet
