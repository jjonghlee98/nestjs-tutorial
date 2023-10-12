import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusValidOptions = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  private isStatusValid(status: any) {
    const index = this.StatusValidOptions.indexOf(status);
    return index !== -1;
  }

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options.`);
    }

    return value;
  }
}
