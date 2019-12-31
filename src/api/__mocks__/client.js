class Client {
  static call(path, responseData) {
    return Promise.resolve({
      status: 200,
      statusText: 'OK',
      headers: {},
      data: responseData,
    })
  }

  async mock(data, callApi) {
    this.data = data
    const response = await callApi()
    this.data = null
    return response
  }

  get(path) {
    return this.constructor.call(path, this.data)
  }
}

export default new Client()
