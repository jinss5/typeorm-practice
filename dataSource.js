const typeorm = require("typeorm");

const BookEntity = require("./src/entity/bookEntity");
const SubCategoryEntity = require("./src/entity/subCategoryEntity");
const CategoryEntity = require("./src/entity/categoryEntity");

const entities = [BookEntity, SubCategoryEntity, CategoryEntity];

const dataSource = new typeorm.DataSource({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: process.env.DB_SYNCHRONIZE,
  entities: entities,
});

module.exports = { dataSource };
