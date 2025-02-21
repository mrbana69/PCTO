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

  /**
   * Filtra un array di oggetti in base a una condizione specifica
   * @param items - Array di oggetti
   * @param key - Chiave su cui filtrare
   * @param value - Valore da confrontare
   * @returns Array filtrato
   */
  filterByCondition<T extends Record<string, any>>(items: T[], key: keyof T, value: any): T[] {
    return items.filter(item => item[key] === value);
  }

  /**
   * Trasforma un array di oggetti in una nuova struttura
   * @param items - Array di oggetti
   * @param transformFn - Funzione che trasforma un oggetto
   * @returns Array trasformato
   */
  transformObjects<T, U>(items: T[], transformFn: (item: T) => U): U[] {
    return items.map(transformFn);
  }

  /**
   * Converte i tipi di dati di un array
   * @param items - Array di valori misti (stringhe, numeri, date, booleani)
   * @param type - Tipo di conversione desiderata ('number', 'string', 'boolean', 'date')
   * @returns Array con valori convertiti
   */
  convertDataTypes(items: any[], type: 'number' | 'string' | 'boolean' | 'date'): any[] {
    return items.map(item => {
      switch (type) {
        case 'number':
          return Number(item);
        case 'string':
          return String(item);
        case 'boolean':
          return Boolean(item);
        case 'date':
          return new Date(item);
        default:
          return item;
      }
    });
  }

}
