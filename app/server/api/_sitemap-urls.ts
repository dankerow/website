import { serverQueryContent } from '#content/server'

export default cachedEventHandler(async (e) => {
  const [
    posts
  ] = await Promise.all([
    serverQueryContent(e).find()
  ])
  return [...posts].map((p) => {
    return { loc: p._path, changefreq: 'monthly', priority: 0.8 }
  })
}, {
  name: 'sitemap-dynamic-urls',
  maxAge: 60 * 10
})
