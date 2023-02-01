import { Controller, Get, Param, Post, Body, Put, Redirect, Req } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { ExampleService } from './example.service';
import { Example } from './interfaces/example.interface';

@Controller('example')
export class ExampleController {
  constructor(private exampleService: ExampleService) {}

  @ApiOperation({ summary: '모든 Example 조회하기', description: 'ㅎㅎㅎ' })
  @Get('all')
  async findAll(): Promise<Example[]> {
    return this.exampleService.findAll();
  }

  @ApiOperation({ summary: 'id로 Example 조회하기' })
  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number): Promise<Example> {
    return this.exampleService.findOneById(id);
  }

  @ApiOperation({ summary: 'Example 생성하기' })
  @Post()
  async create(@Body() createCatDto: CreateExampleDto): Promise<Example> {
    return this.exampleService.create(createCatDto);
  }

  @ApiOperation({ summary: 'Example 수정하기' })
  @Put(':id')
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateCatDto: UpdateExampleDto,
  ): Promise<Example> {
    return this.exampleService.update(id, updateCatDto);
  }
}
