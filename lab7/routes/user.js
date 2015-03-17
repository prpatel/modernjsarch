
/*
 * GET users listing.
 */

exports.list = function(req, res){
  var numUsers = 10 + 20;
  res.send("number of users: " + numUsers);
};
