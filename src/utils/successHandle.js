const succcessMessage = (res, status, msge, data) => {
  res.status(status).json({
    message: msge,
    data: data,
  });
};
export default succcessMessage;
