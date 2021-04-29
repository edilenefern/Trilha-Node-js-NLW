import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
    @PrimaryColumn()
    id:string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User };

// Comamdos:
// Para criar a migration: yarn typeorm migration:create -n nome da tabela
// Para executar a migration: yarn typeorm migration:run
// Para executar a aplicação: yarn dev