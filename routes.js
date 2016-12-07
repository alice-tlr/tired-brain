module.exports = {
  getHome: getHome
}

function getHome (req, res) {
  res.send('<h1>my brain is very tired</h1>')
}
