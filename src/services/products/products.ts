import { PRODUCTS_CATEGORY, ProductType } from 'Pages/ProductPage/types'
import paprikaPic from './pics/paprika.png'
import broccoliPic from './pics/broccoli.png'
import potatoPic from './pics/potato.png'
import lettucePic from './pics/lettuce.png'
import carrotPic from './pics/carrot.png'
import onionPic from './pics/onion.png'
import bananaPic from './pics/banana.png'
import chickenPic from 'services/products/pics/chicken.png'
import beefPic from 'services/products/pics/beef.png'
import vealPic from 'services/products/pics/veal.png'
import porkpic from 'services/products/pics/pork.png'
import applePic from 'services/products/pics/apple.png'
import orangePic from 'services/products/pics/orange.png'
import pineapplePic from 'services/products/pics/pineapple.png'
import kiwiPic from 'services/products/pics/kiwi.png'

export enum PRODUCT_TYPE {
    BANANA = 'banana',
    PAPRIKA = 'paprika',
    BROCCOLI = 'broccoli',
    POTATO = 'potato',
    RED_ONION = 'red_onion',
    CARROT = 'carrot',
    LETTUCE = 'lettuce',
    DEFAULT = 'default',
    MEAT = 'meat',
    KIWI = 'kiwi',
    PINEAPPLE = 'pineapple',
    APPLE = 'apple',
    ORANGE = 'orange',
    VEAL = 'veal',
    BEEF = 'beef',
    PORK = 'pork',
    CHICKEN = 'chicken',
}

const products: ProductType[] = [
    {
        title: 'Paprika',
        shop: 'Vegshop',
        price: 4.99,
        image: paprikaPic,
        details:
            'Paprika is a fruit-producing plant that tastes sweet and slightly spicy from the eggplant or Solanaceae tribe. \n' +
            '    Its green, yellow, red, or purple fruit',
        category: PRODUCTS_CATEGORY.VEGETABLES,
        id: `${Math.random()}`,
        alias: 'paprika',
        quantity: 0,
    },
    {
        title: 'Apple',
        shop: 'Vegshop',
        price: 3.99,
        image: applePic,
        details: '',
        category: PRODUCTS_CATEGORY.FRUITS,
        id: `${Math.random()}`,
        alias: 'apple',
        quantity: 0,
    },
    {
        title: 'Orange',
        id: `${Math.random()}`,
        details: '',
        category: PRODUCTS_CATEGORY.FRUITS,
        shop: 'FruitShop',
        price: 2.44,
        image: orangePic,
        alias: 'orange',
        quantity: 0,
    },

    {
        title: 'Pineapple',
        id: `${Math.random()}`,
        details: '',
        category: PRODUCTS_CATEGORY.FRUITS,
        shop: 'FruitShop',
        price: 5.44,
        image: pineapplePic,
        alias: 'pineapple',
        quantity: 0,
    },
    {
        title: 'Kiwi',
        id: `${Math.random()}`,
        details: '',
        category: PRODUCTS_CATEGORY.FRUITS,
        shop: 'VegShop',
        price: 4.11,
        image: kiwiPic,
        alias: 'kiwi',
        quantity: 0,
    },
    {
        title: 'Broccoli',
        category: PRODUCTS_CATEGORY.VEGETABLES,
        details:
            'Broccoli (Brassica oleracea var. italica) is an edible green plant in the cabbage family (family Brassicaceae, genus Brassica) whose large flowering head, stalk and small associated leaves are eaten as a vegetable. Broccoli is classified in the Italica cultivar group of the species Brassica oleracea.',
        image: broccoliPic,
        price: 4.99,
        shop: 'Popey shop',
        id: `${Math.random()}`,
        alias: 'broccoli',
        quantity: 0,
    },
    {
        title: 'Potato',
        shop: 'Anyshop',
        price: 4.21,
        image: potatoPic,
        category: PRODUCTS_CATEGORY.VEGETABLES,
        id: `${Math.random()}`,
        alias: 'potato',
        quantity: 0,
        details:
            'The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself is a perennial in the nightshade family, Solanaceae.',
    },
    {
        title: 'Lettuce',
        shop: 'Vegmarket',
        category: PRODUCTS_CATEGORY.VEGETABLES,
        image: lettucePic,
        price: 3.4,
        id: `${Math.random()}`,
        alias: 'lettuce',
        quantity: 0,
        details:
            'Lettuce (Lactuca sativa) is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
    },
    {
        title: 'Carrot',
        price: 2.5,
        shop: 'Popey shop',
        category: PRODUCTS_CATEGORY.VEGETABLES,
        alias: 'carrot',
        quantity: 0,
        id: `${Math.random()}`,
        details:
            'The carrot (Daucus carota subsp. sativus) is a root vegetable, usually orange in color, though purple, black, red, white, and yellow cultivars exist.[2][3][4] They are a domesticated form of the wild carrot, Daucus carota, native to Europe and Southwestern Asia. The plant probably originated in Persia and was originally cultivated for its leaves and seeds. The most commonly eaten part of the plant is the taproot, although the stems and leaves are also eaten. The domestic carrot has been selectively bred for its greatly enlarged, more palatable, less woody-textured taproot.',
        image: carrotPic,
    },
    {
        title: 'Red Onion',
        shop: 'Vegytail',
        price: 4.3,
        category: PRODUCTS_CATEGORY.VEGETABLES,
        alias: 'red-onion',
        quantity: 0,
        id: `${Math.random()}`,

        details:
            'Red onions (also known as purple onions in some European countries) are cultivars of the onion (Allium cepa), and have purplish-red skin and white flesh tinged with red. They are most commonly used in the culinary arts, but the skin of the red onion has also been used as a dye.',
        image: onionPic,
    },
    {
        title: 'Banana',
        shop: 'Fruitmarket',
        price: 4.68,
        category: PRODUCTS_CATEGORY.FRUITS,
        quantity: 0,
        id: `${Math.random()}`,
        alias: 'banana',

        details:
            'A banana is an elongated, edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible seedless (parthenocarp) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name for this hybrid, Musa sapientum, is no longer used.',
        image: bananaPic,
    },
    {
        title: 'Chicken',
        shop: 'OrganicMeats',
        price: 5.34,
        category: PRODUCTS_CATEGORY.MEATS,
        alias: 'chicken',
        id: `${Math.random()}`,
        details:
            'Chicken is the most common type of poultry in the world. Owing to the relative ease and low cost of raising them in comparison to animals such as cattle or hogs, chickens have become prevalent in numerous cuisines.Chicken can be prepared in a vast range of ways, including baking, grilling, barbecuing, frying, and boiling. Since the latter half of the 20th century, prepared chicken has become a staple of fast food. Chicken is sometimes cited as being more healthful than red meat, with lower concentrations of cholesterol and saturated fat.',
        image: chickenPic,
        quantity: 0,
    },
    {
        title: 'Beef',
        shop: 'OrganicMeats',
        price: 6.32,
        category: PRODUCTS_CATEGORY.MEATS,
        alias: 'beef',
        id: `${Math.random()}`,
        details: '',
        image: beefPic,
        quantity: 0,
    },
    {
        title: 'Veal',
        shop: 'OrganicMeats',
        price: 10.23,
        category: PRODUCTS_CATEGORY.MEATS,
        alias: 'veal',
        id: `${Math.random()}`,
        details: '',
        image: vealPic,
        quantity: 0,
    },
    {
        title: 'Pork',
        shop: 'OrganicMeats',
        price: 7.41,
        category: PRODUCTS_CATEGORY.MEATS,
        alias: 'pork',
        id: `${Math.random()}`,
        details: '',
        image: porkpic,
        quantity: 0,
    },
]

let paprika = products[0]
let broccoli = products[1]
let potato = products[2]
let lettuce = products[3]
let carrot = products[4]
let redOnion = products[5]
let banana = products[6]

// for (const product of products) {
//
// }

export {
    products,
    paprika,
    carrot,
    broccoli,
    lettuce,
    redOnion,
    potato,
    banana,
}
