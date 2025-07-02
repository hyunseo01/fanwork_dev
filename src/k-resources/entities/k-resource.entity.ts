import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { InternalUser } from '../../internal-users/entities/internal-user.entity';
import { Partner } from '../../partners/entities/partner.entity';

@Entity('k_resources')
export class KResource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  providerAccountId: number;

  @Column({ nullable: true })
  managerId: number;

  @Column()
  resourceType: string;

  @Column()
  name: string;

  @Column({ length: 2 })
  countryCode: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column({ type: 'jsonb' })
  details: any;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'provider_account_id' })
  providerAccount: Partner;

  @ManyToOne(() => InternalUser, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'manager_id' })
  manager: InternalUser;
}
