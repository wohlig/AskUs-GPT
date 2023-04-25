const algoliasearch = require('algoliasearch')
const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_API_KEY
)
const algoliarecommend = require('@algolia/recommend')
const recommendClient = algoliarecommend(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY
)

class AlgoliaService {
  async searchQueryAlgolia (searchData, pageNo, language, id, blockedSources) {
    let newIndex
    if (language === undefined || language === 'English') {
      newIndex = client.initIndex('news')
    } else {
      newIndex = client.initIndex(`news_${language.toLowerCase()}`)
    }
    let news
    if (id !== '' && id !== undefined) {
      const optionalFilters = []
      for (const item of blockedSources) {
        optionalFilters.push(`source : -${item}`)
      }
      console.log(optionalFilters)
      news = await newIndex.search(searchData, {
        enablePersonalization: true,
        userToken: id,
        clickAnalytics: true,
        page: pageNo - 1,
        optionalFilters: optionalFilters
      })
    } else {
      news = await newIndex.search(searchData, {
        enablePersonalization: true,
        clickAnalytics: true,
        page: pageNo - 1
      })
    }
    return news
  }

  async algoliaTrendingNews (facetName, facetValue) {
    const data = await recommendClient.getTrendingItems([
      {
        indexName: 'news',
        facetName: facetName,
        facetValue: facetValue
      }
    ])
    return data.results[0].hits
  }
}
module.exports = new AlgoliaService()
