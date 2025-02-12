import type { EventHandlerRequest, H3Event } from 'h3'

export default (event: H3Event<EventHandlerRequest>) => {
  const { theMealDb } = useRuntimeConfig(event)

  return $fetch.create({
    baseURL: new URL(theMealDb.apiKey, theMealDb.apiBase).toString(),
  })
}
