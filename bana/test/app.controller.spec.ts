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
    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should transform ObjectA to ObjectB', () => {
    const objectA: ObjectA = { field1: 'carlo', field2: 81, field3: 'MONTRICIANOSENZACERVELLO' }; // dati input
    const objectB: ObjectB = { field1: 'CARLO', field2: 162, field3: 90, field4: 'Burracchio_montricianosenzacervello', field5: true }; // dati input 2??
   // const serviceSpy = jest
    //  .spyOn(service, 'transform')
    //  .mockReturnValue(objectB);

    const result = controller.transform(objectA);
    console.log('Risultato: ', result);
    console.log('RisultatoA: ', objectA);
    console.log('RisultatoB: ', objectB);
    
   // expect(serviceSpy).toHaveBeenCalledWith(objectA);
    expect(result).toEqual(objectB);
    expect(result.field1).toEqual('CARLO');
    expect(result.field2).toEqual(162);
    expect(result.field3).toEqual(90);
    expect(result.field4).toEqual('Burracchio_montricianosenzacervello');
    expect(result.field5).toEqual(true);
  });
  
  // TODO: Test con valori diversi per ObjectA (fatto)
  // TODO: Test con un ObjectA vuoto (fatto)
});
