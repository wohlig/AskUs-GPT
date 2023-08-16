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
    try {
      const news = await axios.get(
        `https://gnews.io/api/v4/top-headlines?category=${categoryName}&token=${process.env.TOKEN}&expand=content&lang=${lang}&country=in&to=${to}&from=${from}&max=50`
      )
      return news.data
    } catch (error) {
      console.log('GNEWS Error', error, '>>>>', error.message)
      await axios.post(
        `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=@newsShieldLogs&text=Title:%20GNEWS%20Error\n\nMessage:%20${error.message}`
      )
      throw new Error(error.message)
    }
  }
}

module.exports = new GnewsService()
