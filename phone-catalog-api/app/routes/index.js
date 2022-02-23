module.exports = function (app, db) {
  app.get('/phones', (req, res) => {
      res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json([
      [{
          "id": "1"
        },
        {
          "image_url": "https://images.samsung.com/is/image/samsung/es-feature-style-that-makes-a-statement-154657709?$FB_TYPE_A_JPG$"
        },
        {
          "model": "Galaxy S8"
        },
        {
          "brand": "Samsung"
        },
        {
          "price": "200 €"
        },
        {
          "color": "black / white"
        },
        {
          "specs": [{
              "battery": "Li-Ion 3000 mAh, non-removable (11.55 Wh)"
            },
            {
              "weight": "155g"
            },
            {
              "memory": "64GB storage, microSDXC"
            },
            {
              "cpu": "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China"
            },
            {
              "os": "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
            }
          ]
        },
        {
          "id": "2"
        },
        {
          "image_url": "https://images.samsung.com/is/image/samsung/es-feature-style-that-makes-a-statement-154657709?$FB_TYPE_A_JPG$"
        },
        {
          "model": "Galaxy S8"
        },
        {
          "brand": "Samsung"
        },
        {
          "price": "200 €"
        },
        {
          "color": "black / white"
        },
        {
          "specs": [{
              "battery": "Li-Ion 3000 mAh, non-removable (11.55 Wh)"
            },
            {
              "weight": "155g"
            },
            {
              "memory": "64GB storage, microSDXC"
            },
            {
              "cpu": "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China"
            },
            {
              "os": "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
            }
          ]
        },
        {
          "id": "3"
        },
        {
          "image_url": "https://images.samsung.com/is/image/samsung/es-feature-style-that-makes-a-statement-154657709?$FB_TYPE_A_JPG$"
        },
        {
          "model": "Galaxy S8"
        },
        {
          "brand": "Samsung"
        },
        {
          "price": "200 €"
        },
        {
          "color": "black / white"
        },
        {
          "specs": [{
              "battery": "Li-Ion 3000 mAh, non-removable (11.55 Wh)"
            },
            {
              "weight": "155g"
            },
            {
              "memory": "64GB storage, microSDXC"
            },
            {
              "cpu": "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China"
            },
            {
              "os": "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
            }
          ]
        },
        {
          "id": "4"
        },
        {
          "image_url": "https://images.samsung.com/is/image/samsung/es-feature-style-that-makes-a-statement-154657709?$FB_TYPE_A_JPG$"
        },
        {
          "model": "Galaxy S8"
        },
        {
          "brand": "Samsung"
        },
        {
          "price": "200 €"
        },
        {
          "color": "black / white"
        },
        {
          "specs": [{
              "battery": "Li-Ion 3000 mAh, non-removable (11.55 Wh)"
            },
            {
              "weight": "155g"
            },
            {
              "memory": "64GB storage, microSDXC"
            },
            {
              "cpu": "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China"
            },
            {
              "os": "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
            }
          ]
        },
        {
          "id": "5"
        },
        {
          "image_url": "https://images.samsung.com/is/image/samsung/es-feature-style-that-makes-a-statement-154657709?$FB_TYPE_A_JPG$"
        },
        {
          "model": "Galaxy S8"
        },
        {
          "brand": "Samsung"
        },
        {
          "price": "200 €"
        },
        {
          "color": "black / white"
        },
        {
          "specs": [{
              "battery": "Li-Ion 3000 mAh, non-removable (11.55 Wh)"
            },
            {
              "weight": "155g"
            },
            {
              "memory": "64GB storage, microSDXC"
            },
            {
              "cpu": "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China"
            },
            {
              "os": "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
            }
          ]
        },
        {
          "id": "6"
        },
        {
          "image_url": "https://images.samsung.com/is/image/samsung/es-feature-style-that-makes-a-statement-154657709?$FB_TYPE_A_JPG$"
        },
        {
          "model": "Galaxy S8"
        },
        {
          "brand": "Samsung"
        },
        {
          "price": "200 €"
        },
        {
          "color": "black / white"
        },
        {
          "specs": [{
              "battery": "Li-Ion 3000 mAh, non-removable (11.55 Wh)"
            },
            {
              "weight": "155g"
            },
            {
              "memory": "64GB storage, microSDXC"
            },
            {
              "cpu": "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China"
            },
            {
              "os": "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
            }
          ]
        },
        {
          "id": "7"
        },
        {
          "image_url": "https://images.samsung.com/is/image/samsung/es-feature-style-that-makes-a-statement-154657709?$FB_TYPE_A_JPG$"
        },
        {
          "model": "Galaxy S8"
        },
        {
          "brand": "Samsung"
        },
        {
          "price": "200 €"
        },
        {
          "color": "black / white"
        },
        {
          "specs": [{
              "battery": "Li-Ion 3000 mAh, non-removable (11.55 Wh)"
            },
            {
              "weight": "155g"
            },
            {
              "memory": "64GB storage, microSDXC"
            },
            {
              "cpu": "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China"
            },
            {
              "os": "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
            }
          ]
        },
        {
          "id": "8"
        },
        {
          "image_url": "https://images.samsung.com/is/image/samsung/es-feature-style-that-makes-a-statement-154657709?$FB_TYPE_A_JPG$"
        },
        {
          "model": "Galaxy S8"
        },
        {
          "brand": "Samsung"
        },
        {
          "price": "200 €"
        },
        {
          "color": "black / white"
        },
        {
          "specs": [{
              "battery": "Li-Ion 3000 mAh, non-removable (11.55 Wh)"
            },
            {
              "weight": "155g"
            },
            {
              "memory": "64GB storage, microSDXC"
            },
            {
              "cpu": "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China"
            },
            {
              "os": "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
            }
          ]
        },
        {
          "id": "9"
        },
        {
          "image_url": "https://images.samsung.com/is/image/samsung/es-feature-style-that-makes-a-statement-154657709?$FB_TYPE_A_JPG$"
        },
        {
          "model": "Galaxy S8"
        },
        {
          "brand": "Samsung"
        },
        {
          "price": "200 €"
        },
        {
          "color": "black / white"
        },
        {
          "specs": [{
              "battery": "Li-Ion 3000 mAh, non-removable (11.55 Wh)"
            },
            {
              "weight": "155g"
            },
            {
              "memory": "64GB storage, microSDXC"
            },
            {
              "cpu": "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China"
            },
            {
              "os": "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
            }
          ]
        },
        {
          "id": "10"
        },
        {
          "image_url": "https://images.samsung.com/is/image/samsung/es-feature-style-that-makes-a-statement-154657709?$FB_TYPE_A_JPG$"
        },
        {
          "model": "Galaxy S8"
        },
        {
          "brand": "Samsung"
        },
        {
          "price": "200 €"
        },
        {
          "color": "black / white"
        },
        {
          "specs": [{
              "battery": "Li-Ion 3000 mAh, non-removable (11.55 Wh)"
            },
            {
              "weight": "155g"
            },
            {
              "memory": "64GB storage, microSDXC"
            },
            {
              "cpu": "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China"
            },
            {
              "os": "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
            }
          ]
        }
      ]
    ])
  })
}



// const express = require('express');
// const router = express.Router();

// router.get('/phones', function(req, res, next) {
//   res.json([
//     { id: 1,
//       image_url: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjdn7_E25P2AhVY53cKHSjeBXgYABAJGgJlZg&sig=AOD64_3ss-YtJwj67e4wsYfOBAVwrGYi8A&adurl&ctype=5&ved=2ahUKEwjp2LHE25P2AhUz57sIHTAPAUUQvhd6BQgBEIAB',
//       model: 'Galaxy S8',
//       brand: 'Samsung',
//       price: '200 €',
//       color: 'black / white',
//       specs: {
//         battery: "Li-Ion 3000 mAh, non-removable (11.55 Wh)",
//         weight: "155g",
//         memory: "64GB storage, microSDXC",
//         cpu: "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China",
//         os: "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
//       }
//     },
//     { id: 2,
//       image_url: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjdn7_E25P2AhVY53cKHSjeBXgYABAJGgJlZg&sig=AOD64_3ss-YtJwj67e4wsYfOBAVwrGYi8A&adurl&ctype=5&ved=2ahUKEwjp2LHE25P2AhUz57sIHTAPAUUQvhd6BQgBEIAB',
//       model: 'Galaxy S10',
//       brand: 'Samsung',
//       price: '200 €',
//       color: 'black / white',
//       specs: {
//         battery: "Li-Ion 3000 mAh, non-removable (11.55 Wh)",
//         weight: "155g",
//         memory: "64GB storage, microSDXC",
//         cpu: "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China",
//         os: "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
//       }
//     },
//     { id: 3,
//       image_url: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjdn7_E25P2AhVY53cKHSjeBXgYABAJGgJlZg&sig=AOD64_3ss-YtJwj67e4wsYfOBAVwrGYi8A&adurl&ctype=5&ved=2ahUKEwjp2LHE25P2AhUz57sIHTAPAUUQvhd6BQgBEIAB',
//       model: 'Galaxy S9',
//       brand: 'Samsung',
//       price: '200 €',
//       color: 'black / white',
//       specs: {
//         battery: "Li-Ion 3000 mAh, non-removable (11.55 Wh)",
//         weight: "155g",
//         memory: "64GB storage, microSDXC",
//         cpu: "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China",
//         os: "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
//       }
//     },
//     { id: 4,
//       image_url: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjdn7_E25P2AhVY53cKHSjeBXgYABAJGgJlZg&sig=AOD64_3ss-YtJwj67e4wsYfOBAVwrGYi8A&adurl&ctype=5&ved=2ahUKEwjp2LHE25P2AhUz57sIHTAPAUUQvhd6BQgBEIAB',
//       model: 'Galaxy A52',
//       brand: 'Samsung',
//       price: '200 €',
//       color: 'black / white',
//       specs: {
//         battery: "Li-Ion 3000 mAh, non-removable (11.55 Wh)",
//         weight: "155g",
//         memory: "64GB storage, microSDXC",
//         cpu: "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China",
//         os: "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
//       }
//     },
//     { id: 5,
//       image_url: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjdn7_E25P2AhVY53cKHSjeBXgYABAJGgJlZg&sig=AOD64_3ss-YtJwj67e4wsYfOBAVwrGYi8A&adurl&ctype=5&ved=2ahUKEwjp2LHE25P2AhUz57sIHTAPAUUQvhd6BQgBEIAB',
//       model: 'Galaxy S20',
//       brand: 'Samsung',
//       price: '200 €',
//       color: 'black / white',
//       specs: {
//         battery: "Li-Ion 3000 mAh, non-removable (11.55 Wh)",
//         weight: "155g",
//         memory: "64GB storage, microSDXC",
//         cpu: "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China",
//         os: "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
//       }
//     },
//     { id: 6,
//       image_url: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjdn7_E25P2AhVY53cKHSjeBXgYABAJGgJlZg&sig=AOD64_3ss-YtJwj67e4wsYfOBAVwrGYi8A&adurl&ctype=5&ved=2ahUKEwjp2LHE25P2AhUz57sIHTAPAUUQvhd6BQgBEIAB',
//       model: 'Galaxy A12',
//       brand: 'Samsung',
//       price: '200 €',
//       color: 'black / white',
//       specs: {
//         battery: "Li-Ion 3000 mAh, non-removable (11.55 Wh)",
//         weight: "155g",
//         memory: "64GB storage, microSDXC",
//         cpu: "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China",
//         os: "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
//       }
//     },
//     { id: 7,
//       image_url: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjdn7_E25P2AhVY53cKHSjeBXgYABAJGgJlZg&sig=AOD64_3ss-YtJwj67e4wsYfOBAVwrGYi8A&adurl&ctype=5&ved=2ahUKEwjp2LHE25P2AhUz57sIHTAPAUUQvhd6BQgBEIAB',
//       model: 'Galaxy A32',
//       brand: 'Samsung',
//       price: '200 €',
//       color: 'black / white',
//       specs: {
//         battery: "Li-Ion 3000 mAh, non-removable (11.55 Wh)",
//         weight: "155g",
//         memory: "64GB storage, microSDXC",
//         cpu: "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China",
//         os: "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
//       }
//     },
//     { id: 8,
//       image_url: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjdn7_E25P2AhVY53cKHSjeBXgYABAJGgJlZg&sig=AOD64_3ss-YtJwj67e4wsYfOBAVwrGYi8A&adurl&ctype=5&ved=2ahUKEwjp2LHE25P2AhUz57sIHTAPAUUQvhd6BQgBEIAB',
//       model: 'Galaxy A03',
//       brand: 'Samsung',
//       price: '200 €',
//       color: 'black / white',
//       specs: {
//         battery: "Li-Ion 3000 mAh, non-removable (11.55 Wh)",
//         weight: "155g",
//         memory: "64GB storage, microSDXC",
//         cpu: "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China",
//         os: "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
//       }
//     },
//     { id: 9,
//       image_url: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjdn7_E25P2AhVY53cKHSjeBXgYABAJGgJlZg&sig=AOD64_3ss-YtJwj67e4wsYfOBAVwrGYi8A&adurl&ctype=5&ved=2ahUKEwjp2LHE25P2AhUz57sIHTAPAUUQvhd6BQgBEIAB',
//       model: 'Galaxy Z',
//       brand: 'Samsung',
//       price: '200 €',
//       color: 'black / white',
//       specs: {
//         battery: "Li-Ion 3000 mAh, non-removable (11.55 Wh)",
//         weight: "155g",
//         memory: "64GB storage, microSDXC",
//         cpu: "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China",
//         os: "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
//       }
//     },
//     { id: 10,
//       image_url: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjdn7_E25P2AhVY53cKHSjeBXgYABAJGgJlZg&sig=AOD64_3ss-YtJwj67e4wsYfOBAVwrGYi8A&adurl&ctype=5&ved=2ahUKEwjp2LHE25P2AhUz57sIHTAPAUUQvhd6BQgBEIAB',
//       model: 'Galaxy F52',
//       brand: 'Samsung',
//       price: '200 €',
//       color: 'black / white',
//       specs: {
//         battery: "Li-Ion 3000 mAh, non-removable (11.55 Wh)",
//         weight: "155g",
//         memory: "64GB storage, microSDXC",
//         cpu: "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEA, Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China",
//         os: "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), One UI"
//       }
//     }
//   ])
// });

// module.exports = router;
