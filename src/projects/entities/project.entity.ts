import { Partner } from 'src/partners/entities/partner.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { InternalUser } from '../../internal-users/entities/internal-user.entity';
import { BaseTimeEntity } from '../../common/entities/BaseTime.entity';

@Entity('projects')
export class Project extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number; // PK

  @Column()
  payerAccountId: number; // 비용 지불자 ID (Contracts 테이블로 이동 예정)

  @Column()
  title: string; // 프로젝트 제목

  @Column()
  requestType: string; // 요청 유형 (예: CONTENT_INTERVIEW)

  @Column()
  requestAt: Date; // 요청 시점

  @Column()
  status: string; // 프로젝트 상태 (진행 단계)

  @Column({ type: 'jsonb', nullable: true })
  progressCount: any; // 상태별 진행 개수 정보

  @Column({ type: 'jsonb' })
  requestDetails: any; // 요청 상세 내용

  @Column({ nullable: true })
  fileName: string; // 첨부 파일 이름

  // 이건 저장소가 아직 없으니까 일반 컬럼으로 대체..
  @Column({ nullable: true })
  fileUrl: string; // 첨부 파일 S3 주소

  @Column({ nullable: true })
  fileUploader: string; // 파일 업로더 이름 (문자열, FK 아님)

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'created_by_user_id' })
  creator: Partner; // 프로젝트 생성자

  @ManyToOne(() => InternalUser, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'internal_user_id' })
  manager: InternalUser; // 내부 담당자
}
