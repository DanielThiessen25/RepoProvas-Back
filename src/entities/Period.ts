import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("categories")
export default class Period {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}