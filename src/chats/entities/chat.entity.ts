import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Project } from '../../projects/entities/project.entity';

@Entity('chats')
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Project, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @Column({ name: 'commenter_id', type: 'bigint', nullable: true })
  commenterId: number | null;

  @Column({
    name: 'commenter_type',
    type: 'enum',
    enum: ['INTERNAL', 'ACCOUNT'],
    nullable: true,
  })
  commenterType: 'INTERNAL' | 'ACCOUNT';

  @Column({ type: 'text' })
  body: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
