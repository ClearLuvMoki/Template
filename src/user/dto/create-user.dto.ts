import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterUserDto {
  avatar: string;

  @MinLength(1, { message: '用户账号至少1个字符' })
  @IsString({ message: '用户名称类型错误（正确类型为：String）' })
  @IsNotEmpty({ message: '用户昵称不能为空!' })
  nickName: string;

  @IsString({ message: '用户手机号类型错误（正确类型为：String）' })
  // @IsNotEmpty({ message: '用户手机号不能为空!' })
  phone: string;

  @MinLength(5, { message: '用户密码至少5个字符' })
  @IsString({ message: '用户密码类型错误（正确类型为：String）' })
  @IsNotEmpty({ message: '用户密码不能为空!' })
  password: string;

  @IsIn(['0', '1'], { message: '用户年龄参数不正确' })
  @IsString({ message: '用户性别类型错误（正确类型为：String）' })
  gender: '0' | '1';

  @IsString({ message: '用户年龄类型错误（正确类型为：String）' })
  age: string;

  @IsEmail({}, { message: '请输入正确的邮箱地址' })
  @IsString({ message: '用户邮箱类型错误（正确类型为：String）' })
  // @IsNotEmpty({ message: '用户邮箱不能为空' })
  email: string;

  // @MinLength(5, { message: '邮箱验证码至少5个字符' })
  // @IsString({ message: '邮箱验证码错误（正确类型为：String）' })
  // @IsOptional({ message: '邮箱验证码不能为空' })
  // verifyCode: string;
}
