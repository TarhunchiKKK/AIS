import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class UserPost {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: true, default: null })
    management: string | null;

    @Column({ nullable: true, default: null })
    department: string | null;

    @Column({ nullable: true, default: null })
    post: string | null;

    @OneToOne(() => User, (user) => user.post)
    user: User;
}
