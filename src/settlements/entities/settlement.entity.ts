import { Consortium } from 'src/consortiums/entities/consortium.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Contract } from '../../contracts/entities/contract.entity';
import { Partner } from '../../partners/entities/partner.entity';

@Entity('settlements')
export class Settlement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  consortiumId: number;

  @Column()
  contractId: number;

  @Column()
  description: string;

  @Column()
  type: string;

  @Column()
  sourceAccountId: number;

  @Column()
  destinationAccountId: number;

  @Column()
  amountDue: number;

  @Column()
  currency: string;

  @Column()
  totalDue: number;

  @Column()
  dueDate: Date;

  @Column()
  status: string;

  @Column({ nullable: true })
  updatedAt: Date;

  @Column({ type: 'jsonb', nullable: true })
  transactionDate: any;

  @Column({ nullable: true })
  notes: string;

  @Column({ default: false })
  isApproved: boolean;

  @ManyToOne(() => Consortium, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'consortium_id' })
  consortium: Consortium;

  @ManyToOne(() => Contract, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'contract_id' })
  contract: Contract;

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'source_account_id' })
  sourceAccount: Partner;

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'destination_account_id' })
  destinationAccount: Partner;
}
