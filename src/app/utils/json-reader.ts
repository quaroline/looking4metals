import en from '../../assets/json/en.json';
import pt from '../../assets/json/pt.json';

import { Product } from '../models/product';

export class JsonReader {
    constructor(language: string) {
        this.data = language == 'pt' ? pt : en;
    }

    data: any = null;

    public getProducts(): Product[] {
        let object: Product[] = [];

        Object.assign(object, this.data.products);

        return object;
    }
}