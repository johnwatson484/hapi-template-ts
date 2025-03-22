import { Boom } from '@hapi/boom'
import { Server, ServerOptions, Request, ResponseToolkit, ResponseObject, Plugin } from '@hapi/hapi'

const plugin: Plugin<ServerOptions> = {
  name: 'headers',
  register: (server: Server, _options: ServerOptions) => {
    server.ext('onPreResponse', (request: Request, h: ResponseToolkit) => {
      const response: ResponseObject | Boom = request.response
      const headers = response instanceof Boom ? response.output.headers : response?.headers

      if (headers) {
        headers['X-Content-Type-Options'] = 'nosniff'
        headers['X-Frame-Options'] = 'DENY'
        headers['X-Robots-Tag'] = 'noindex, nofollow'
        headers['X-XSS-Protection'] = '1; mode=block'
        headers['Cache-Control'] = 'no-cache'
        headers['Cross-Origin-Opener-Policy'] = 'same-origin'
        headers['Cross-Origin-Embedder-Policy'] = 'require-corp'
        headers['Cross-Origin-Resource-Policy'] = 'same-site'
        headers['Referrer-Policy'] = 'no-referrer'
        headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains; preload'
        headers['Permissions-Policy'] = 'camera=(), geolocation=(), magnetometer=(), microphone=(), payment=(), usb=()'
      }

      return h.continue
    })
  }
}

export default plugin
