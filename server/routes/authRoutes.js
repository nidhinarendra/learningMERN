const passport = require('passport');

module.exports = app => {
  //here google is a string which is internally specified by passport googlestartegy
  //which says whenever u come acroos the string google, go to the function googlestrategy
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
