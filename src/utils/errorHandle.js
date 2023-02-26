const errorMessage = (res, errorMsge) => {
  res.status(500).json({
    messag: errorMsge,
  });
};
export default errorMessage;
