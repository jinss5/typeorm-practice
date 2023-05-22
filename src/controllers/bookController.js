const bookService = require("../services/bookService");
const { catchAsync } = require("../middlewares/error");

const getBookById = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const userId = req.userId;

  if (!bookId) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;
    throw error;
  }

  const book = await bookService.getBookById(bookId, userId);

  return res.status(200).json(book);
});

module.exports = {
  getBookById,
};
