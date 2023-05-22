const { EntitySchema } = require("typeorm");

const BookEntity = new EntitySchema({
  name: "BookEntity",
  tableName: "books",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    title: {
      type: "varchar",
      length: 500,
    },
    subtitle: {
      type: "varchar",
      length: 500,
    },
    author: {
      type: "varchar",
      length: 100,
    },
    issueDate: {
      type: "varchar",
      name: "issue_date",
      length: 100,
    },
    description: {
      type: "text",
    },
    thumbnail: {
      type: "varchar",
      length: 2000,
    },
    price: {
      type: "decimal",
      precision: 10,
      scale: 2,
    },
    quantity: {
      type: "int",
    },
    subCategoryId: {
      type: "int",
      name: "sub_category_id",
    },
    isSubscribe: {
      type: "tinyint",
      default: false,
    },
    createdAt: {
      type: "timestamp",
      name: "created_at",
      default: () => "CURRENT_TIMESTAMP",
    },
    updatedAt: {
      type: "timestamp",
      name: "updated_at",
      default: null,
      onUpdate: "CURRENT_TIMESTAMP",
    },
  },
  relations: {
    subCategory: {
      target: "SubCategoryEntity",
      type: "many-to-one",
      joinColumn: {
        name: "sub_category_id",
        referencedColumnName: "id",
      },
    },
  },
});

module.exports = BookEntity;
