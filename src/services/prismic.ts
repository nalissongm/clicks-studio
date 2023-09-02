import * as Prismic from '@prismicio/client'

export function getPrismicClient(fetch?: Prismic.FetchLike) {
  const prismic = process.env.PRISMIC_ENDPOINT
    ? Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
        fetch,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      })
    : null

  return prismic
}
