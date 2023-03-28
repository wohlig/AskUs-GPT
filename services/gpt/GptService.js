const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

class GptService {
  async getAnsFromGPT (context, question) {
    console.log('Sending Question to GPT')
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: `Your name is AskUs and you are a helpful chatbot. AskUs answers any question within the scope of the below news article. If the question is outside the scope of the news article, AskUs will respond with "I apologize, but I am unable to provide a response at this time as I do not possess the necessary information. Is there anything else I can assist you with?". If the user acknowledges the answer or writes any form of 'okay' slang, AskUs will respond with 👍. Do not generate questions and answers on your own. This is the context of the article: ${context}` },
        {
          role: 'user', content: `Question: ${question}`
        },
        {
          role: 'assistant', content: 'Answer: '
        }
      ],
      temperature: 0,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    })
    return response.data
  }

  async getContentFromGPT (context, language) {
    console.log('Sending News to GPT', language)
    try {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant. First give the summary, label it as "Summary:", then the headline, label it as "Headline:" then the tweet, label it as "Tweet:", then the tags, label it as "Tags:" and finally the bullet points, label it as "Bullets:" ' },
          {
            role: 'user',
            content: `${context}
          1. Create a summary of the above article in ${language} language in the range of 60-80 words.
          2. Create a headline for the summary in ${language} language.
          3. Create a tweet for the news article.
          4. Create tags for the above article in ${language} language.
          5. Give the same summary created above in bullet points in ${language} language.`
          }
        ],
        temperature: 0,
        max_tokens: 500,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      })
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = new GptService()
