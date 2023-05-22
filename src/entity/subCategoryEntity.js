const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "SubCategoryEntity",
  tableName: "sub_categories",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
    categoryId: {
      type: "int",
      name: "category_id",
    },
  },
  relations: {
    category: {
      target: "CategoryEntity",
      type: "many-to-one",
      joinColumn: {
        name: "category_id",
        referencedColumnName: "id",
      },
    },
  },
});
