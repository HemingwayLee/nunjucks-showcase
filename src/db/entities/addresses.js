module.exports = {
  name: "Addresses",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    address: {
      type: "varchar"
    },
    zipcode: {
      type: "varchar"
    },
    createdAt: {
      type: "float"
    }
  }
}
