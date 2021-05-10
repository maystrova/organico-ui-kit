import {
    PRODUCTS_CATEGORY,
    ProductType,
} from '../../Components/Pages/ProductPage/types'
import paprika from 'pics/paprika.png'
import broccoli from 'pics/broccoli.png'
import potato from 'pics/potato.png'
import lettuce from 'pics/lettuce.png'
import carrot from 'pics/carrot.png'
import onion from 'pics/onion.png'
import banana from 'pics/banana.png'

export let prducts = []

export let fruits = [
    {
        title: 'Banana',
        shop: 'Fruitmarket',
        price: 4.68,
    },
]

const products: ProductType[] = [
    {
        title: 'Paprika',
        shop: 'Vegshop',
        price: 4.99,
        image: paprika,
        details:
            'Paprika is a fruit-producing plant that tastes sweet and slightly spicy from the eggplant or Solanaceae tribe. \n' +
            '    Its green, yellow, red, or purple fruit',
        category: PRODUCTS_CATEGORY.VEGETABLES,
    },
    {
        title: 'Broccoli',
        category: PRODUCTS_CATEGORY.VEGETABLES,
        details:
            'Broccoli (Brassica oleracea var. italica) is an edible green plant in the cabbage family (family Brassicaceae, genus Brassica) whose large flowering head, stalk and small associated leaves are eaten as a vegetable. Broccoli is classified in the Italica cultivar group of the species Brassica oleracea.',
        image: broccoli,
        price: 4.99,
        shop: 'Popey shop',
    },
    {
        title: 'Potato',
        shop: 'Anyshop',
        price: 4.21,
        image: potato,
        category: PRODUCTS_CATEGORY.VEGETABLES,
        details:
            'The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself is a perennial in the nightshade family, Solanaceae.',
    },
    {
        title: 'Lettuce',
        shop: 'Vegmarket',
        category: PRODUCTS_CATEGORY.VEGETABLES,
        image: lettuce,
        price: 3.4,
        details:
            'Lettuce (Lactuca sativa) is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
    },
    {
        title: 'Carrot',
        price: 2.5,
        shop: 'Popey shop',
        category: PRODUCTS_CATEGORY.VEGETABLES,
        details:
            'The carrot (Daucus carota subsp. sativus) is a root vegetable, usually orange in color, though purple, black, red, white, and yellow cultivars exist.[2][3][4] They are a domesticated form of the wild carrot, Daucus carota, native to Europe and Southwestern Asia. The plant probably originated in Persia and was originally cultivated for its leaves and seeds. The most commonly eaten part of the plant is the taproot, although the stems and leaves are also eaten. The domestic carrot has been selectively bred for its greatly enlarged, more palatable, less woody-textured taproot.',
        image: carrot,
    },
    {
        title: 'Red Onion',
        shop: 'Vegytail',
        price: 4.3,
        category: PRODUCTS_CATEGORY.VEGETABLES,
        details:
            'Red onions (also known as purple onions in some European countries) are cultivars of the onion (Allium cepa), and have purplish-red skin and white flesh tinged with red. They are most commonly used in the culinary arts, but the skin of the red onion has also been used as a dye.',
        image: onion,
    },
    {
        title: 'Banana',
        shop: 'Fruitmarket',
        price: 4.68,
        category: PRODUCTS_CATEGORY.FRUITS,
        details:
            'A banana is an elongated, edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible seedless (parthenocarp) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name for this hybrid, Musa sapientum, is no longer used.',
        image: banana,
    },
]
