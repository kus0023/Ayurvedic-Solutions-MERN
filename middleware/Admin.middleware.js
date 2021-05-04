module.exports = {
  verifyAdminToken: () => {
    return (req, res, next) => {
      const user = req.session.user;
      if (!user.isValidAdmin()) {
        return res.status(401).json({ message: "You are not admin." });
      }
      next();
    };
  },
};
