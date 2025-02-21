import { Injectable } from '@nestjs/common';
import { ObjectA } from './dto/object-a.dto';
import { ObjectB } from './dto/object-b.dto';

 

@Injectable()
export class AppService {
  transform(objectA: ObjectA): ObjectB {
    const objectB = new ObjectB();

    // Trasformazione testuale da minuscolo a MAIUSCOLO
    objectB.field1 = objectA.field1.trim().toUpperCase();

    // Logica condizionale
    // se il numero è maggiore di 10
    if (objectA.field2 > 10) {
      objectB.field2 = objectA.field2 * 2; // num*2
    } else {
      objectB.field2 = objectA.field2 - 5; // num-5
    }

    // Operazione matematica complessa (arrotondamento della 'radice quadrata del numero * 10')
    objectB.field3 = Math.round(Math.sqrt(Math.abs(objectA.field2)) * 10);

    // Aggiunta di un nuovo campo con una logica di trasformazione
    objectB.field4 = objectA.field3 ? `Burracchio_${objectA.field3.toLowerCase()}` : 'Default_Value';

    // Logica basata su più campi
    // in questo esempio, se ho capito bene, fa un controllo sui campi 2 e 3, dove nel campo 2
    // se è maggiore di 50 , allora la lunghezza del campo 3 deve essere maggiore di 5, altrimenti lo darà per FALSO!
    objectB.field5 = objectA.field2 > 50 && objectA.field3?.length > 5;
    // in questa parte il valore objectB ritorna booleano (TRUE or FALSE)
    return objectB;
  }
}





/*import { Injectable } from '@nestjs/common';
import { ObjectA } from './dto/object-a.dto';
import { ObjectB } from './dto/object-b.dto';

@Injectable()
export class AppService {
  transform(objectA: ObjectA): ObjectB {
    // Logica di trasformazione da ObjectA a ObjectB
    const objectB = new ObjectB();
    objectB.field1 = objectA.field1.toUpperCase(); // Esempio di trasformazione
    objectB.field2 = objectA.field2 -7; // Altro esempio
    objectB.field3 = objectA.field2 +7
    return objectB;
  }
}*/
