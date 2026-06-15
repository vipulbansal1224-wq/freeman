"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

const dataFilePath = path.join(process.cwd(), "src/app/products/all-categories-data.json");

async function getData() {
  try {
    const fileContent = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (err) {
    return {};
  }
}

export async function addProduct(formData: FormData) {
  const categorySlug = formData.get("categorySlug") as string;
  const title = formData.get("title") as string;
  const imgUrl = formData.get("imgUrl") as string;

  if (!categorySlug || !title || !imgUrl) return;

  const data = await getData();
  
  if (!data[categorySlug]) {
    // Creating a new category if it doesn't exist
    data[categorySlug] = {
      title: categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      bannerImage: "",
      introText: "",
      sidebarLinks: [],
      products: []
    };
  }

  // Add product
  data[categorySlug].products.unshift({ title, img: imgUrl });

  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
  revalidatePath("/admin/products");
  revalidatePath(`/products/${categorySlug}`);
}

export async function deleteProduct(categorySlug: string, productIndex: number) {
  const data = await getData();
  
  if (data[categorySlug] && data[categorySlug].products) {
    data[categorySlug].products.splice(productIndex, 1);
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
    revalidatePath("/admin/products");
    revalidatePath(`/products/${categorySlug}`);
  }
}
