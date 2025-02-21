import { Injectable } from '@nestjs/common';
import { ObjectA } from './dto/object-a.dto';
import { ObjectB } from './dto/object-b.dto';

 

@Injectable()
export class AppService {

  transform(objectA: ObjectA): ObjectB {
    const objectB = new ObjectB();

    // Trasformazione testuale
    objectB.field1 = objectA.field1.trim().toUpperCase();
    // toglie gli spazi all'inizio e fine e manda in maiuscolo

    // Logica condizionale
    if (objectA.field2 > 10) {
      objectB.field2 = objectA.field2 * 2;
    } else {
      objectB.field2 = objectA.field2 - 5;
    }
    //si

    // Operazione matematica complessa
    objectB.field3 = Math.round(Math.sqrt(Math.abs(objectA.field2)) * 10); 
    // (rad quadrata del valore assoluto )*10 e arrotondata

    // Aggiunta di un nuovo campo con una logica di trasformazione
    objectB.field4 = objectA.field3 ? `Prefix_${objectA.field3.toLowerCase()}` : 'Default_Value'; 
    //se il field3 di objA esiste, allora minuscolo+prefisso, altrimenti valore default

    // Logica basata su più campi
    objectB.field5 = objectA.field2 > 50 && objectA.field3?.length > 5;
    //somma logica se     objectA.field2 > 50    &&    objectA.field3(se esiste idk), più lungo di 5 caratteri

    return objectB;

  }

}