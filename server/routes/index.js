import categoryRoutes from "./categoryRoutes.js";
import productRoutes from "./productRoutes.js";

export default (app) => {
  app.use("/api/category", categoryRoutes);
  app.use("/api/product", productRoutes);
};
