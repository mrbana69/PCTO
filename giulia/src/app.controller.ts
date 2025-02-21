import { Controller, Post, Body } from '@nestjs/common';
import { ObjectA } from './dto/object-a.dto';
import { ObjectB } from './dto/object-b.dto';
import { AppService } from './app.service';

@Controller('transform')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  transform(@Body() objectA: ObjectA): ObjectB {
    return this.appService.transform(objectA);
  }
}
