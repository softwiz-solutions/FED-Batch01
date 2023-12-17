const verifyUser = (req, res, next) => {
  console.log("req.body", req.body);
  if (req.body.id) {
    next();
  } else {
    res.json({
      success: false,
      Message: "Req.body not found",
    });
  }
};

module.exports = verifyUser;
