import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { KResource } from '../../k-resources/entities/k-resource.entity';

@Entity('fanbase_info')
export class FanbaseInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  resourceId: number;

  @Column({ type: 'jsonb' })
  metrics: any;

  @Column()
  collectedAt: Date;

  @ManyToOne(() => KResource, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'k_resource_id' })
  kResource: KResource;
}
