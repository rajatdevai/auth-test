import { usermodel } from "../models/user.model.js";

export const fetchUsers = async () => {
    return await usermodel.find();
};

export const newUser = async (userData) => {
    return await usermodel.create(userData);
};