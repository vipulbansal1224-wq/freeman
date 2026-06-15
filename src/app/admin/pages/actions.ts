"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addPage(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const content = formData.get("content") as string;

  await prisma.page.create({
    data: {
      title,
      slug: slug.startsWith('/') ? slug.substring(1) : slug,
      content,
    },
  });

  revalidatePath("/admin/pages");
  revalidatePath(`/${slug}`);
}

export async function deletePage(id: number) {
  await prisma.page.delete({
    where: { id },
  });
  revalidatePath("/admin/pages");
}
