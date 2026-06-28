import { createServer } from './server.ts'

const server = await createServer()
await server.start()
console.log('Server running on %s', server.info.uri)
