const mongoose = require('mongoose');

// Connect to MongoDB Atlas (replace with your connection string)
mongoose.connect('mongodb+srv://akashvangadi47:123456cc@cc.47576ip.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000, // Increase to 30 seconds
  socketTimeoutMS: 10000,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define your schemas and models
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imgsrc: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const ProdSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const CartSchema = new mongoose.Schema({
  products: [ProdSchema],
  total: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

const HistorySchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    unique: true,
  },
  curr_cart: {
    type: [ProdSchema],
  },
  cart_history: {
    type: [CartSchema],
    default: [],
  },
});

const UserModel = mongoose.model('Users', UserSchema);
const ProductModel = mongoose.model('Products', ProductSchema);
const HistoryModel = mongoose.model('History', HistorySchema);

// Array of specific product data
const productData = [
  {
    name: 'Dosa Maker',
    imgsrc: 'frontend/src/dosa.png',
    desc: 'An amazing dosa maker for perfect dosas every time.',
    price: 99,
  },
  {
    name: 'Waffle Iron',
    imgsrc: 'frontend/src/waffle.png',
    desc: 'Perfect waffles every time.',
    price: 89,
  },
  {
    name: 'Toaster',
    imgsrc: 'frontend/src/toaster.png',
    desc: 'Toast your bread to perfection.',
    price: 29,
  },
  {
    name: 'Blender',
    imgsrc: 'frontend/src/blender.png',
    desc: 'Smoothies and shakes made easy.',
    price: 79,
  },
  {
    name: 'Sandwich Maker',
    imgsrc: 'frontend/src/sandwich.png',
    desc: 'Make delicious sandwiches at home.',
    price: 49,
  },
  {
    name: 'Rice Cooker',
    imgsrc: 'frontend/src/ricecooker.png',
    desc: 'Cook rice effortlessly.',
    price: 59,
  },
  {
    name: 'Coffee Maker',
    imgsrc: 'frontend/src/coffeemaker.png',
    desc: 'Brew your favorite coffee.',
    price: 119,
  },
  {
    name: 'Laptop',
    imgsrc: 'frontend/src/coffeemaker.png',
    desc: 'Laptop',
    price: 1000,
  },
  {
    name: 'mouse',
    imgsrc: 'frontend/src/coffeemaker.png',
    desc: 'mouse .',
    price: 100,
  },
];

// Function to insert specific data into the database
async function insertSpecificData() {
  try {
    // Insert a specific user
    const user = {
      email: 'user@example.com',
      password: 'securepassword123',
    };
    await UserModel.create(user);
    console.log('Specific user data inserted:', user);

    // Insert 7 products
    await ProductModel.insertMany(productData);
    console.log('Specific product data inserted:', productData);

    // Insert a specific history record
    const cart = {
      products: [{ product: 'Dosa Maker', quantity: 2 }],
      total: 198,
    };

    const history = {
      user: user.email,
      curr_cart: cart.products,
      cart_history: [cart],
    };

    await HistoryModel.create(history);
    console.log('Specific history data inserted:', history);
  } catch (error) {
    console.error('Error inserting specific data:', error);
  } finally {
    mongoose.disconnect();
  }
}

// Call the function to insert specific data
insertSpecificData();
