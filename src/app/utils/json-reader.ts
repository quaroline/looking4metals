import en from '../../assets/json/en.json';
import pt from '../../assets/json/pt.json';

import { Product } from '../models/product';

export abstract class JsonReader {
    private static getData(): any {
        let ukFlag = document.querySelector('#en') as HTMLElement;

        if (ukFlag.classList.contains('selected'))
            return en;

        return pt;
    }

    public static getProducts(): Product[] {
        let object: Product[] = [];

        Object.assign(object, this.getData().products);

        return object;
    }
}