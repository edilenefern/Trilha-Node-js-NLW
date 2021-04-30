import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";
interface ISettingsCreate {
  chat: boolean;
  username: string;
}

// Quando tiver mais de um método,criar um atributo dentro da nossa classe e 
// todos os métodos dentro da classe vai chamar esse atributo

class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }

  async create({ chat, username }: ISettingsCreate) {
  // Select * from settings where username = "username" limit 1;
    const userAlreadyExists = await this.settingsRepository.findOne({
        username,
    });

    if (userAlreadyExists) {
        throw new Error("User already exists!");
    }


    const settings = this.settingsRepository.create({
      chat,
      username,
    });

    await this.settingsRepository.save(settings);

    return settings;
  }
}



export { SettingsService };



// class SettingsService {
//   async create({ chat, username }: ISettingsCreate) {
//     const settingsRepository = getCustomRepository(SettingsRepository);

//     // Select * from settings where username = "username" limit 1;
//     const userAlreadyExists = await settingsRepository.findOne({
//         username,
//     });

//     if (userAlreadyExists) {
//         throw new Error("User already exists!");
//     }


//     const settings = settingsRepository.create({
//       chat,
//       username,
//     });

//     await settingsRepository.save(settings);

 
