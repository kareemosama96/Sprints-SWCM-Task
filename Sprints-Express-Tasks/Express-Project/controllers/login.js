import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Customers = [{
  "email":"qwerty@gmail.com",
  "password":"123456aA@"
}];
const secretKey = "123";
export const login = (req, res) => {
  const { email, password } = req.body;

  // Validate the request
  if (!email || !password) {
    return res.status(400).json({ error: "Please enter Email and Password" });
  }

  // Find the user by email
  const user = Customers.find((user) => user.email === email);
  if (!user) {
    return res.status(404).json({ error: "Wrong Email" });
  }

  // Check the password
  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: "Wrong password" });
  }

  // Generate and return the token
  const token = jwt.sign({ email: user.email }, secretKey);
  res.json({ email: user.email, password: user.password, token });
};
