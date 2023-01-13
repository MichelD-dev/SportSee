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
    this.state = {...this.state, env}
  }

  defineDatas = data => (this.state.env === 'development' ? data : data.data)

  setUser(data) {
    this.state.user = this.defineDatas(data)
  }

  setActivity(data) {
    this.state = {
      ...this.state,
      activity: this.defineDatas(data),
    }
  }

  setAverage(data) {
    this.state = {
      ...this.state,
      average: {
        userId: this.defineDatas(data).userId,
        sessions: this.defineDatas(data).sessions.map(session => {
          return {
            day: this.translateToDays(session.day),
            sessionLength: session.sessionLength,
          }
        }),
      },
    }
  }

  setPerformance(data) {
    this.state = {
      ...this.state,
      performance: this.translateToFrench(this.defineDatas(data)),
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