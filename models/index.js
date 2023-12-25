// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // The foreign key in the Product model
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // The foreign key in the Product model
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, // The intermediate model
  foreignKey: 'product_id', // The foreign key in the Product model
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, // The intermediate model
  foreignKey: 'tag_id', // The foreign key in the Product model
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
