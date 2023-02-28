class AdminService {
  resolvedService () {
    return Promise.resolve(true)
  }
}

module.exports = new AdminService()
