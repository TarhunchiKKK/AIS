import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserStatus } from "../enums/user-status.enum";
import { User } from "./user.entity";

@Entity()
export class UserBlockingStatus {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    status: UserStatus;

    @Column({ nullable: true, default: null })
    blokingTime: Date | null;

    @Column({ nullable: true, default: null })
    reason: string | null;

    @OneToOne(() => User, (user) => user.blockingStatus)
    user: User;
}
