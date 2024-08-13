const jwt = require("jsonwebtoken");
const users = require("../../models/user");
const models = require("../../models/index");

const secret = "some_random_password"; // Use a strong secret in production

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await models.User.findOne({ where: { username } });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, secret, {
    expiresIn: "1h",
  });

  test_token = token;

  res.json({ token });
};

exports.protectedRoute = (req, res) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  const actual_token = token.replace("Bearer ", "");

  jwt.verify(actual_token, secret, (err, decoded) => {
    if (err) {
      console.log(token);
      console.log(secret);
      return res.status(500).json({ message: "Failed to authenticate token" });
    }

    res.json({ message: "Welcome to the protected route!", user: decoded });
  });
};
