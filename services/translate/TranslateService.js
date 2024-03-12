const cache = require('../../middlewares/requestCacheMiddleware')
const {TranslationServiceClient} = require('@google-cloud/translate');
class TranslateService {
  async getTranslation (text, lang) {
    try {
        const dataFromRedis = await cache.get(text+lang)
        if(!dataFromRedis) {
            const translationClient = new TranslationServiceClient();
            const request = {
                parent: `projects/${process.env.PROJECT_ID}/locations/${process.env.PROJECT_LOCATION}`,
                contents: [text],
                mimeType: 'text/plain', // mime types: text/plain, text/html
                sourceLanguageCode: 'en',
                targetLanguageCode: lang
              };
            
              // Run request
              const [response] = await translationClient.translateText(request);
              await cache.setWithoutEx(text+lang, response.translations[0].translatedText)
              return response.translations[0].translatedText
        }
        return dataFromRedis
    } catch (error) {
        console.error(error)
    }
  }

  async predictionTranslation (predictionObj, lang) {
    const birth_moon_sign = await this.getTranslation(predictionObj.birth_moon_sign, lang)
    const birth_moon_nakshatra = await this.getTranslation(predictionObj.birth_moon_nakshatra, lang)
    const name = await this.getTranslation(predictionObj.name, lang)
    const sunsign = await this.getTranslation(predictionObj.sunsign, lang)
    const health = await this.getTranslation(predictionObj.prediction.health, lang)
    const emotions = await this.getTranslation(predictionObj.prediction.emotions, lang)
    const profession = await this.getTranslation(predictionObj.prediction.profession, lang)
    const luck = await this.getTranslation(predictionObj.prediction.luck, lang)
    const personal_life = await this.getTranslation(predictionObj.prediction.personal_life, lang)
    const travel = await this.getTranslation(predictionObj.prediction.travel, lang)
    const finalTranslatedPredicitonObj = {
        health: health,
        emotions: emotions,
        profession: profession,
        luck: luck,
        personal_life: personal_life,
        travel: travel
    }
    predictionObj.birth_moon_sign = birth_moon_sign
    predictionObj.birth_moon_nakshatra = birth_moon_nakshatra
    predictionObj.name = name
    predictionObj.sunsign = sunsign
    predictionObj.prediction = finalTranslatedPredicitonObj
    return predictionObj
  }
}

module.exports = new TranslateService()
