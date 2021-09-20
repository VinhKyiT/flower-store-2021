import categoryRoutes from "./categoryRoutes.js";
import productRoutes from "./productRoutes.js";
import categoryDetailRoutes from "./categoryDetailRoutes.js";

export default (app) => {
  app.use("/api/category", categoryRoutes);
  app.use("/api/category-detail", categoryDetailRoutes);
  app.use("/api/product", productRoutes);
};
