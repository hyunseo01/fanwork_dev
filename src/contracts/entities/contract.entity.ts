import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Project } from 'src/projects/entities/project.entity';
import { Partner } from 'src/partners/entities/partner.entity';
import { InternalUser } from 'src/internal-users/entities/internal-user.entity';

export enum ContractType {
  ONE_TIME_PROJECT = 'ONE_TIME_PROJECT',
  RETAINER = 'RETAINER',
  IP_ROYALTY = 'IP_ROYALTY',
}

export enum ContractStatus {
  DRAFT = 'DRAFT',
  SENT_TO_PARTNER = 'SENT_TO_PARTNER',
  SIGNED = 'SIGNED',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  TERMINATED = 'TERMINATED',
}

@Entity('contracts')
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ticket_id' })
  projectId: number;

  @ManyToOne(() => Project, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ticket_id' })
  project: Project;

  @Column({ name: 'contract_title', length: 255 })
  contractTitle: string;

  @Column({ name: 'primary_account_id' })
  primaryAccountId: number;

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'primary_account_id' })
  primaryAccount: Partner;

  @Column({ name: 'payer_account_id' })
  payerAccountId: number;

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'payer_account_id' })
  payerAccount: Partner;

  @Column({ name: 'provider_account_id' })
  providerAccountId: number;

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'provider_account_id' })
  providerAccount: Partner;

  @Column({
    name: 'contract_type',
    type: 'enum',
    enum: ContractType,
  })
  contractType: ContractType;

  @Column({
    name: 'contract_status',
    type: 'enum',
    enum: ContractStatus,
  })
  contractStatus: ContractStatus;

  @Column({
    name: 'total_value_usd',
    type: 'decimal',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  totalValueUsd: number;

  @Column({ length: 3 })
  currency: string;

  @Column({ name: 'contract_date', type: 'date', nullable: true })
  contractDate: Date;

  @Column({ name: 'effective_start_date', type: 'date' })
  effectiveStartDate: Date;

  @Column({ name: 'effective_end_date', type: 'date' })
  effectiveEndDate: Date;

  @Column({ name: 'contract_document_url', length: 255 })
  contractDocumentUrl: string;

  @Column({ name: 'created_by' })
  createdById: number;

  @ManyToOne(() => InternalUser, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'created_by' })
  createdBy: InternalUser;
}
