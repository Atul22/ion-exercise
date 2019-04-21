const users = [
  { username: "gatsby", password: "12345" },
  { username: "jon_snow", password: "12345" },
  { username: "arya_stark", password: "12345" },
  { username: "mesut_ozil", password: "12345" }
];

function getUser(username) {
  let matched_user = null;
  users.map(user => {
    if (user.username === username) {
      matched_user = user;
    }
  });
  return matched_user;
}

exports.getUser = getUser;
