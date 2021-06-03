import { database } from "@/services/db/DBConfig";

export const Controller = {
  async get() {
    const data = await database.collection("products").get()
    const results = data.docs

    return results
  },
  async set() {},
  async update() {},
  async delete() {},
};
