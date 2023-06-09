/* eslint-disable prettier/prettier */
import { Report } from 'src/api/report/entities/report.entity';
import { Task } from 'src/api/tasks/entities/task.entity';
import { User } from 'src/api/user/entities/user.entity';
import { AuditEntity } from 'src/common/db/customBaseEntites/AuditEntity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { ProjectType } from '../enums/projectTypes.enum';

@Entity('projects')
export class Project extends AuditEntity{

    @Column({ unique: true }) 
    url: string;

    @Column()
    name: string;

    @Column({ 
        type: 'enum',
        enum: ProjectType,
        default: ProjectType.OTHER
    })
    type: ProjectType;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];

  @OneToMany(() => Report, (report) => report.project)
  reports: Report[];
}