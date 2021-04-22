const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done({ message: "Incorrect username." }, false, {
            message: "Incorrect username.",
          });
        }
        if (!user.validPassword(password)) {
          return done({ message: "Incorrect Password" }, false, {
            message: "Incorrect password.",
          });
        }
        user.password = undefined;
        return done(null, user);
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user._id);
  // if you use Model.id as your idAttribute maybe you'd want
  // done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
