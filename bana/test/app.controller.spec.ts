import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';
import { ObjectA } from '../src/dto/object-a.dto';
import { ObjectB } from '../src/dto/object-b.dto';
import { ConsoleLogger } from '@nestjs/common';
import { appendFile } from 'fs';

describe('AppController', () => {
  let controller: AppController;
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();

    controller = module.get<AppController>(AppController);
    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should transform ObjectA to ObjectB', () => {
    const users = [{ name: 'Dio' }, { name: 'Cane' }];
    const transformed = service.transformObjects(users, user => user.name);  
    console.log(transformed);

    const valoriACazzo = ['69', 'falso', '2001-09-11'];
      console.log(service.convertDataTypes(valoriACazzo, 'number'));
      console.log(service.convertDataTypes(valoriACazzo, 'boolean'));
      console.log(service.convertDataTypes(valoriACazzo, 'date'));
  });
  
  // TODO: Test con valori diversi per ObjectA (fatto)
  // TODO: Test con un ObjectA vuoto (fatto)
});
