import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
@Entity("user")
export class UserEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;
    @Column()
    fullname: string;
    @Column({ unique: true })
    mobile: string;
    @Column()
    password: string;
    @Column()
    city: string;
}