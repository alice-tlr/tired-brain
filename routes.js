module.exports = {
  getHome: getHome
}

function getHome (req, res) {
  res.render("home", {});
}
