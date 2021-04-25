import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {
  async create( email: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    // Select * from settings where username = "username" limit 1;
    const userExists = await usersRepository.findOne({
        email
    });

    if (userExists) {
        return userExists;
    }


    const user = usersRepository.create({
     email
    });

    await usersRepository.save(user);

    return user;
  }
}

export { UsersService };
