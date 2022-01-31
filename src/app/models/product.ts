export class Product {
    constructor(title: string, description: string, icon: string) {
        this.title = title;
        this.description = description;
        this.icon = icon;
    }

    public title: string;
    public description: string;
    public icon: string;
}