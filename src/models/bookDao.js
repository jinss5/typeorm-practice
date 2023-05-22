const { dataSource } = require("./dataSource");

const getBookById = async (bookId) => {
  try {
    const bookRepository = dataSource.getRepository("BookEntity");
    console.log("---------1------------");
    console.log(bookRepository);
    console.log("---------2------------");
    const book = await bookRepository.findOne(bookId);
    console.log("---------3------------");
    return book;
  } catch (error) {
    console.log(error.message);
    error = new Error("DATABASE_CONNECTION_ERROR");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  getBookById,
};
