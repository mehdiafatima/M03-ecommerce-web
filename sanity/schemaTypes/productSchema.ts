import { defineType, defineField } from "sanity";


export const productSchema = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      defineField({
        name: "name",
        title: "Name",
        type: "string",
      }),
      defineField({
        name: "description",
        title: "Description",
        type: "string",
      }),
      defineField({
        name: "price",
        title: "Price",
        type: "string",
      }),
      defineField({
        name: "originalPrice",
        title: "Original Price",
        type: "string",
      }),
      defineField({
        name: "discount",
        title: "Discount",
        type: "string",
      }),
      defineField({
        name: "image",
        title: "Image",
        type: "image",
      }),
      defineField({
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "name",
          maxLength: 96,
        },
      }),
    ],
  });
  