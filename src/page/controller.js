exports.dashboard = async (req, res) => {
  const data = {
    pageid: "dashboard"
  }
  res.render('dashboard.html', data)
}

exports.addresses = async (req, res) => {
  const data = {
    pageid: "addresses"
  }
  res.render('addresses.html', data)
}

