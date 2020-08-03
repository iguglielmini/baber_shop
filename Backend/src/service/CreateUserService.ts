import { getRepository } from "typeorm";
import User from "../models/User";

interface Request {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({ name, email, password }: Request): Promise<User> {
        const usersRespoitory = getRepository(User);

        const checkUserExists = await usersRespoitory.findOne({
            where: { email },
        });

        if (checkUserExists) {
            throw new Error("Email address already used.");
        }

        const user = usersRespoitory.create({ name, email, password });

        await usersRespoitory.save(user);

        return user;
    }
}

export default CreateUserService;
