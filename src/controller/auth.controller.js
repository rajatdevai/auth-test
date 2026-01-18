import { usermodel } from '../models/user.model.js';

export const registerUser = async (req, res, next) => {
    try {
        const { email, password, name, age } = req.body;
        if (!email || !password || !name || !age) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await usermodel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = new usermodel(req.body);
        await user.save();

        const token = user.generateAuthToken();

        return res.status(201).json({ user, token });
    } catch (error) {
        return next(error);
    }
};

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await usermodel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = user.generateAuthToken();
        return res.status(200).json({ user, token });
    } catch (error) {
        return next(error);
    }
};   