const axios = require('axios')
class GnewsService {
  async getNewsFromGNews (categoryName, from, to) {
    console.log('Fetching News From API')
    const news = await axios.get(
        `https://gnews.io/api/v4/top-headlines?category=${categoryName}&token=${process.env.TOKEN}&expand=content&lang=en&country=in&to=${to}&from=${from}`
    )
    return news.data
  }
}

module.exports = new GnewsService()
