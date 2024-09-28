import 'log-timestamp'
import { createServer } from './server.js'

async function init (): Promise<void> {
  const server = await createServer()
  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err: Error) => {
  console.log(err)
  process.exit(1)
})

init()
