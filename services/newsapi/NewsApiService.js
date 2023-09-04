const axios = require('axios')
class NewsAPiService {
  async getNewsFromNewsAPi (categoryName, language) {
    console.log('Fetching News From API')
    if (categoryName === 'breaking-news') {
      categoryName = language.toLowerCase()
    } else {
      if (categoryName === 'nation') {
        if (language === 'Gujarati' || language === 'Kannada' || language === 'Punjabi') {
          categoryName = 'national'
        }
        if (language === 'Bengali') {
          categoryName = 'state'
        }
      } else if (categoryName === 'world') {
        if (language === 'Gujarati' || language === 'Kannada') {
          categoryName = 'international'
        }
      } else if (categoryName === 'business') {
        if (language === 'Kannada') {
          categoryName = 'commercial'
        }
      } else if (categoryName === 'entertainment') {
        if (language === 'Bengali') {
          categoryName = 'movies'
        }
      }
      categoryName = language.toLowerCase() + '_' + categoryName.toLowerCase()
    }
    const news = await axios.get(
        `https://newsapi.in/newsapi/news.php?key=${process.env.NEWSAPI_KEY}&category=${categoryName}`
    )
    return news.data
  }
}

module.exports = new NewsAPiService()
