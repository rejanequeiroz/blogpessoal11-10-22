import { Inject, Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ){}

  async listar(): Promise<User[]>{
    return this.userRepository.find();
  }
  /* 
  private users: User[] = []; 
  create(createUserDto: CreateUserDto) {
   const IdMaxAtual = this.users[this.users.length - 1]?. id || 0;
    const id = IdMaxAtual + 1;
    const user = {
      id,
      ...createUserDto,
    };
    this.users.push(user)
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const index = this.users.findIndex((user) => user.id === id)

    return this.users[index]
    //return This action returns a #${id} user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id)

    const newUser = {
      ...user,
      ...updateUserDto,
    }

    const index = this.users.findIndex((user) => user.id === id)

    this.users[index] = newUser

    return newUser;
  }

  remove(id: number) {
    const index = this.users.findIndex((user) => user.id === id)

    if (index === -1) {
      throw new NotFoundException(`Usuário com o id ${id} não encontrado`)  // NotFoundException Exceção quando algo não for encontrado
    }

    this.users.splice(index, 1)


    return `This action removes a #${id} user`;
  } */
}


// try catch - tenta pegar erros com JS puro