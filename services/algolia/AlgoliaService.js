const algoliasearch = require('algoliasearch')
const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_API_KEY
)
const algoliarecommend = require('@algolia/recommend')
const recommendClient = algoliarecommend(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY
)

class AlgoliaService {
  async searchQueryAlgolia (searchData, pageNo, language, id) {
    let newIndex
    if (language === undefined || language === 'English') {
      newIndex = client.initIndex('news')
    } else {
      newIndex = client.initIndex(`news_${language.toLowerCase()}`)
    }
    let news
    if (id !== '' || id !== undefined) {
      news = await newIndex.search(searchData, {
        enablePersonalization: true,
        userToken: id,
        clickAnalytics: true,
        page: pageNo - 1
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
    return data
  }
}
module.exports = new AlgoliaService()
