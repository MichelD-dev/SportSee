import Joi from 'joi'

export class DataModel {
  /**
   * Returns a string representing the day of the week corresponding to a given number.
   *
   * @param {number} dayNum - A number representing the day of the week (1-7).
   * @returns {string} - The string representing the day of the week.
   */
  translateToDays = dayNum => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    return days[dayNum - 1]
  }

  /**
   * Translates an English word to French.
   *
   * @param {string} str - The English word to translate.
   * @returns {string} - The French translation of the word.
   */
  englishToFrench = str => {
    const words = {
      energy: 'Energie',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité',
      cardio: 'Cardio',
      endurance: 'Endurance',
    }
    return words[str]
  }

  /**
   * Reformat data by translating the 'kind' property to French and converting it to upper case.
   *
   * @param {Object} obj - The data to reformat.
   * @returns {Object} - The reformatted data.
   */
  translateToFrench = obj => {
    return obj.data.map((nbrKind, key) => {
      if (+Object.keys(obj.kind)[key] === nbrKind.kind) {
        nbrKind.kind = this.englishToFrench(obj.kind[key + 1])
      }
      return nbrKind
    })
  }

  setEnv(env) {
    const {error, value} = Joi.string().required().validate(env)

    if (error) {
      throw new Error(error.message)
    }
    this.state = {...this.state, env: value}
  }

  formatDataFromEnv = data =>
    this.state.env === 'development' ? data : data.data

  setUser(data) {
    const schema = Joi.object({
      id: Joi.number().integer().required(),
      keyData: Joi.object().keys({
        calorieCount: Joi.number().integer().required(),
        carbohydrateCount: Joi.number().integer().required(),
        lipidCount: Joi.number().integer().required(),
        proteinCount: Joi.number().integer().required(),
      }),
      todayScore: Joi.number(),
      score: Joi.number(),
      userInfos: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string(),
        age: Joi.number().integer(),
      }),
    })
      .or('todayScore', 'score')
      .required()

    const {error, value} = schema.validate(this.formatDataFromEnv(data))

    if (error) {
      throw new Error(error.message)
    }

    this.state.user = {
      id: value.id,
      keyData: {
        calorieCount: value.keyData.calorieCount,
        carbohydrateCount: value.keyData.carbohydrateCount,
        lipidCount: value.keyData.lipidCount,
        proteinCount: value.keyData.proteinCount,
      },
      todayScore: value.todayScore || value.score,
      userInfos: {
        firstName: value.userInfos.firstName,
      },
    }
  }

  setActivity(data) {
    const schema = Joi.object({
      userId: Joi.number().integer().required(),
      sessions: Joi.array().items(
        Joi.object({
          day: Joi.string().required(),
          kilogram: Joi.number().integer().required(),
          calories: Joi.number().integer().required(),
        }),
      ),
    }).required()

    const {error, value} = schema.validate(this.formatDataFromEnv(data))

    if (error) {
      throw new Error(error.message)
    }
    this.state = {
      ...this.state,
      activity: {
        sessions: value.sessions,
      },
    }
  }

  setAverage(data) {
    const schema = Joi.object({
      userId: Joi.number().integer().required(),
      sessions: Joi.array().items(
        Joi.object({
          day: Joi.number().integer().required(),
          sessionLength: Joi.number().integer().required(),
        }),
      ),
    }).required()

    const {error, value} = schema.validate(this.formatDataFromEnv(data))

    if (error) {
      throw new Error(error.message)
    }

    this.state = {
      ...this.state,
      average: {
        sessions: value.sessions.map(session => {
          return {
            day: this.translateToDays(session.day),
            sessionLength: session.sessionLength,
          }
        }),
      },
    }
  }

  setPerformance(data) {
    const schema = Joi.object({
      userId: Joi.number().integer().required(),
      kind: Joi.object({
        1: Joi.string().required(),
        2: Joi.string().required(),
        3: Joi.string().required(),
        4: Joi.string().required(),
        5: Joi.string().required(),
        6: Joi.string().required(),
      }),
      data: Joi.array().items(
        Joi.object({
          value: Joi.number().required(),
          kind: Joi.number().required(),
        }),
      ),
    }).required()

    const {error, value} = schema.validate(this.formatDataFromEnv(data))

    if (error) {
      throw new Error(error.message)
    }
    this.state = {
      ...this.state,
      performance: this.translateToFrench(value),
    }
  }

  getUser() {
    return this.state.user
  }

  getActivity() {
    return this.state.activity
  }

  getAverage() {
    return this.state.average
  }

  getPerformance() {
    return this.state.performance
  }
}
