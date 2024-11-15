import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { UserRoles } from "src/roles/enums/user-roles.enum";
import { UserBlockingStatus } from "./user-blocking-status.entity";
import { UserPost } from "./user-post.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column()
    role: UserRoles;

    @OneToOne(() => UserBlockingStatus, (blockingStatus) => blockingStatus.user)
    @JoinColumn()
    blockingStatus: UserBlockingStatus;

    @OneToOne(() => UserPost, (post) => post.user)
    @JoinColumn()
    post: UserPost;
}
