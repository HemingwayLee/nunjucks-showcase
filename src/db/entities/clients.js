module.exports = {
  name: "Clients",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    name: {
      type: "varchar"
    },
    createdAt: {
      type: "float"
    }
  }
}
