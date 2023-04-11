const axios = require('axios')
class NewsDataService {
  async getNewsFromNewsData (categoryName, from, to, lang) {
    let category = categoryName
    if (categoryName === 'breaking-news') {
      category = 'top'
    }
    console.log('Fetching News From NewsData API')
    const news = await axios.get(
        `https://newsdata.io/api/1/archive?apikey=${process.env.NEWS_DATA_API_KEY}&language=${lang}&country=in&from_date=${from}&to_date=${to}&category=${category}`
    )
    return news.data
  }
}

module.exports = new NewsDataService()
