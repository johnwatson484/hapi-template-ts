import { ServerRoute } from '@hapi/hapi'

const route: ServerRoute = {
  method: 'GET',
  path: '/assets/{path*}',
  handler: {
    directory: {
      path: [
        'app/assets/css',
        'app/assets/js',
      ],
    },
  },
}

export default route
