import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataToysService {

    firsPage = new BehaviorSubject([
        {
            article: 'Articul: PP 2018-092',
            name: 'Tesla Model S',
            id: 1,
            src: 'https://media.ed.edmunds-media.com/tesla/model-s/2024/oem/2024_tesla_model-s_sedan_plaid_fq_oem_1_1600.jpg',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'BMW 3 Series',
            id: 2,
            src: 'https://rg.ru/uploads/images/231/92/25/P90462506_highRes_the-new-bmw-3-series.jpg',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Audi A4',
            id: 3,
            src: 'https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/model-years/15099-2023-audi-a4',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Mercedes-Benz C-Class',
            id: 4,
            src: 'https://iat.ru/uploads/origin/models/701601/1.webp',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Ford Mustang',
            id: 5,
            src: 'https://hips.hearstapps.com/hmg-prod/images/2025-ford-mustang-60th-anniversary-exterior-66227932bb88e.jpg?crop=0.596xw:1.00xh;0.199xw,0&resize=768:*',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Chevrolet Camaro',
            id: 6,
            src: 'https://hips.hearstapps.com/hmg-prod/images/2024-chevrolet-camaro-ss-collectors-edition-1-647e1933c6c20.jpg',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Porsche 911',
            id: 7,
            src: 'https://avatars.mds.yandex.net/get-vertis-journal/4466156/MANSORY-P9LM-EVO900-Porsche-911-Turbo-S-7-1536x1024.jpg_1689844596057/orig',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Lamborghini Huracan',
            id: 8,
            src: 'https://cdn.motor1.com/images/mgl/1Zz3jK/s1/4x3/lamborghini-huracan-tecnica.webp',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Ferrari 488',
            id: 9,
            src: 'https://cdn.ferrari.com/cms/network/media/img/resize/5d371735c3f9ec0af647572d-ferrari_488pista_intro_socialshare?width=1080',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'McLaren 720S',
            id: 10,
            src: 'https://www.auto-data.net/images/f29/McLaren-720S-Spider.jpg',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Nissan GT-R',
            id: 11,
            src: 'https://avatars.mds.yandex.net/get-vertis-journal/3934100/Nissan_gt-r_2203.jpg_1651654260964/orig',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Toyota Supra',
            id: 12,
            src: 'https://cdn.motor1.com/images/mgl/ojbLG4/s1/2022-toyota-supra-2.0-review.jpg',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },
        {
            article: 'Articul: PP 2018-092',
            name: 'Toyota Supra',
            id: 12,
            src: 'https://cdn.motor1.com/images/mgl/ojbLG4/s1/2022-toyota-supra-2.0-review.jpg',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },



    ])

    secondPage = new BehaviorSubject([
        {
            article: 'Articul: PP 2018-092',
            name: 'Jeep® Wrangler',
            id: 1,
            src: 'https://bigtoysdirect.com/cdn/shop/products/lva9abf9fuqlyleryvlr.jpg?v=1655917738',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Jeep® Wrangler',
            id: 2,
            src: 'https://bigtoysdirect.com/cdn/shop/products/lva9abf9fuqlyleryvlr.jpg?v=1655917738',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Jeep® Wrangler',
            id: 3,
            src: 'https://bigtoysdirect.com/cdn/shop/products/lva9abf9fuqlyleryvlr.jpg?v=1655917738',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Jeep® Wrangler',
            id: 4,
            src: 'https://bigtoysdirect.com/cdn/shop/products/lva9abf9fuqlyleryvlr.jpg?v=1655917738',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Jeep® Wrangler',
            id: 5,
            src: 'https://bigtoysdirect.com/cdn/shop/products/lva9abf9fuqlyleryvlr.jpg?v=1655917738',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Jeep® Wrangler',
            id: 6,
            src: 'https://bigtoysdirect.com/cdn/shop/products/lva9abf9fuqlyleryvlr.jpg?v=1655917738',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Jeep® Wrangler',
            id: 7,
            src: 'https://bigtoysdirect.com/cdn/shop/products/lva9abf9fuqlyleryvlr.jpg?v=1655917738',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Jeep® Wrangler',
            id: 8,
            src: 'https://bigtoysdirect.com/cdn/shop/products/lva9abf9fuqlyleryvlr.jpg?v=1655917738',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Jeep® Wrangler',
            id: 9,
            src: 'https://bigtoysdirect.com/cdn/shop/products/lva9abf9fuqlyleryvlr.jpg?v=1655917738',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Jeep® Wrangler',
            id: 10,
            src: 'https://bigtoysdirect.com/cdn/shop/products/lva9abf9fuqlyleryvlr.jpg?v=1655917738',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Jeep® Wrangler',
            id: 11,
            src: 'https://bigtoysdirect.com/cdn/shop/products/lva9abf9fuqlyleryvlr.jpg?v=1655917738',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },

        {
            article: 'Articul: PP 2018-092',
            name: 'Jeep® Wrangler',
            id: 12,
            src: 'https://bigtoysdirect.com/cdn/shop/products/lva9abf9fuqlyleryvlr.jpg?v=1655917738',
            data: {
                Articul: 'РР 2012-036 B',
                EAN: 123456,
                size: 34,
                paageSize: 44,
                typePacking: 'Corrugated box',
                multipackTypeL: 'Corrugated box',
                PackageQuantity: 1
            }
        },


    ])

}