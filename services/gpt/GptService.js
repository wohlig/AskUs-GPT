const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)
const axios = require('axios')
class GptService {
  async getAnsFromGPT (context, question) {
    console.log('Sending Question to GPT')
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `This is a news article: 
        ${context}
        AskUs is a chatbot that answers any question within the scope of the above news article. If the question is outside the scope of the news article, AskUs will respond with "Sorry, I don't know". If the user acknowledges the answer or writes any form of 'okay' slang, AskUs will respond with 👍. Do not generate questions and answers on your own.
        Question: ${question}
        Answer: `,
      temperature: 0,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    })
    return response.data
  }

  async getContentFromGPT (context) {
    console.log('Sending News to GPT')
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${context}
        1. Create a summary of the above article in the range of 60-80 words.
        2. Create a headline for the summary.
        3. Create a tweet for the news article.
        4. Create tags for the above article.
        First give the summary, then the headline, then the tweet and finally the tags.`,
      temperature: 0,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    })
    return response.data
  }

  async getNewsFromGNews (categoryName, from, to) {
    console.log('Fetching News From API')
    const news = await axios.get(
        `https://gnews.io/api/v4/top-headlines?category=${categoryName}&token=${process.env.TOKEN}&expand=content&lang=en&country=in&to=${to}&from=${from}`
    )
    return news.data
  }
}

module.exports = new GptService()
