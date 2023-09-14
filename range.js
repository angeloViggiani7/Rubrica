module.exports = (req, res, next) => {
  res.header("Content-Range", "comments 0-10/10");
  next();
};
