import 'dotenv/config';
import { User } from 'src/api/user/entities/user.entity';
import { PasswordReset } from 'src/api/user/entities/reset-password.entity';
import { Project } from 'src/api/project/entities/project.entities';
import { Role } from 'src/api/role/entities/role.entity';
import { Task } from 'src/api/tasks/entities/task.entity';

export const config = {
  name: 'default',
  type: process.env.TYPEORM_TYPE,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT || 5432,
  username: process.env.TYPEORM_USER,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_NAME,
  synchronize: true,
  dropSchema: false,
  entities: [User, PasswordReset, Project, Role, Task],
  migrations: [process.env.TYPEORM_MIGRATIONS],
  logging: process.env.NODE_ENV === 'localhost',
  seeds: [User, Role],
};

export const configNoEntities = {
  name: 'default',
  type: process.env.TYPEORM_TYPE,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT || 5432,
  username: process.env.TYPEORM_USER,
  password: process.env.TYPEORM_PASSWORD,
  entities: [User, PasswordReset, Project, Role, Task],
  database: process.env.TYPEORM_NAME,
  migrations: [process.env.TYPEORM_MIGRATIONS],
  logging: process.env.NODE_ENV === 'localhost',
  seeds: [User, Role],
};
