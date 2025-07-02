import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

export enum PartnerEntityType {
  ORGANIZATION = 'Organizations',
  INDIVIDUAL = 'Individuals',
}

export enum PartnerStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum RegistrationType {
  INTERNAL = 'INTERNAL',
  APPLIED = 'APPLIED',
}

@Entity('partners')
export class Partner {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @Column({ type: 'enum', enum: PartnerEntityType })
  entityType: PartnerEntityType;

  @Column({ length: 20 })
  displayName: string;

  @Column({ type: 'enum', enum: PartnerStatus })
  status: PartnerStatus;

  @Column({ nullable: true, length: 20 })
  businessRegistrationNumber: string;

  @Column({ type: 'jsonb', nullable: true })
  primaryContacts: any;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'jsonb', nullable: true })
  details: any;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'simple-array' })
  accountRoles: string[];

  @Column({ default: false })
  isKeyPlayer: boolean;

  @Column({ length: 2 })
  countryCode: string;

  @Column({ type: 'enum', enum: RegistrationType })
  registrationType: RegistrationType;

  @Column({ type: 'timestamp', nullable: true })
  lastLoginAt: Date;

  @Column({ nullable: true })
  website: string;
}
