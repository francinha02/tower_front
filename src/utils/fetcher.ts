export const fetcher = async (params: RequestInfo): Promise<unknown> => {
  try {
    const response = await fetch(params)
    return await response.json()
  } catch (e) {
    console.error(`Fetcher error: ${e}`)
    return {}
  }
}
