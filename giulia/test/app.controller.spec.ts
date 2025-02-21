import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';

describe('AppController', () => {
  let controller: AppController;
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();

    service = module.get<AppService>(AppService);
    controller = module.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should filter with the key', () => {
    const elenco=[
      {name:'alessio', surname: 'verdi', age: 11},
      {name:'mario', surname: 'rossi', age: 13},
      {name:'luigi', surname: 'bianchi', age: 11}
    ];

    const resultcalcolato=[
      {name:'alessio', surname: 'verdi', age: 11},
      {name:'luigi', surname: 'bianchi', age: 11}]

    const result = service.filterByCondition(elenco,'age', 11);
    const i=1; 

    console.log(result);
    console.log(resultcalcolato);

    expect(result).toEqual(resultcalcolato);
   
  });

  it('should transform an array to sm else ', () => {
    const inizio=[
      {name:'alessio', surname: 'verdi', age: 11},
      {name:'mario', surname: 'rossi', age: 13},
      {name:'luigi', surname: 'bianchi', age: 11}
    ];

    let fine=['ALESSIO','MARIO','LUIGI']
    const result = service.transformObjects(inizio, persona => (persona.name.toUpperCase()));
   

    console.log(inizio);
    console.log(fine);

    expect(result).toEqual(fine);
   
  });