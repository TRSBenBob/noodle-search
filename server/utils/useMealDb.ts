import type { EventHandlerRequest, H3Event } from 'h3'

// Prepare a fetch instance for themealdb
export default (event: H3Event<EventHandlerRequest>) => {
  const { theMealDb } = useRuntimeConfig(event)

  return $fetch.create({
    baseURL: new URL(theMealDb.apiKey, theMealDb.apiBase).toString(),
  })
}
