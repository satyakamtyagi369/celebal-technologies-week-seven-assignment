exports.getProtectedData = (req, res) => {
  res.json({ message: `Hello ${req.user.username}, this is protected data.` });
};
