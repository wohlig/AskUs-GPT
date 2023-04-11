const axios = require('axios')
class NewsAPiService {
  async getNewsFromNewsAPi (categoryName, language) {
    console.log('Fetching News From API')
    if (categoryName === 'breaking-news') {
      categoryName = language.toLowerCase()
    } else {
      categoryName = language.toLowerCase() + '_' + categoryName.toLowerCase()
    }
    console.log('🚀 ~ file: NewsApiService.js:11 ~ NewsAPiService ~ getNewsFromNewsAPi ~ categoryName:', categoryName)
    const news = await axios.get(
        `https://newsapi.in/newsapi/news.php?key=${process.env.NEWSAPI_KEY}&category=${categoryName}`
    )
    return news.data
  }
}

module.exports = new NewsAPiService()
