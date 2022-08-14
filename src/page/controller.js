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

exports.clients = async (req, res) => {
  const data = {
    pageid: "clients"
  }
  res.render('clients.html', data)
}

