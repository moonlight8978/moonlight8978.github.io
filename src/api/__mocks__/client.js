class Client {
  get(path) {
    return this.call(path, this.data)
  }

  mock(data) {
    this.data = data
  }

  call(path, { data, status = 200, headers = {} }) {
    this.data = null
    return Promise.resolve({
      statusText: 'OK',
      status,
      headers,
      data,
    })
  }
}

export default new Client()
