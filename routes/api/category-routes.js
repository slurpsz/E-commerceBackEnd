const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({include: [Product]})

    return res.json(categoryData);
  } catch(err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findOne({ where: { id: req.params.id, },include: [Product],})
    return res.json(categoryData);
  } catch(err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body)
    res.status(200).json(newCategory)
  } catch(err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Cateogry.update(req.body, {
      where: {id: req.params.id,},
    })
    res.status(200).json(updateCategory)
  } catch(err) {
    res.status(400).json(err);
  }

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const deleteCategory = await Category.destroy({where: { id: req.params.id,},});
    res.status(200).json(deleteCateogry);
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
