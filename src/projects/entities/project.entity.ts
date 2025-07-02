import { Partner } from 'src/partners/entities/partner.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { InternalUser } from '../../internal-users/entities/internal-user.entity';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdByUserId: number;

  @Column()
  payerAccountId: number;

  @Column()
  title: string;

  @Column()
  requestType: string;

  @Column()
  requestAt: Date;

  @Column()
  status: string;

  @Column({ type: 'jsonb', nullable: true })
  progressCount: any;

  @Column({ type: 'jsonb' })
  requestDetails: any;

  @Column({ nullable: true })
  fileName: string;

  @Column({ nullable: true })
  fileUrl: string;

  @Column({ nullable: true })
  fileUploader: string;

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'created_by_user_id' })
  creator: Partner;

  @ManyToOne(() => InternalUser, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'internal_user_id' })
  manager: InternalUser;
}
