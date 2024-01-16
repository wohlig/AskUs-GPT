const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)
const axios = require('axios')
const fs = require('fs')
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

  async getContentFromGPT (context, language, type, trends, trendsArrayLength, max_tokens = 1000, model = 'gpt-3.5-turbo-16k') {
    if (type == 'YouTube') {
      max_tokens = 5000,
      model = 'gpt-3.5-turbo-16k'
    }
    console.log('Sending News to GPT', language)
    try {
      console.log(trends)
      console.log(trendsArrayLength)
      let messages
      if (language === 'English') {
        messages = [
          {
            role: 'system',
            content:
              'You are a helpful assistant. First give the summary, label it as "Summary:", then the headline, label it as "Headline:" then the tweet, label it as "Tweet:", then the tags, label it as "Tags:", then the bullet points, label it as "Bullets:", then similarity scores, label them as "Similarities:" and finally suggested question and answer, label them as "SuggestedQnA".'
          },
          {
            role: 'user',
            content: `${context}
          1. Provide a summary of the key points from the article above. The summary should be exactly 60 words in length. Focus on capturing the main ideas and key details in a clear and concise way. Ensure the full summary is 60 words, do not go over or under. Summarize the essence of the article accurately regardless of its length.
          2. Create a headline in under 20 words for the summary.
          3. Create a tweet for the news article.
          4. Create tags for the above article.
          5. Give the same summary created above in bullet points.
          6. Compare the news article provided above with each array from the trending tags provided below and then give a similarity score (no decimal scores) out of 10 for every array from the trending tags. A high similarity score means that the array from trending tags is highly related to the news article and a low similarity score means that the array from trending tags is not too related to the news article. Provide only the similarity scores in a single line removing any preceding serial numbers or letters. If ${trendsArrayLength} is 1, then provide only 1 similarity score
          ${trends}
          7. Create 4 suggested questions and their answers, label them as "SuggestedQnA".`
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
          1. Create a summary of the above article strictly in ${language} language in the range of 60 words. It is very important for the summary to be exactly 60 words. Do not go over or under this length.
          2. Create a headline in under 20 words for the summary strictly in ${language} language.
          3. Create tags for the above article strictly in ${language} language.
          4. Compare the news article provided above with each array from the trending tags provided below and then give a similarity score out of 10 for every array from the trending tags. A high similarity score means that the array from trending tags is highly related to the news article and a low similarity score means that the array from trending tags is not too related to the news article. Provide only the similarity scores in a single line removing any preceding serial numbers or letters.
          ${trends}`
          }
        ]
      }
      const response = await openai.createChatCompletion({
        model: model,
        messages: messages,
        temperature: 0,
        max_tokens: max_tokens,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      })
      console.log(response.data.choices[0].message)
      return response.data
    } catch (error) {
      console.error('Error in getContentFromGPT', error)
      return error
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
      console.error('Error in getClassificationGPT', error)
      return error
    }
  }

  async getAdvancedClassificationGPT (summary, headline, updatedCategories) {
    console.log('Sending Summary & Headline to GPT')
    try {
      const messages = [
        {
          role: 'system',
          content:
            'You are a helpful assistant. First give the categories, label it as "Categories:", then the sentiment, label it as "Sentiment:" and finally the Advanced Sentiment, label it as "AdvancedSentiment:".'
        },
        {
          role: 'user',
          content: `Summary: ${summary}
          Headline: ${headline}
        1. Analyze the provided summary and headline and categorize it using the following predefined categories. Each article may have multiple assigned categories, but ensure that all assigned categories are selected from the list below. Do not include any new categories that are not part of the provided list. The category 'nation' provided below pertains to news about India. The category 'advertisement' provided below pertains to any news that promotes the sale, discounts, features, price of any product be it a car, or a technology device, etc. Also, news related to games will come under 'advertisement' category. Provide only the category names in lowercase format and in a single line, removing any preceding numbers.
        ${updatedCategories}
        2. Analyse the above summary and headline and return the sentiment of that article. The sentiments you possess are [Positive, Negative, Neutral]. Give the answer in 1 word only.
        3. Next, analyze the news and provide an advanced sentiment for the news. Choose one of the following advanced sentiments only from the below list also having its description and return only the name of the sentiment in one word.
        - Optimism: Positive developments, success stories, or improvements.
        - Jubilation: Celebrating achievements, milestones, or positive events.
        - Hope: Encouraging or inspiring news that offers hope for the future.
        - Relief: Reporting on the resolution of a crisis or the prevention of a negative event.
        - Progress: News about advancements, innovations, or positive changes.
        - Alarm: News that raises concern, often related to urgent or alarming situations.
        - Anger: Stories that provoke anger or outrage due to injustices or negative outcomes.
        - Grief: Reporting on tragedies, disasters, or loss that evokes sadness and sympathy.
        - Disappointment: News that falls short of expectations or results in letdowns.
        - Frustration: Reporting on persistent problems or issues that cause annoyance.
        - Informational: Reporting facts without emotional bias or opinion.
        - Matter-of-fact: Unbiased presentation of events, often in a straightforward manner.
        - Educational: News that aims to inform and educate without a particular emotional tone.
        - Reporting: Neutral coverage of events, typically with minimal emotional expression.
        - Statistic-based: News presenting data and statistics without a clear emotional tone.
        - Ambivalence: News that includes both positive and negative aspects.
        - Balanced: Reporting that provides a fair representation of contrasting views.
        - Bittersweet: News that combines elements of both joy and sorrow.
        - Compassion: News expressing empathy for those facing hardships or suffering.
        - Support: Stories that offer encouragement and assistance to affected individuals or communities.
        - Solidarity: News that unites people in shared understanding or support for a cause.
        `
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
      console.error('Error in getClassificationGPT', error)
      return error
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

  async getFullContentGPT (transcript) {
    console.log('Generating full content from GPT')
    try {
      const messages = [
        {
          role: 'system',
          content:
            'You are a helpful assistant. Give the Full Content and label it as "Full Content:".'
        },
        {
          role: 'user',
          content: `${transcript}
          Generate a news article for the above content`
        }
      ]
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo-16k',
        messages: messages,
        temperature: 0,
        max_tokens: 5000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      })
      return response.data
    } catch (error) {
      console.error('getFullContentGPT', error)
      return error
    }
  }

  async adDetectorFineTunedModel (news) {
    try {
      const messages = [
        {
          role: 'system',
          content:
            'You classify articles into news and ads'
        },
        {
          role: 'user',
          content: `Is this article an ad? Title: ${news.headline}, Article: ${news.summary}?`
        }
      ]
      console.log('Sending News to GPT', messages)
      const fineTunedModel = await openai.createChatCompletion({
        model: process.env.AD_DETECTOR_FINE_TUNED_MODEL_ID,
        messages: messages,
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      })
      return fineTunedModel.data
    } catch (error) {
      console.error('Error in fineTunedModel', error)
    }
  }
}

module.exports = new GptService()
