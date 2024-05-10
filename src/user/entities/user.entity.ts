import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 500, comment: '头像地址', default: '' })
  public avatar: string;

  @Column({ type: 'varchar', length: 500, comment: '用户邮箱' })
  public email: string;

  @Column({ type: 'varchar', length: 500, comment: '用户手机', default: '' })
  public phone: string;

  @Column({ type: 'varchar', length: 500, comment: '用户名称', default: '' })
  public nickName: string;

  @Column({ type: 'varchar', length: 500, comment: '用户性别', default: '0' })
  public gender: string;

  @Column({ type: 'varchar', length: 500, comment: '用户年龄', default: '' })
  public age: string;

  @Exclude({ toPlainOnly: true })
  @Column({
    type: 'varchar',
    length: 500,
    comment: '用户加密密码',
    default: '',
  })
  public password: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'createdDate',
    comment: '创建时间',
  })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updatedDate',
    comment: '更新时间',
  })
  updatedDate: Date;
}
