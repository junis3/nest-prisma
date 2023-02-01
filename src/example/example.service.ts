import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../providers/prisma/prisma.service';
import { Example } from './interfaces/example.interface';

@Injectable()
export class ExampleService {
  constructor(private prisma: PrismaService, private config: ConfigService) {}

  async create(catCreateInput: Prisma.CatCreateInput): Promise<Example> {
    return this.prisma.cat.create({
      data: catCreateInput,
    });
  }

  async update(id: number, catUpdateInput: Prisma.CatUpdateInput): Promise<Example> {
    return this.prisma.cat.update({ where: { id }, data: catUpdateInput });
  }

  async findAll(): Promise<Example[]> {
    return this.prisma.cat.findMany();
  }

  async findOneById(id: number): Promise<Example> {
    return this.prisma.cat.findUnique({
      where: {
        id,
      },
    });
  }
}
