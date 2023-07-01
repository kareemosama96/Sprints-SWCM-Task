import { isValidEmail, isValidPassword } from './authenticate.js';
import bcrypt from 'bcryptjs';
const secretKey = '123';
export const users = [];
export const registration = (req, res) => {
    const { email, password, passwordRepeat } = req.body;

    // Validate the request
    if (!email || !password || !passwordRepeat) {
        return res.status(400).json({ error: 'please fill all fields' });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Wrong Email' });
    }

    if (!isValidPassword(password)) {
        return res.status(400).json({
            error: 'Password must be 8 characters : 1 capital, 1 small, and 1 special character',
        });
    }

    if (password !== passwordRepeat) {
        return res.status(400).json({ error: 'Password does not match' });
    }

    // Check if the user already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
        return res.status(409).json({ error: 'the User is already exist' });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create the new user
    const newUser = {
        email,
        password: hashedPassword,
    };

    users.push(newUser);

    res.json({ success: true });
};
