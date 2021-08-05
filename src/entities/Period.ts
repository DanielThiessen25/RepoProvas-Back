import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("periods")
export default class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}