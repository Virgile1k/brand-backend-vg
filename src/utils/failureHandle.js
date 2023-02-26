const failureMesage = (res, status, failuremsg) => {
  res.status(status).json({
    message: failuremsg,
  });
};
export default failureMesage;
