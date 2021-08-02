import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("exams")
export default class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  subjectid: number;

  @Column()
  link: string;

  @Column()
  categoryid: number;

  @Column()
  teacherid: number;
}
