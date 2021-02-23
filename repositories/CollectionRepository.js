import Repository, { baseUrl } from './Repository_';

class CollectionRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getCollections(payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/collections?${query}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    // START HOME PAGE
    async getMalls_Home() {

        const reponse = await Repository.get(`${baseUrl}/common/home/info`)
            .then(response => {
                return response.data.data;
                // return data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }



    async getProduct_Home() {
        const reponse = await Repository.get(`${baseUrl}/common/home/products`)
            .then(response => {
                return response.data.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    // END HOME PAGE

        // dynamic sections 

        async getCollectionsfortest() {

            const reponse = await Repository.get(`https://check-chack-v2.herokuapp.com/api/v2/ecommerce/common/home/products`)
                .then(response => {
                    return response.data;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
            return reponse;
                
            
        }
    
        // end dynamic section 


    // get  all products in specific section  by mall id &  product section title

    async getAllProductsSection( sectionTitle,  limit, offset){
      
        const reponse = await Repository.get(`${baseUrl}/common/home/products-by-title?title=${sectionTitle}&limit=${limit}&offset=${offset}`)
        .then(response => {
            return response.data;
        })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    
        }


    // api to returns all home top stores  rating 
    async getAllHomeTopStores( limit, offset){

        const reponse = await Repository.get(`${baseUrl}/common/stores-top-rate?limit=${limit}&offset=${offset}`)
        .then(response => {
            return response.data;
        })
        .catch(error => ({ error: JSON.stringify(error) }));
    return reponse;

    }

    async getCollectionshomemalls() {

        // const reponse = await Repository.get(`https://portal.chickchack.net/api/v1/ecommerce/common/product-offer`)
        //     .then(response => {
        var data = [
            {
                "title": "malls",
                "id": "malls",
                "malls": [
                    {
                        "id": 3787,
                        "name": "Dubai",
                        "image": "http://localhost:1337/uploads/Untitled12.png",
                    },
                    {
                        "id": 814,
                        "name": "Amman",
                        "image": "http://localhost:1337/uploads/Untitled.png",
                    },
                    // {
                    //     "id": 3787,
                    //     "name": "Dubai",
                    //     "image": "http://localhost:1337/uploads/Untitled12.png",
                    // },
                    // {
                    //     "id": 814,
                    //     "name": "Amman",
                    //     "image": "http://localhost:1337/uploads/Untitled.png",
                    // },

                ]
            },
            {
                "title": "Top selling",
                "id": "top_selling",
                "products": [
                    {
                        "id": 3787,
                        "name": "budy lotion",
                        "price": 20,
                        "isOffer": true,
                        "offerRatio": 10,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604318677622modelPreview.png",
                        "details": "{\"color\":\"[]\",\"size\":\"[\\\"50ml\\\",\\\"150ml\\\"]\",\"details\":\"cream  am m m m m\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 20,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1606299769028cerave-moisturizing-cream-lotion-dry-to-very-dry-skin-236ml.jpg",
                        "shopImage256": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1606299769237cerave-moisturizing-cream-lotion-dry-to-very-dry-skin-236ml.jpg",
                        "shopImage512": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1606299769407cerave-moisturizing-cream-lotion-dry-to-very-dry-skin-236ml.jpg",
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 287,
                        "storeProductCategoryId": 291,
                        "libraryId": 362,
                        "trader.id": 287,
                        "trader.storeName": "travel",
                        "trader.email": "travel@travel.com",
                        "trader.mobile": "+2470508745214",
                        "trader.img": null,
                        "trader.country": "AC",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-11-25T10:11:31.459Z",
                        "trader.updatedAt": "2020-11-25T10:11:31.459Z",
                        "trader.storeTypeId": 121,
                        "trader.mallId": 15
                    },
                    {
                        "id": 3161,
                        "name": "order",
                        "price": 10,
                        "isOffer": true,
                        "offerRatio": 10,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1605709090581modelPreview.png",
                        "details": "{\"color\":\"[\\\"#000\\\"]\",\"size\":\"[\\\"s\\\",\\\"m\\\"]\",\"details\":\"10\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.amazonaws.com/product/1605953833343EQvwF9jWAAYwXHJ.jpg",
                        "shopImage256": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605983806862EQvwF9jWAAYwXHJ.jpg",
                        "shopImage512": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605983810591EQvwF9jWAAYwXHJ.jpg",
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 252,
                        "storeProductCategoryId": 230,
                        "libraryId": 967,
                        "trader.id": 252,
                        "trader.storeName": "Jolychick.dubai",
                        "trader.email": "Jolychick.dubai@gmail.com",
                        "trader.mobile": "+972597228965",
                        "trader.img": null,
                        "trader.country": "IL",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-11-10T13:30:34.306Z",
                        "trader.updatedAt": "2020-11-10T13:30:34.306Z",
                        "trader.storeTypeId": 121,
                        "trader.mallId": 15
                    },
                    {
                        "id": 1871,
                        "name": "order",
                        "price": 10,
                        "isOffer": true,
                        "offerRatio": 110,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1605013818372modelPreview.png",
                        "details": "{\"color\":\"[\\\"#FFA500\\\"]\",\"size\":\"[\\\"10\\\"]\",\"details\":\"orderorder order orderorder\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605607757108aa%20-%20Copy.PNG",
                        "shopImage256": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605978652921aa%2520-%2520Copy.PNG",
                        "shopImage512": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605978653428aa%2520-%2520Copy.PNG",
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 125,
                        "storeProductCategoryId": 129,
                        "libraryId": 739,
                        "trader.id": 125,
                        "trader.storeName": "amin12",
                        "trader.email": "aminking140@gmail.com",
                        "trader.mobile": "+970595140334",
                        "trader.img": "https://chickchack.s3.eu-west-2.amazonaws.com/logo/1606311815694asd.PNG",
                        "trader.country": "PS",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T11:14:58.184Z",
                        "trader.updatedAt": "2020-12-07T13:48:49.481Z",
                        "trader.storeTypeId": 47,
                        "trader.mallId": 1
                    },
                    {
                        "id": 814,
                        "name": "منتج",
                        "price": 10,
                        "isOffer": true,
                        "offerRatio": 10,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604318631105modelPreview.png",
                        "details": "{\"storage\":\"10 gb\",\"color\":\"[\\\"#000\\\"]\",\"size\":\"[\\\"s\\\",\\\"l\\\"]\",\"details\":\"منتج\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1604256521981aa.PNG",
                        "shopImage256": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605968483402aa.PNG",
                        "shopImage512": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605968484070aa.PNG",
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 125,
                        "storeProductCategoryId": 80,
                        "libraryId": 434,
                        "trader.id": 125,
                        "trader.storeName": "amin12",
                        "trader.email": "aminking140@gmail.com",
                        "trader.mobile": "+970595140334",
                        "trader.img": "https://chickchack.s3.eu-west-2.amazonaws.com/logo/1606311815694asd.PNG",
                        "trader.country": "PS",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T11:14:58.184Z",
                        "trader.updatedAt": "2020-12-07T13:48:49.481Z",
                        "trader.storeTypeId": 47,
                        "trader.mallId": 1
                    },
                    {
                        "id": 752,
                        "name": "منتج",
                        "price": 10,
                        "isOffer": true,
                        "offerRatio": 10,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604318632616modelPreview.png",
                        "details": "{\"storage\":\"10 gb\",\"color\":\"[\\\"#000\\\"]\",\"size\":\"[\\\"s\\\",\\\"l\\\"]\",\"details\":\"منتج\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 100,
                        "showInStore": true,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1604166264709aa.PNG",
                        "shopImage256": null,
                        "shopImage512": null,
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 125,
                        "storeProductCategoryId": 53,
                        "libraryId": 377,
                        "trader.id": 125,
                        "trader.storeName": "amin12",
                        "trader.email": "aminking140@gmail.com",
                        "trader.mobile": "+970595140334",
                        "trader.img": "https://chickchack.s3.eu-west-2.amazonaws.com/logo/1606311815694asd.PNG",
                        "trader.country": "PS",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T11:14:58.184Z",
                        "trader.updatedAt": "2020-12-07T13:48:49.481Z",
                        "trader.storeTypeId": 47,
                        "trader.mallId": 1
                    },
                    {
                        "id": 750,
                        "name": "كندرة بتجنن ",
                        "price": 40,
                        "isOffer": true,
                        "offerRatio": 20,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604318728424modelPreview.png",
                        "details": "{\"storage\":\"2 gb\",\"color\":\"[\\\"#823838\\\"]\",\"size\":\"[\\\"m\\\",\\\"xl\\\",\\\"2x\\\"]\",\"details\":\"كندرة \\nواحد تنيت ثلاثة اربعط  \\nكندرة لونها بني كندرة لونها اسود \\n\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1603796268541816b7c68-a26e-457c-8b25-976ca42ef3b3.jfif",
                        "shopImage256": null,
                        "shopImage512": null,
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 170,
                        "storeProductCategoryId": 86,
                        "libraryId": 205,
                        "trader.id": 170,
                        "trader.storeName": "kadu",
                        "trader.email": "kadu@live.com",
                        "trader.mobile": "+9710501234567",
                        "trader.img": null,
                        "trader.country": "AE",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-10-13T13:04:24.967Z",
                        "trader.updatedAt": "2020-10-13T13:04:24.967Z",
                        "trader.storeTypeId": 44,
                        "trader.mallId": 1
                    },
                    {
                        "id": 39,
                        "name": "عربة اطفال ",
                        "price": 200,
                        "isOffer": true,
                        "offerRatio": 25,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604148608115modelPreview.png",
                        "details": "{\"storage\":\"5 gb\",\"color\":\"[\\\"#15D015\\\",\\\"#D7E201\\\",\\\"#E20A0A\\\"]\",\"size\":\"[\\\"s\\\",\\\"l\\\"]\",\"details\":\"عربة لجر الاطفال \\n\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 20,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/16013034369711167857_107.jpg",
                        "shopImage256": null,
                        "shopImage512": null,
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 129,
                        "storeProductCategoryId": 56,
                        "libraryId": 22,
                        "trader.id": 129,
                        "trader.storeName": "LEGO",
                        "trader.email": "omrei@hotmail.com",
                        "trader.mobile": "+9620504323456",
                        "trader.img": null,
                        "trader.country": "JO",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T14:15:12.921Z",
                        "trader.updatedAt": "2020-09-28T14:15:12.921Z",
                        "trader.storeTypeId": 49,
                        "trader.mallId": 1
                    },
                    {
                        "id": 37,
                        "name": "omrei1",
                        "price": 21,
                        "isOffer": true,
                        "offerRatio": 30,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604148608115modelPreview.png",
                        "details": "{\"storage\":\"5 gb\",\"color\":\"[\\\"#A92E2E\\\",\\\"#00FF00\\\"]\",\"size\":\"[\\\"s\\\",\\\"l\\\",\\\"m\\\",\\\"2x\\\"]\",\"details\":\"ffffffffffff fffffffff ffffffff\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 5,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/16012947873661372311_101.jpg",
                        "shopImage256": null,
                        "shopImage512": null,
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 122,
                        "storeProductCategoryId": 49,
                        "libraryId": 22,
                        "trader.id": 122,
                        "trader.storeName": "toysrus",
                        "trader.email": "omrei1990@gmail.com",
                        "trader.mobile": "+9710501394033",
                        "trader.img": null,
                        "trader.country": "AE",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T10:26:45.933Z",
                        "trader.updatedAt": "2020-09-28T10:26:45.933Z",
                        "trader.storeTypeId": 49,
                        "trader.mallId": 1
                    }
                ]
            },
            {
                "title": "New arrives",
                "id": "New_arrives",
                "products": [

                    {
                        "id": 3162,
                        "name": "order",
                        "price": 4,
                        "isOffer": true,
                        "offerRatio": 10,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1605691214348modelPreview.png",
                        "details": "{\"color\":\"[\\\"#000\\\"]\",\"size\":\"[\\\"s\\\",\\\"m\\\"]\",\"details\":\"order\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.amazonaws.com/product/1605954608663amin.PNG",
                        "shopImage256": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605983812095amin.PNG",
                        "shopImage512": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605983812816amin.PNG",
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 252,
                        "storeProductCategoryId": 230,
                        "libraryId": 929,
                        "trader.id": 252,
                        "trader.storeName": "Jolychick.dubai",
                        "trader.email": "Jolychick.dubai@gmail.com",
                        "trader.mobile": "+972597228965",
                        "trader.img": null,
                        "trader.country": "IL",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-11-10T13:30:34.306Z",
                        "trader.updatedAt": "2020-11-10T13:30:34.306Z",
                        "trader.storeTypeId": 121,
                        "trader.mallId": 15
                    },
                    {
                        "id": 3161,
                        "name": "order",
                        "price": 10,
                        "isOffer": true,
                        "offerRatio": 10,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1605709090581modelPreview.png",
                        "details": "{\"color\":\"[\\\"#000\\\"]\",\"size\":\"[\\\"s\\\",\\\"m\\\"]\",\"details\":\"10\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.amazonaws.com/product/1605953833343EQvwF9jWAAYwXHJ.jpg",
                        "shopImage256": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605983806862EQvwF9jWAAYwXHJ.jpg",
                        "shopImage512": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605983810591EQvwF9jWAAYwXHJ.jpg",
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 252,
                        "storeProductCategoryId": 230,
                        "libraryId": 967,
                        "trader.id": 252,
                        "trader.storeName": "Jolychick.dubai",
                        "trader.email": "Jolychick.dubai@gmail.com",
                        "trader.mobile": "+972597228965",
                        "trader.img": null,
                        "trader.country": "IL",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-11-10T13:30:34.306Z",
                        "trader.updatedAt": "2020-11-10T13:30:34.306Z",
                        "trader.storeTypeId": 121,
                        "trader.mallId": 15
                    },
                    {
                        "id": 1871,
                        "name": "order",
                        "price": 10,
                        "isOffer": true,
                        "offerRatio": 110,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1605013818372modelPreview.png",
                        "details": "{\"color\":\"[\\\"#FFA500\\\"]\",\"size\":\"[\\\"10\\\"]\",\"details\":\"orderorder order orderorder\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605607757108aa%20-%20Copy.PNG",
                        "shopImage256": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605978652921aa%2520-%2520Copy.PNG",
                        "shopImage512": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605978653428aa%2520-%2520Copy.PNG",
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 125,
                        "storeProductCategoryId": 129,
                        "libraryId": 739,
                        "trader.id": 125,
                        "trader.storeName": "amin12",
                        "trader.email": "aminking140@gmail.com",
                        "trader.mobile": "+970595140334",
                        "trader.img": "https://chickchack.s3.eu-west-2.amazonaws.com/logo/1606311815694asd.PNG",
                        "trader.country": "PS",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T11:14:58.184Z",
                        "trader.updatedAt": "2020-12-07T13:48:49.481Z",
                        "trader.storeTypeId": 47,
                        "trader.mallId": 1
                    },
                    {
                        "id": 814,
                        "name": "منتج",
                        "price": 10,
                        "isOffer": true,
                        "offerRatio": 10,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604318631105modelPreview.png",
                        "details": "{\"storage\":\"10 gb\",\"color\":\"[\\\"#000\\\"]\",\"size\":\"[\\\"s\\\",\\\"l\\\"]\",\"details\":\"منتج\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1604256521981aa.PNG",
                        "shopImage256": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605968483402aa.PNG",
                        "shopImage512": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605968484070aa.PNG",
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 125,
                        "storeProductCategoryId": 80,
                        "libraryId": 434,
                        "trader.id": 125,
                        "trader.storeName": "amin12",
                        "trader.email": "aminking140@gmail.com",
                        "trader.mobile": "+970595140334",
                        "trader.img": "https://chickchack.s3.eu-west-2.amazonaws.com/logo/1606311815694asd.PNG",
                        "trader.country": "PS",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T11:14:58.184Z",
                        "trader.updatedAt": "2020-12-07T13:48:49.481Z",
                        "trader.storeTypeId": 47,
                        "trader.mallId": 1
                    },
                    {
                        "id": 752,
                        "name": "منتج",
                        "price": 10,
                        "isOffer": true,
                        "offerRatio": 10,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604318632616modelPreview.png",
                        "details": "{\"storage\":\"10 gb\",\"color\":\"[\\\"#000\\\"]\",\"size\":\"[\\\"s\\\",\\\"l\\\"]\",\"details\":\"منتج\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 100,
                        "showInStore": true,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1604166264709aa.PNG",
                        "shopImage256": null,
                        "shopImage512": null,
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 125,
                        "storeProductCategoryId": 53,
                        "libraryId": 377,
                        "trader.id": 125,
                        "trader.storeName": "amin12",
                        "trader.email": "aminking140@gmail.com",
                        "trader.mobile": "+970595140334",
                        "trader.img": "https://chickchack.s3.eu-west-2.amazonaws.com/logo/1606311815694asd.PNG",
                        "trader.country": "PS",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T11:14:58.184Z",
                        "trader.updatedAt": "2020-12-07T13:48:49.481Z",
                        "trader.storeTypeId": 47,
                        "trader.mallId": 1
                    },
                    {
                        "id": 750,
                        "name": "كندرة بتجنن ",
                        "price": 40,
                        "isOffer": true,
                        "offerRatio": 20,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604318728424modelPreview.png",
                        "details": "{\"storage\":\"2 gb\",\"color\":\"[\\\"#823838\\\"]\",\"size\":\"[\\\"m\\\",\\\"xl\\\",\\\"2x\\\"]\",\"details\":\"كندرة \\nواحد تنيت ثلاثة اربعط  \\nكندرة لونها بني كندرة لونها اسود \\n\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1603796268541816b7c68-a26e-457c-8b25-976ca42ef3b3.jfif",
                        "shopImage256": null,
                        "shopImage512": null,
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 170,
                        "storeProductCategoryId": 86,
                        "libraryId": 205,
                        "trader.id": 170,
                        "trader.storeName": "kadu",
                        "trader.email": "kadu@live.com",
                        "trader.mobile": "+9710501234567",
                        "trader.img": null,
                        "trader.country": "AE",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-10-13T13:04:24.967Z",
                        "trader.updatedAt": "2020-10-13T13:04:24.967Z",
                        "trader.storeTypeId": 44,
                        "trader.mallId": 1
                    },
                    {
                        "id": 39,
                        "name": "عربة اطفال ",
                        "price": 200,
                        "isOffer": true,
                        "offerRatio": 25,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604148608115modelPreview.png",
                        "details": "{\"storage\":\"5 gb\",\"color\":\"[\\\"#15D015\\\",\\\"#D7E201\\\",\\\"#E20A0A\\\"]\",\"size\":\"[\\\"s\\\",\\\"l\\\"]\",\"details\":\"عربة لجر الاطفال \\n\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 20,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/16013034369711167857_107.jpg",
                        "shopImage256": null,
                        "shopImage512": null,
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 129,
                        "storeProductCategoryId": 56,
                        "libraryId": 22,
                        "trader.id": 129,
                        "trader.storeName": "LEGO",
                        "trader.email": "omrei@hotmail.com",
                        "trader.mobile": "+9620504323456",
                        "trader.img": null,
                        "trader.country": "JO",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T14:15:12.921Z",
                        "trader.updatedAt": "2020-09-28T14:15:12.921Z",
                        "trader.storeTypeId": 49,
                        "trader.mallId": 1
                    },
                    {
                        "id": 37,
                        "name": "omrei1",
                        "price": 21,
                        "isOffer": true,
                        "offerRatio": 30,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604148608115modelPreview.png",
                        "details": "{\"storage\":\"5 gb\",\"color\":\"[\\\"#A92E2E\\\",\\\"#00FF00\\\"]\",\"size\":\"[\\\"s\\\",\\\"l\\\",\\\"m\\\",\\\"2x\\\"]\",\"details\":\"ffffffffffff fffffffff ffffffff\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 5,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/16012947873661372311_101.jpg",
                        "shopImage256": null,
                        "shopImage512": null,
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 122,
                        "storeProductCategoryId": 49,
                        "libraryId": 22,
                        "trader.id": 122,
                        "trader.storeName": "toysrus",
                        "trader.email": "omrei1990@gmail.com",
                        "trader.mobile": "+9710501394033",
                        "trader.img": null,
                        "trader.country": "AE",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T10:26:45.933Z",
                        "trader.updatedAt": "2020-09-28T10:26:45.933Z",
                        "trader.storeTypeId": 49,
                        "trader.mallId": 1
                    }
                ]
            },
        ]
        // return response.data.data;
        return data;
        // })
        //     .catch(error => ({ error: JSON.stringify(error) }));
        // return reponse;
    }

    async getCollectionsMallInfo(payload) {

        // const reponse = await Repository.get(`https://portal.chickchack.net/api/v1/ecommerce/common/product-offer`)
        //     .then(response => {
        var data = [
            {
                "title": "story",
                "id": "story",
                "storys": [
                    {
                        "id": 2,
                        "name": "Zara",
                        "image": "http://localhost:1337/uploads/zara.jpg",
                    },
                    {
                        "id": 3,
                        "name": "Wristwatch",
                        "image": "http://localhost:1337/uploads/ebe0db165640431d9c8fd683f3258663.jpg",
                    },
                    {
                        "id": 2,
                        "name": "Zara",
                        "image": "http://localhost:1337/uploads/zara.jpg",
                    },
                    {
                        "id": 3,
                        "name": "Wristwatch",
                        "image": "http://localhost:1337/uploads/ebe0db165640431d9c8fd683f3258663.jpg",
                    },
                    {
                        "id": 2,
                        "name": "Zara",
                        "image": "http://localhost:1337/uploads/zara.jpg",
                    },
                    {
                        "id": 3,
                        "name": "Wristwatch",
                        "image": "http://localhost:1337/uploads/ebe0db165640431d9c8fd683f3258663.jpg",
                    },
                    {
                        "id": 2,
                        "name": "Zara",
                        "image": "http://localhost:1337/uploads/zara.jpg",
                    },
                    {
                        "id": 3,
                        "name": "Wristwatch",
                        "image": "http://localhost:1337/uploads/ebe0db165640431d9c8fd683f3258663.jpg",
                    },
                ]
            },
            {
                "title": "Top selling",
                "id": "top_selling",
                "products": [
                    {
                        "id": 3787,
                        "name": "budy lotion",
                        "price": 20,
                        "isOffer": true,
                        "offerRatio": 10,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604318677622modelPreview.png",
                        "details": "{\"color\":\"[]\",\"size\":\"[\\\"50ml\\\",\\\"150ml\\\"]\",\"details\":\"cream  am m m m m\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 20,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1606299769028cerave-moisturizing-cream-lotion-dry-to-very-dry-skin-236ml.jpg",
                        "shopImage256": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1606299769237cerave-moisturizing-cream-lotion-dry-to-very-dry-skin-236ml.jpg",
                        "shopImage512": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1606299769407cerave-moisturizing-cream-lotion-dry-to-very-dry-skin-236ml.jpg",
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 287,
                        "storeProductCategoryId": 291,
                        "libraryId": 362,
                        "trader.id": 287,
                        "trader.storeName": "travel",
                        "trader.email": "travel@travel.com",
                        "trader.mobile": "+2470508745214",
                        "trader.img": null,
                        "trader.country": "AC",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-11-25T10:11:31.459Z",
                        "trader.updatedAt": "2020-11-25T10:11:31.459Z",
                        "trader.storeTypeId": 121,
                        "trader.mallId": 15
                    },
                    {
                        "id": 3161,
                        "name": "order",
                        "price": 10,
                        "isOffer": true,
                        "offerRatio": 10,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1605709090581modelPreview.png",
                        "details": "{\"color\":\"[\\\"#000\\\"]\",\"size\":\"[\\\"s\\\",\\\"m\\\"]\",\"details\":\"10\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.amazonaws.com/product/1605953833343EQvwF9jWAAYwXHJ.jpg",
                        "shopImage256": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605983806862EQvwF9jWAAYwXHJ.jpg",
                        "shopImage512": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605983810591EQvwF9jWAAYwXHJ.jpg",
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 252,
                        "storeProductCategoryId": 230,
                        "libraryId": 967,
                        "trader.id": 252,
                        "trader.storeName": "Jolychick.dubai",
                        "trader.email": "Jolychick.dubai@gmail.com",
                        "trader.mobile": "+972597228965",
                        "trader.img": null,
                        "trader.country": "IL",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-11-10T13:30:34.306Z",
                        "trader.updatedAt": "2020-11-10T13:30:34.306Z",
                        "trader.storeTypeId": 121,
                        "trader.mallId": 15
                    },
                    {
                        "id": 1871,
                        "name": "order",
                        "price": 10,
                        "isOffer": true,
                        "offerRatio": 110,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1605013818372modelPreview.png",
                        "details": "{\"color\":\"[\\\"#FFA500\\\"]\",\"size\":\"[\\\"10\\\"]\",\"details\":\"orderorder order orderorder\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605607757108aa%20-%20Copy.PNG",
                        "shopImage256": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605978652921aa%2520-%2520Copy.PNG",
                        "shopImage512": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605978653428aa%2520-%2520Copy.PNG",
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 125,
                        "storeProductCategoryId": 129,
                        "libraryId": 739,
                        "trader.id": 125,
                        "trader.storeName": "amin12",
                        "trader.email": "aminking140@gmail.com",
                        "trader.mobile": "+970595140334",
                        "trader.img": "https://chickchack.s3.eu-west-2.amazonaws.com/logo/1606311815694asd.PNG",
                        "trader.country": "PS",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T11:14:58.184Z",
                        "trader.updatedAt": "2020-12-07T13:48:49.481Z",
                        "trader.storeTypeId": 47,
                        "trader.mallId": 1
                    },
                    {
                        "id": 814,
                        "name": "منتج",
                        "price": 10,
                        "isOffer": true,
                        "offerRatio": 10,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604318631105modelPreview.png",
                        "details": "{\"storage\":\"10 gb\",\"color\":\"[\\\"#000\\\"]\",\"size\":\"[\\\"s\\\",\\\"l\\\"]\",\"details\":\"منتج\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1604256521981aa.PNG",
                        "shopImage256": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605968483402aa.PNG",
                        "shopImage512": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605968484070aa.PNG",
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 125,
                        "storeProductCategoryId": 80,
                        "libraryId": 434,
                        "trader.id": 125,
                        "trader.storeName": "amin12",
                        "trader.email": "aminking140@gmail.com",
                        "trader.mobile": "+970595140334",
                        "trader.img": "https://chickchack.s3.eu-west-2.amazonaws.com/logo/1606311815694asd.PNG",
                        "trader.country": "PS",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T11:14:58.184Z",
                        "trader.updatedAt": "2020-12-07T13:48:49.481Z",
                        "trader.storeTypeId": 47,
                        "trader.mallId": 1
                    },
                    {
                        "id": 752,
                        "name": "منتج",
                        "price": 10,
                        "isOffer": true,
                        "offerRatio": 10,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604318632616modelPreview.png",
                        "details": "{\"storage\":\"10 gb\",\"color\":\"[\\\"#000\\\"]\",\"size\":\"[\\\"s\\\",\\\"l\\\"]\",\"details\":\"منتج\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 100,
                        "showInStore": true,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1604166264709aa.PNG",
                        "shopImage256": null,
                        "shopImage512": null,
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 125,
                        "storeProductCategoryId": 53,
                        "libraryId": 377,
                        "trader.id": 125,
                        "trader.storeName": "amin12",
                        "trader.email": "aminking140@gmail.com",
                        "trader.mobile": "+970595140334",
                        "trader.img": "https://chickchack.s3.eu-west-2.amazonaws.com/logo/1606311815694asd.PNG",
                        "trader.country": "PS",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T11:14:58.184Z",
                        "trader.updatedAt": "2020-12-07T13:48:49.481Z",
                        "trader.storeTypeId": 47,
                        "trader.mallId": 1
                    },
                    {
                        "id": 750,
                        "name": "كندرة بتجنن ",
                        "price": 40,
                        "isOffer": true,
                        "offerRatio": 20,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604318728424modelPreview.png",
                        "details": "{\"storage\":\"2 gb\",\"color\":\"[\\\"#823838\\\"]\",\"size\":\"[\\\"m\\\",\\\"xl\\\",\\\"2x\\\"]\",\"details\":\"كندرة \\nواحد تنيت ثلاثة اربعط  \\nكندرة لونها بني كندرة لونها اسود \\n\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1603796268541816b7c68-a26e-457c-8b25-976ca42ef3b3.jfif",
                        "shopImage256": null,
                        "shopImage512": null,
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 170,
                        "storeProductCategoryId": 86,
                        "libraryId": 205,
                        "trader.id": 170,
                        "trader.storeName": "kadu",
                        "trader.email": "kadu@live.com",
                        "trader.mobile": "+9710501234567",
                        "trader.img": null,
                        "trader.country": "AE",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-10-13T13:04:24.967Z",
                        "trader.updatedAt": "2020-10-13T13:04:24.967Z",
                        "trader.storeTypeId": 44,
                        "trader.mallId": 1
                    },
                    {
                        "id": 39,
                        "name": "عربة اطفال ",
                        "price": 200,
                        "isOffer": true,
                        "offerRatio": 25,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604148608115modelPreview.png",
                        "details": "{\"storage\":\"5 gb\",\"color\":\"[\\\"#15D015\\\",\\\"#D7E201\\\",\\\"#E20A0A\\\"]\",\"size\":\"[\\\"s\\\",\\\"l\\\"]\",\"details\":\"عربة لجر الاطفال \\n\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 20,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/16013034369711167857_107.jpg",
                        "shopImage256": null,
                        "shopImage512": null,
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 129,
                        "storeProductCategoryId": 56,
                        "libraryId": 22,
                        "trader.id": 129,
                        "trader.storeName": "LEGO",
                        "trader.email": "omrei@hotmail.com",
                        "trader.mobile": "+9620504323456",
                        "trader.img": null,
                        "trader.country": "JO",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T14:15:12.921Z",
                        "trader.updatedAt": "2020-09-28T14:15:12.921Z",
                        "trader.storeTypeId": 49,
                        "trader.mallId": 1
                    },
                    {
                        "id": 37,
                        "name": "omrei1",
                        "price": 21,
                        "isOffer": true,
                        "offerRatio": 30,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604148608115modelPreview.png",
                        "details": "{\"storage\":\"5 gb\",\"color\":\"[\\\"#A92E2E\\\",\\\"#00FF00\\\"]\",\"size\":\"[\\\"s\\\",\\\"l\\\",\\\"m\\\",\\\"2x\\\"]\",\"details\":\"ffffffffffff fffffffff ffffffff\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 5,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/16012947873661372311_101.jpg",
                        "shopImage256": null,
                        "shopImage512": null,
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 122,
                        "storeProductCategoryId": 49,
                        "libraryId": 22,
                        "trader.id": 122,
                        "trader.storeName": "toysrus",
                        "trader.email": "omrei1990@gmail.com",
                        "trader.mobile": "+9710501394033",
                        "trader.img": null,
                        "trader.country": "AE",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T10:26:45.933Z",
                        "trader.updatedAt": "2020-09-28T10:26:45.933Z",
                        "trader.storeTypeId": 49,
                        "trader.mallId": 1
                    }
                ]
            },
            {
                "title": "New arrives",
                "id": "New_arrives",
                "products": [

                    {
                        "id": 3162,
                        "name": "order",
                        "price": 4,
                        "isOffer": true,
                        "offerRatio": 10,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1605691214348modelPreview.png",
                        "details": "{\"color\":\"[\\\"#000\\\"]\",\"size\":\"[\\\"s\\\",\\\"m\\\"]\",\"details\":\"order\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.amazonaws.com/product/1605954608663amin.PNG",
                        "shopImage256": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605983812095amin.PNG",
                        "shopImage512": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605983812816amin.PNG",
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 252,
                        "storeProductCategoryId": 230,
                        "libraryId": 929,
                        "trader.id": 252,
                        "trader.storeName": "Jolychick.dubai",
                        "trader.email": "Jolychick.dubai@gmail.com",
                        "trader.mobile": "+972597228965",
                        "trader.img": null,
                        "trader.country": "IL",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-11-10T13:30:34.306Z",
                        "trader.updatedAt": "2020-11-10T13:30:34.306Z",
                        "trader.storeTypeId": 121,
                        "trader.mallId": 15
                    },
                    {
                        "id": 3161,
                        "name": "order",
                        "price": 10,
                        "isOffer": true,
                        "offerRatio": 10,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1605709090581modelPreview.png",
                        "details": "{\"color\":\"[\\\"#000\\\"]\",\"size\":\"[\\\"s\\\",\\\"m\\\"]\",\"details\":\"10\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.amazonaws.com/product/1605953833343EQvwF9jWAAYwXHJ.jpg",
                        "shopImage256": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605983806862EQvwF9jWAAYwXHJ.jpg",
                        "shopImage512": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605983810591EQvwF9jWAAYwXHJ.jpg",
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 252,
                        "storeProductCategoryId": 230,
                        "libraryId": 967,
                        "trader.id": 252,
                        "trader.storeName": "Jolychick.dubai",
                        "trader.email": "Jolychick.dubai@gmail.com",
                        "trader.mobile": "+972597228965",
                        "trader.img": null,
                        "trader.country": "IL",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-11-10T13:30:34.306Z",
                        "trader.updatedAt": "2020-11-10T13:30:34.306Z",
                        "trader.storeTypeId": 121,
                        "trader.mallId": 15
                    },
                    {
                        "id": 1871,
                        "name": "order",
                        "price": 10,
                        "isOffer": true,
                        "offerRatio": 110,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1605013818372modelPreview.png",
                        "details": "{\"color\":\"[\\\"#FFA500\\\"]\",\"size\":\"[\\\"10\\\"]\",\"details\":\"orderorder order orderorder\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605607757108aa%20-%20Copy.PNG",
                        "shopImage256": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605978652921aa%2520-%2520Copy.PNG",
                        "shopImage512": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605978653428aa%2520-%2520Copy.PNG",
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 125,
                        "storeProductCategoryId": 129,
                        "libraryId": 739,
                        "trader.id": 125,
                        "trader.storeName": "amin12",
                        "trader.email": "aminking140@gmail.com",
                        "trader.mobile": "+970595140334",
                        "trader.img": "https://chickchack.s3.eu-west-2.amazonaws.com/logo/1606311815694asd.PNG",
                        "trader.country": "PS",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T11:14:58.184Z",
                        "trader.updatedAt": "2020-12-07T13:48:49.481Z",
                        "trader.storeTypeId": 47,
                        "trader.mallId": 1
                    },
                    {
                        "id": 814,
                        "name": "منتج",
                        "price": 10,
                        "isOffer": true,
                        "offerRatio": 10,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604318631105modelPreview.png",
                        "details": "{\"storage\":\"10 gb\",\"color\":\"[\\\"#000\\\"]\",\"size\":\"[\\\"s\\\",\\\"l\\\"]\",\"details\":\"منتج\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1604256521981aa.PNG",
                        "shopImage256": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605968483402aa.PNG",
                        "shopImage512": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1605968484070aa.PNG",
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 125,
                        "storeProductCategoryId": 80,
                        "libraryId": 434,
                        "trader.id": 125,
                        "trader.storeName": "amin12",
                        "trader.email": "aminking140@gmail.com",
                        "trader.mobile": "+970595140334",
                        "trader.img": "https://chickchack.s3.eu-west-2.amazonaws.com/logo/1606311815694asd.PNG",
                        "trader.country": "PS",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T11:14:58.184Z",
                        "trader.updatedAt": "2020-12-07T13:48:49.481Z",
                        "trader.storeTypeId": 47,
                        "trader.mallId": 1
                    },
                    {
                        "id": 752,
                        "name": "منتج",
                        "price": 10,
                        "isOffer": true,
                        "offerRatio": 10,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604318632616modelPreview.png",
                        "details": "{\"storage\":\"10 gb\",\"color\":\"[\\\"#000\\\"]\",\"size\":\"[\\\"s\\\",\\\"l\\\"]\",\"details\":\"منتج\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 100,
                        "showInStore": true,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1604166264709aa.PNG",
                        "shopImage256": null,
                        "shopImage512": null,
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 125,
                        "storeProductCategoryId": 53,
                        "libraryId": 377,
                        "trader.id": 125,
                        "trader.storeName": "amin12",
                        "trader.email": "aminking140@gmail.com",
                        "trader.mobile": "+970595140334",
                        "trader.img": "https://chickchack.s3.eu-west-2.amazonaws.com/logo/1606311815694asd.PNG",
                        "trader.country": "PS",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T11:14:58.184Z",
                        "trader.updatedAt": "2020-12-07T13:48:49.481Z",
                        "trader.storeTypeId": 47,
                        "trader.mallId": 1
                    },
                    {
                        "id": 750,
                        "name": "كندرة بتجنن ",
                        "price": 40,
                        "isOffer": true,
                        "offerRatio": 20,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604318728424modelPreview.png",
                        "details": "{\"storage\":\"2 gb\",\"color\":\"[\\\"#823838\\\"]\",\"size\":\"[\\\"m\\\",\\\"xl\\\",\\\"2x\\\"]\",\"details\":\"كندرة \\nواحد تنيت ثلاثة اربعط  \\nكندرة لونها بني كندرة لونها اسود \\n\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 10,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/1603796268541816b7c68-a26e-457c-8b25-976ca42ef3b3.jfif",
                        "shopImage256": null,
                        "shopImage512": null,
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 170,
                        "storeProductCategoryId": 86,
                        "libraryId": 205,
                        "trader.id": 170,
                        "trader.storeName": "kadu",
                        "trader.email": "kadu@live.com",
                        "trader.mobile": "+9710501234567",
                        "trader.img": null,
                        "trader.country": "AE",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-10-13T13:04:24.967Z",
                        "trader.updatedAt": "2020-10-13T13:04:24.967Z",
                        "trader.storeTypeId": 44,
                        "trader.mallId": 1
                    },
                    {
                        "id": 39,
                        "name": "عربة اطفال ",
                        "price": 200,
                        "isOffer": true,
                        "offerRatio": 25,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604148608115modelPreview.png",
                        "details": "{\"storage\":\"5 gb\",\"color\":\"[\\\"#15D015\\\",\\\"#D7E201\\\",\\\"#E20A0A\\\"]\",\"size\":\"[\\\"s\\\",\\\"l\\\"]\",\"details\":\"عربة لجر الاطفال \\n\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 20,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/16013034369711167857_107.jpg",
                        "shopImage256": null,
                        "shopImage512": null,
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 129,
                        "storeProductCategoryId": 56,
                        "libraryId": 22,
                        "trader.id": 129,
                        "trader.storeName": "LEGO",
                        "trader.email": "omrei@hotmail.com",
                        "trader.mobile": "+9620504323456",
                        "trader.img": null,
                        "trader.country": "JO",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T14:15:12.921Z",
                        "trader.updatedAt": "2020-09-28T14:15:12.921Z",
                        "trader.storeTypeId": 49,
                        "trader.mallId": 1
                    },
                    {
                        "id": 37,
                        "name": "omrei1",
                        "price": 21,
                        "isOffer": true,
                        "offerRatio": 30,
                        "image": "https://chickchack.s3.eu-west-2.amazonaws.com/game/1604148608115modelPreview.png",
                        "details": "{\"storage\":\"5 gb\",\"color\":\"[\\\"#A92E2E\\\",\\\"#00FF00\\\"]\",\"size\":\"[\\\"s\\\",\\\"l\\\",\\\"m\\\",\\\"2x\\\"]\",\"details\":\"ffffffffffff fffffffff ffffffff\"}",
                        "noOfSale": 0,
                        "noOfOfferSale": 0,
                        "quantity": 5,
                        "showInStore": false,
                        "shopImage": "https://chickchack.s3.eu-west-2.amazonaws.com/product/16012947873661372311_101.jpg",
                        "shopImage256": null,
                        "shopImage512": null,
                        "isAd": false,
                        "rate": null,
                        "numberOfRates": null,
                        "traderId": 122,
                        "storeProductCategoryId": 49,
                        "libraryId": 22,
                        "trader.id": 122,
                        "trader.storeName": "toysrus",
                        "trader.email": "omrei1990@gmail.com",
                        "trader.mobile": "+9710501394033",
                        "trader.img": null,
                        "trader.country": "AE",
                        "trader.isVerify": false,
                        "trader.createdAt": "2020-09-28T10:26:45.933Z",
                        "trader.updatedAt": "2020-09-28T10:26:45.933Z",
                        "trader.storeTypeId": 49,
                        "trader.mallId": 1
                    }
                ]
            },
        ]
        // return response.data.data;
        return data;
        // })
        //     .catch(error => ({ error: JSON.stringify(error) }));
        // return reponse;
    }



    async postLogin() {

        const reponse = await Repository.GET(`https://portal.chickchack.net/api/v1/ecommerce/auth/login`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getCategoriesBySlug(payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        const reponse = await Repository.get(
            `${baseUrl}/product-categories?${query}`
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsBySlug(slug) {
        const reponse = await Repository.get(
            `${baseUrl}/collections/slug?=${slug}`
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }


    
    // api, VIew all category by  in Home
    async getAllcategory_Home() {
        const reponse = await Repository.get(`${baseUrl}/common/home/get-category`)
            .then(response => {
                return response.data.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }


// api view all sub gategory getSubGategory

async getSubGategory() {
    const reponse = await Repository.get(`${baseUrl}/common/store/1/get-subCategory`)
        .then(response => {
            return response.data.data;
        })
        .catch(error => ({ error: JSON.stringify(error) }));
    return reponse;
}



    

    // api, VIew all by category in Home
    // EDIT
    async getViewAllHomeSection(payload) {
        const reponse = await Repository.get(`${baseUrl}/stores/${payload}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }


    // api, GET HOME PROMOTIONS
    async getHomePromotions(payload) {
        const reponse = await Repository.get(`${baseUrl}/common/home-slider`)
            .then(response => {
                console.log("repo promotions", response.data)
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }


    
    // api, GET HOME BANNERS
    async getHomeBanners(payload) {
        const reponse = await Repository.get(`${baseUrl}/common/banner`)
            .then(response => {
                console.log("repo bannres", response.data)
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }


    
    // get products by category id

    async getProductsByCatId( cat_id,  limit, offset){
        console.log("repoooooooooo ",  cat_id,  limit, offset)
      
        const response = await Repository.get(`${baseUrl}/common/product/products-by-main-category?storeTypeId=${cat_id}&limit=${limit}&offset=${offset}`)
        .then(response => {
            console.log("repoooooooooo  response", response.data)
            return response.data;
        })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    
        }

// subscription api
async postSubscription(payload) {
    var info = {
        "email": payload.sub_email,
    };
    console.log("info sub repo", info)

    try {
        const response = await Repository.post(`${baseUrl}/common/email-subscription`, info)
        console.log("sub repo response",response)
        return response;
    } catch (error) {
        return error;
    }

}

//  send message
// /ecommerce/common/contact-us-form/   POST
// body = { fullName, email, content } 

async sendMessage(payload) {
    var info = {
        "fullName": payload.fullname,
        "email": payload.email,
        "content": payload.message,

    };
    try {
        const response = await Repository.post(`https://portal.chickchack.net/api/v1/ecommerce/common/contact-us-form`, info)
        return response;
    } catch (error) {
        return error;
    }

}

}

export default new CollectionRepository();
