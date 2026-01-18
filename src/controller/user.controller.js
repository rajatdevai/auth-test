import { newUser, fetchUsers } from '../services/user.service.js';

export const getUsers = async (req, res, next) => {
    try {
        const userData = await fetchUsers();
        return res.status(200).json(userData);
    } catch (error) {
        return next(error);
    }
};

export const createUser = async (req, res, next) => {
    try {
        const createdData = await newUser(req.body);
        return res.status(201).json(createdData);
    } catch (error) {
        return next(error);
    }
};


