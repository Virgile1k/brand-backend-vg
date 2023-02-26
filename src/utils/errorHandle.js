const errorMessage = (errorMsge, res) => {
  res.status(500).json({
    messag: errorMsge,
  });
};
export default errorMessage;
