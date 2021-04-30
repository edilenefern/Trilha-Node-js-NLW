import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository";


interface IMessageCreate {
    admin_id?: string;
    text: string;
    user_id: string;
}


// Quando tiver mais de um método,criar um atributo dentro da nossa classe e 
// todos os métodos dentro da classe vai chamar esse atributo
class MessagesService {
    private messagesRepository: Repository<Message>;

    constructor(){
        this.messagesRepository = getCustomRepository(MessagesRepository);
    }

    async create({ admin_id, text, user_id }: IMessageCreate) {

        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id,
        });

        await this.messagesRepository.save(message);
        
        return message;
    }

    async listByUser(user_id: string) {
        const messagesRepository = getCustomRepository(MessagesRepository);

        const list = await this.messagesRepository.find({
          where:{  user_id },
          relations: ["user"],
        });
// class MessagesService {
//     async create({ admin_id, text, user_id }: IMessageCreate) {
//         const messagesRepository = getCustomRepository(MessagesRepository);

//         const message = messagesRepository.create({
//             admin_id,
//             text,
//             user_id,
//         });

//         await messagesRepository.save(message);
        
//         return message;
//     }

//     async listByUser(user_id: string) {
//         const messagesRepository = getCustomRepository(MessagesRepository);

//         const list = await messagesRepository.find({
//           where:{  user_id },
//           relations: ["user"],
//         });

        return list;
    }
}

export { MessagesService };