import { IsEmail, Length, MinLength } from "class-validator";
import {
  Entity as TOEntity,
  Column,
  Index,
  BeforeInsert,
  OneToMany,
} from "typeorm";
import bcrypt from "bcryptjs";
import { Exclude } from "class-transformer";
import Entity from "./Entity";
import Post from "./Post";
import Vote from "./Vote";

@TOEntity("users")
export default class User extends Entity {
  constructor(user: Partial<User>) {
    super();
    Object.assign(this, user);
  }

  @Index()
  @MinLength(1, { message: "用户名不得少于1个字符" })
  @Column({ unique: true })
  username: string;

  @Index()
  @IsEmail(undefined, { message: "必须填入有效的邮箱地址" })
  @Length(1, 255, { message: "邮箱地址为空" })
  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  @MinLength(6, { message: "密码不得小于6个字符" })
  password: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Vote, (vote) => vote.user)
  votes: Vote[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 6);
  }
}
