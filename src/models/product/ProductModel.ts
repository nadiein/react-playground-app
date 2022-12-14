import { GameModel } from '../game/GameModel';


enum ProductType {
    V75 = 'V75',
    V86 = 'V86',
    GS75 = 'GS75'
}

class ProductModel {
    public type:ProductType;
    public productDetails:ProductDetailsModel[] = [];
}

class ProductDetailsModel {
    public id:string;
    public startTime:string;
    public track:ProductTrackModel = new ProductTrackModel();
    public games:GameModel = new GameModel();
}

class ProductTrackModel {
    public id:number;
    public name:string;
}


export {
    ProductType,
    ProductModel,
    ProductDetailsModel,
    ProductTrackModel
};
