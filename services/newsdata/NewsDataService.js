const axios = require('axios')
class NewsDataService {
  async getNewsFromNewsData (categoryName, from, to) {
    console.log('Fetching News From NewsData API')
    const news = await axios.get(
        `https://newsdata.io/api/1/archive?apikey=${process.env.NEWS_DATA_API_KEY}&language=en&country=in&from_date=${from}&to_date=${to}&category=${categoryName}`
    )
    return news.data
  }
}

module.exports = new NewsDataService()
