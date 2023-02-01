import { ApiProperty } from '@nestjs/swagger';

export class UpdateExampleDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
