import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { instanceToPlain } from 'class-transformer';
import { UserType } from '../../types/user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  // 根据业务区分用什么字段校验账号唯一性
  private async checkCreateUserAccountLabel(label: string, value: string) {
    if (await this.userRepo.findOneBy({ [label]: value })) {
      console.log(value, 'value');
      throw new HttpException('该账户已被注册', HttpStatus.BAD_REQUEST);
    }
  }

  async registerUser(user: RegisterUserDto): Promise<UserType> {
    await this.checkCreateUserAccountLabel('email', user?.email);
    const res = this.userRepo.create(user);
    const createdUser = await this.userRepo.save(res);
    return instanceToPlain(createdUser) as UserType;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
