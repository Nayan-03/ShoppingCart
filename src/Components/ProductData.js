import item1 from '../images/item1.jpg';
import item2 from '../images/item2.webp';
import item3 from '../images/item3.jpg';

const ProductData = [
    {
        id: 1,  
        Title: 'Mug',
        image: item1, // Imported image
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus facilis aperiam officiis accusantium suscipit sequi pariatur minima eius placeat vitae, commodi quisquam, velit illum quasi similique harum. Quasi, quae.',
        cat: 'mug'
    },
    {
        id: 2,
        Title: 'Frame',
        image: item2, // Imported image
        price: 200,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus facilis aperiam officiis accusantium suscipit sequi pariatur minima eius placeat vitae, commodi quisquam, velit illum quasi similique harum. Quasi, quae.',
        cat: 'frame'
    },
    {
        id: 3,
        Title: 'T-shirt',
        image: item3, // Imported image
        price: 300,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus facilis aperiam officiis accusantium suscipit sequi pariatur minima eius placeat vitae, commodi quisquam, velit illum quasi similique harum. Quasi, quae.',
        cat: 't-shirt'
    },
]

export default ProductData;
