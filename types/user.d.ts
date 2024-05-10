/**
 * 用户数据定义
 */
export interface UserType {
  id: string;
  avatar?: string;
  email?: string;
  phone?: string;
  nickName: string;
  gender?: string;
  age?: string;
  password?: string;
  createdDate: Date;
  updatedDate: Date;
}
