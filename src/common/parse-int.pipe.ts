import { BadRequestException, PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string> {
  async transform(value: string) {
    const intValue = parseInt(value, 10);
    if (isNaN(intValue)) {
      throw new BadRequestException('Failed to parse parameter to int');
    }
    return intValue;
  }
}
