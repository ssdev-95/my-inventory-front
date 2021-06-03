import { database } from "@/services/db/DBConfig";
import { Product } from "@/types";

const collname = process.env.NEXT_DB_COLLECTION

export const Controller = {
  async get() {
    const data = await database
      .collection(process.env.NEXT_DB_COLLECTION)
      .get();
    const results: Product[] = data.docs.map((prod) => {
      return {
        id: prod.id,
        name: prod.data().name,
        category: prod.data().category,
        quantity: prod.data().quantity,
        expiration: prod.data().expirateon,
      };
    });

    return results;
  },
  async set(product: Product) {
    const producto = {
      ...product,
      expirateon: product.expiration,
    };

    return await database.collection(collname).add(producto);
  },
  async update(id: string) {},
  async delete(id: string) {},
};
