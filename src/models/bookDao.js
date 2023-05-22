const { dataSource } = require("../../dataSource");
const BookEntity = require("../entity/bookEntity");

const getBookById = async (bookId) => {
  try {
    const bookRepository = dataSource.getRepository(BookEntity);

    console.log(bookRepository);
    console.log("---------1------------");

    console.log("---------2------------");
    const book = await bookRepository.findOne({
      where: {
        id: bookId,
      },
    });

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
