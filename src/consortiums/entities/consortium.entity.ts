import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Partner } from '../../partners/entities/partner.entity';

@Entity('consortiums')
export class Consortium {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdByUserId: number;

  @Column()
  payerAccountId: number;

  @Column()
  title: string;

  @Column()
  requestAt: Date;

  @Column({ type: 'jsonb' })
  participantsList: any;

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'created_by_user_id' })
  creator: Partner;

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'payer_account_id' })
  payerAccount: Partner;
}
