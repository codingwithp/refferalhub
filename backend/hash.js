const bcrypt = require("bcryptjs");

bcrypt.hash("referral@10", 10).then((hash) => {
  console.log(hash);
});
