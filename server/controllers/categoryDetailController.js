import CategoryDetail from "../models/categoryDetail.js";

export const getAllCategoryDetails = async (req, res) => {
  try {
    const categoryDetails = await CategoryDetail.find();
    res.json(categoryDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error: ", error });
  }
};

export const getCategoryDetailByCategory = async (req, res) => {
  try {
    const categoryDetailsByCate = await CategoryDetail.find({
      categoryId: req.params.cateId,
    });
    res.json(categoryDetailsByCate);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error: ", error });
  }
};

export const getCategoryDetailById = async (req, res) => {
  try {
    const categoryDetail = await CategoryDetail.findById(req.params.id);
    res.json(categoryDetail);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error: ", error });
  }
};
