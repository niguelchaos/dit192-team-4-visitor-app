var userRole = {};

userRole[exports.USER = "role_user"] = 'Web application user';

exports.getRoleText = function(role) {
  if (userRole.hasOwnProperty(role)) {
    return userRole[role];
  } else {
    throw new Error('User role is unknown: ' + role);
  }
};