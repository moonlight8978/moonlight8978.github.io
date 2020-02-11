class Client {
  get(path) {
    return this.call(path, this.data)
  }

  mock(data) {
    this.data = data
  }

  call(path, responseData) {
    this.data = null
    return Promise.resolve({
      status: 200,
      statusText: 'OK',
      headers: {},
      data: responseData,
    })
  }
}

export default new Client()
