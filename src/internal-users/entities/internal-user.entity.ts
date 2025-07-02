import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

export enum InternalUserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  OPERATOR = 'OPERATOR',
}

export enum InternalUserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

@Entity('internal_users')
export class InternalUser {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 20 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @Column({ type: 'enum', enum: InternalUserStatus })
  status: InternalUserStatus;

  @Column({ type: 'enum', enum: InternalUserRole })
  role: InternalUserRole;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  lastLoginAt: Date;
}
