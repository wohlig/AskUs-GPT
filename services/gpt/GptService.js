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
        {
          role: 'system',
          content: `Your name is AskUs and you are a helpful chatbot. AskUs answers any question within the scope of the below news article. If the question is outside the scope of the news article, AskUs will respond with "I apologize, but I am unable to provide a response at this time as I do not possess the necessary information. Please ask a question related to this news article. Is there anything else I can assist you with?". If the user acknowledges the answer or writes any form of 'okay' slang, AskUs will respond with 👍. Do not generate questions and answers on your own. This is the context of the article: ${context}`
        },
        {
          role: 'user',
          content: `Question: ${question}`
        },
        {
          role: 'assistant',
          content: 'Answer: '
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
      let messages
      if (language === 'English') {
        messages = [
          {
            role: 'system',
            content:
              'You are a helpful assistant. First give the summary, label it as "Summary:", then the headline, label it as "Headline:" then the tweet, label it as "Tweet:", then the tags, label it as "Tags:", and finally the bullet points, label it as "Bullets:".'
          },
          {
            role: 'user',
            content: `${context}
          1. Create a summary of the above article in the range of 60 words.
          2. Create a headline for the summary.
          3. Create a tweet for the news article.
          4. Create tags for the above article.
          5. Give the same summary created above in bullet points.`
          }
        ]
      } else {
        messages = [
          {
            role: 'system',
            content:
              'You are a helpful assistant. First give the summary, label it as "Summary:", then the headline, label it as "Headline:" and finally the tags, label it as "Tags:".'
          },
          {
            role: 'user',
            content: `${context}
          1. Create a summary of the above article strictly in ${language} language in the range of 60 words.
          2. Create a headline for the summary strictly in ${language} language.
          3. Create tags for the above article strictly in ${language} language.`
          }
        ]
      }
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messages,
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      })
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  async getClassificationGPT (summary, headline, updatedCategories) {
    console.log('Sending Summary & Headline to GPT')
    try {
      const messages = [
        {
          role: 'system',
          content:
            'You are a helpful assistant. First give the categories, label it as "Categories:" and finally the Sentiment, label it as "Sentiment:".'
        },
        {
          role: 'user',
          content: `Summary: ${summary}
          Headline: ${headline}
        1. Analyze the provided summary and headline and categorize it using the following predefined categories. Each article may have multiple assigned categories, but ensure that all assigned categories are selected from the list below. Do not include any new categories that are not part of the provided list. The category 'nation' provided below pertains to news about India. The category 'advertisement' provided below pertains to any news that promotes the sale, discounts, features, price of any product be it a car, or a technology device, etc. Also, news related to games will come under 'advertisement' category. Provide only the category names in lowercase format and in a single line, removing any preceding numbers.
        ${updatedCategories}
        2. Analyse the above summary and headline and return the sentiment of that article. The sentiments you possess are [Positive, Negative, Neutral]. Give the answer in 1 word only.`
        }
      ]
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messages,
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      })
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  async chatGPTAns (context, question) {
    console.log('Sending Question to GPT')
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Answer the question based on the context below'
        },
        {
          role: 'user',
          content: `Context: ${context}
                    Question: ${question}`
        },
        {
          role: 'assistant',
          content: 'Answer: '
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
}

module.exports = new GptService()
