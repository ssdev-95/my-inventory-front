import { database } from "@/services/db/DBConfig";
import { Product } from "@/types";

const collname = 'products';

export const Controller = {
  async get() {
    const data = await database
      .collection(collname)
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

    const res = await database
      .collection(collname)
      .add(producto);

    alert(res.id)
  },
  async update(id: string, product: Product) {
    const updated = {
      ...product,
      expirateon: product.expiration,
    };

    await database
      .collection(collname)
      .doc(id)
      .set(updated)
  },
  async delete(id: string) {
    await database
      .collection(collname)
      .doc(id)
      .delete()
  },
};
