import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';
import { ObjectA } from '../src/dto/object-a.dto';
import { ObjectB } from '../src/dto/object-b.dto';

describe('AppController', () => {
  let controller: AppController;
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();

    controller = module.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should trasform pt1', () => {
    const A1 : ObjectA = {field1:'    tanti spazi   ', field2: -4, field3:''};
    const B1: ObjectB = {field1:'TANTI SPAZI', field2: -9, field3:20, field4:'Default_Value', field5: false};
    
    const result = controller.transform(A1);

    console.log(B1.field4);
    expect(B1).toEqual(result);
   
  });

  it('should transform pt2', () => {
    const A2 : ObjectA = {field1:' PrOvAaA ', field2: 100, field3:'UPPERCASE OG'};
    const B2: ObjectB = {field1:'PROVAAA', field2: 200, field3: 100, field4:'Prefix_uppercase og', field5: true};
    
    const result2 = controller.transform(A2);

    console.log(B2.field4);
    expect(B2).toEqual(result2);
   
  });


  it('should not fail', () =>{
    const n2=3;
    const n3=3;
    expect(n2).toEqual(n3);
  })

  // TO DO: Test con valori diversi per ObjectA
  // TO DO: Test con un ObjectA vuoto
});
