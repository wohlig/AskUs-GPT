const axios = require('axios')
class GnewsService {
  async getNewsFromGNews (categoryName, from, to, lang) {
    console.log({
      categoryName: categoryName,
      from: from,
      to: to,
      lang: lang
    })
    console.log('Fetching News From API')
    const news = await axios.get(
        `https://gnews.io/api/v4/top-headlines?category=${categoryName}&token=${process.env.TOKEN}&expand=content&lang=${lang}&country=in&to=${to}&from=${from}&max=50`
    )
    console.log('New News', news.data)
    return news.data
  }
}

module.exports = new GnewsService()
