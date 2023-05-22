const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "CategoryEntity",
  tableName: "categories",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
  },
});
