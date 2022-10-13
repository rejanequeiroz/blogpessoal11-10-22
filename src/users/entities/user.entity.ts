import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"tb_users"})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({length: 100 })
  email: string;

  @Column({length: 50})
  password: string;

}
