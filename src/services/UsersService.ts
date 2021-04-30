import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";


// Quando tiver mais de um método,criar um atributo dentro da nossa classe e 
// todos os métodos dentro da classe vai chamar esse atributo

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create( email: string) {
   
    // Verificar se usuário existe

    const userExists = await  this.usersRepository.findOne({
        email
    });

    // Se existir,retorna user
    if (userExists) {
        return userExists;
    }


    const user = this.usersRepository.create({
     email
    });

    await this.usersRepository.save(user);

    // Se não existir,salvar no DB
    return user;
  }
}

export { UsersService };

// class UsersService {
//   async create( email: string) {
//     const usersRepository = getCustomRepository(UsersRepository);
//     // Verificar se usuário existe

//     const userExists = await usersRepository.findOne({
//         email
//     });

    // Se existir,retorna user
    // if (userExists) {
    //     return userExists;
    // }


    // const user = usersRepository.create({
    //  email
    // });

    // await usersRepository.save(user);

    // Se não existir,salvar no DB