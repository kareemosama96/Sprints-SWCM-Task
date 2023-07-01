export const users = [];
const secretKey = '123';
export const authenticate = (req, res) => {
    res.json({ message: 'successfully accessed' });
  };
// Middleware for authentication and authorization
export function authenticatee(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded.email;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid ' });
  }
}
// Utility functions for validation
export function isValidEmail(email) {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  export function isValidPassword(password) {
    // Password validation regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    return passwordRegex.test(password);
  }
  