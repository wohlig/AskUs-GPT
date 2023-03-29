const algoliasearch = require('algoliasearch')
const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_API_KEY
)

class AlgoliaService {
  async searchQueryAlgolia (searchData, pageNo, language, id) {
    let newIndex
    if (language === undefined || language === 'English') {
      newIndex = client.initIndex('news')
    } else {
      newIndex = client.initIndex(`news_${language.toLowerCase()}`)
    }
    const news = await newIndex.search(searchData, {
      enablePersonalization: true,
      userToken: id,
      clickAnalytics: true,
      page: pageNo - 1
    })
    return news
  }
}
module.exports = new AlgoliaService()
