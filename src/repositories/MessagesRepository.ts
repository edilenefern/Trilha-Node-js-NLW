import { Entity, EntityRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";

@EntityRepository(Message)
class messagesRepository extends Repository<Message> {}

export { messagesRepository };