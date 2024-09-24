"use server";
import { Prisma } from "@prisma/client";
import { prisma } from "../client";
import {
  FindCategory,
  FindPricingAdjustment,
  FindPricingAdjustmentHour,
  FindPricingAdjustmentSpecificDate,
  FindVariantWithOptions,
} from "./types-prisma";

export const findCategoriesID = async () => {
  return await prisma.category.findMany({
    select: { id: true },
  });
};

export const findCategoryWithRelations = async (id: string) => {
  return await prisma.category.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      _count: {
        select: { products: true },
      },
    },
  });
};

export const findCategory = async (id: string) => {
  return await prisma.category.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      type: true,
    },
  });
};

export const findProductsIDByCategory = async (category_id: string) => {
  return await prisma.product.findMany({
    where: { category_id },
    select: {
      id: true,
    },
  });
};

export const findProductCard = async (id: string) => {
  return await prisma.product.findUnique({
    where: { id },
    select: {
      title: true,
      sale: true,
      id: true,
      selling_price: true,
      product_images: {
        take: 1,
        orderBy: {
          is_main: "desc",
        },
        select: {
          filename: true,
          type: true,
          is_main: true,
        },
      },
      product_variants: {
        select: {
          variant: {
            select: {
              options: true,
            },
          },
        },
      },
    },
  });
};

export const findVariantsWithOptions = async () => {
  return await prisma.variant.findMany({
    select: {
      id: true,
      name: true,
      options: {
        orderBy: {
          order: "asc",
        },
        select: {
          id: true,
          value: true,
          order: true,
          variant_id: true,
        },
      },
    },
  });
};

export const findVariantWithOptions = async (id: string) => {
  return await prisma.variant.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      icon: true,
      options: {
        orderBy: {
          order: "asc",
        },
        select: {
          id: true,
          value: true,
          order: true,
          variant_id: true,
        },
      },
    },
  });
};

export const findCategories = async () => {
  return await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
  });
};
export type FindCategories = Prisma.PromiseReturnType<typeof findCategories>;

export const findPricingAdjustments = async () => {
  return await prisma.pricingAdjustment.findMany({
    select: {
      id: true,
      hours: true,
      name: true,
      type: true,
      days: true,
      months: true,
      specifics_date: true,
    },
  });
};

export const findPricingAdjustment = async (id: string) => {
  return await prisma.pricingAdjustment.findUnique({
    where: { id },
    select: {
      id: true,
      hours: true,
      name: true,
      type: true,
      days: true,
      months: true,
      specifics_date: true,
    },
  });
};

export const findProductRelationship = async (id: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        product_variants_combinations: {
          include: {
            product_variants_options: true,
          },
        },
        product_images: true,
        product_variants: true,
        product_pricing_adjustments: true,
      },
    });

    const productBase = product;

    const newProduct = {
      ...productBase,
      product_variants_combinations:
        product?.product_variants_combinations || [],
      product_images: product?.product_images || [],
      product_variants: product?.product_variants || [],
      product_variants_options:
        product?.product_variants_combinations.flatMap(
          (p) => p.product_variants_options,
        ) || [],
    };

    return newProduct;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du produit avec ses relations:",
      error,
    );
    throw error;
  }
  // return await prisma.product.findUnique({
  //   where: { id },
  //   select: {
  //     id: true,
  //     title: true,
  //     description: true,
  //     supplier: true,
  //     delivery_time: true,
  //     purchase_price: true,
  //     selling_price: true,
  //     sale: true,
  //     product_variants_combinations: {
  //       select: {
  //         id: true,
  //         ref: true,
  //         purchase_price: true,
  //         selling_price: true,
  //         sale: true,
  //         quantity_in_stock: true,
  //         product_variants_options: true,
  //       },
  //     },
  //     product_images: {
  //       select: {
  //         id: true,
  //         filename: true,
  //         type: true,
  //         is_main: true,
  //       },
  //     },
  //     product_variants: {
  //       select: {
  //         id: true,
  //         variant: {
  //           select: {
  //             id: true,
  //             name: true,
  //             options: {
  //               select: {
  //                 id: true,
  //                 value: true,
  //               },
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  // });
};

export const deleteCategory = async (id: string, cb: any) => {
  await prisma.category.delete({ where: { id } });
  cb();
};

export const findOrders = async () => {
  return await prisma.order.findMany({
    select: {
      id: true,
      firstname: true,
      lastname: true,
      email: true,
      status: true,
      address: true,
      delivery_city: {
        select: {
          name: true,
          shipping_fees: true,
        },
      },
      orders_products: {
        select: {
          id: true,
          product: {
            select: {
              id: true,
              product_images: {
                select: {
                  filename: true,
                  type: true,
                },
              },
            },
          },
          product_variant_combination: {
            select: {
              selling_price: true,
            },
          },
        },
      },
    },
  });
};

export const findOrder = async (id: string) => {
  return await prisma.order.findUnique({
    where: { id },
    select: {
      id: true,
      firstname: true,
      lastname: true,
      email: true,
      status: true,
      address: true,
      delivery_city: {
        select: {
          name: true,
          shipping_fees: true,
        },
      },
      orders_products: {
        select: {
          id: true,
          product: {
            select: {
              id: true,
              product_images: {
                select: {
                  filename: true,
                  type: true,
                },
              },
            },
          },
          product_variant_combination: {
            select: {
              selling_price: true,
            },
          },
        },
      },
    },
  });
};

export const findOrderDetail = async (id: string) => {
  return await prisma.order.findUnique({
    where: { id },
    select: {
      status: true,
      created_at: true,
      last_updated_at: true,
      firstname: true,
      lastname: true,
      phone: true,
      email: true,
      postal_code: true,
      country: true,
      address: true,
      delivery_city: {
        select: {
          name: true,
        },
      },
    },
  });
};

export const upsertCategory = async (values: FindCategory, cb: any) => {
  // TODO faire le retour d'erreur
  if (!values) return;

  try {
    const res = await prisma.category.upsert({
      where: { id: values.id || "" },
      create: values,
      update: values,
    });
    cb();
    return { ...res, status: "success" };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const upsertVariant = async (args: FindVariantWithOptions) => {
  if (!args) return;
  const { options, ...variant } = args;
  try {
    const resVariant = await prisma.variant.upsert({
      where: { id: variant.id || "" },
      update: variant,
      create: variant,
    });

    const promisesOptions =
      .filter((o) => o.value)
      .map((option) => {
        return prisma.variantOption.upsert({
          where: { id: option.id || "" },
          create: { ...option, variant_id: resVariant.id },
          update: { ...option, variant_id: resVariant.id },
        });
      });

    const resOptions = await Promise.all(promisesOptions);

    return {
      status: "success",
      data: JSON.stringify({ ...resVariant, options: resOptions }),
    };
  } catch (e) {
    console.error(e);
    return { status: "error" };
  }
};

export const findProductVariantCombinationsWithOption = async () => {
  try {
    return await prisma.productVariantCombination.findMany({
      include: {
        product_variants_options: true,
      },
    });
  } catch (e) {
    console.error(e);
  }
};

export const findLayout = async () => {
  return await prisma.layout.findFirst();
};

export const findProductsByCategoryID = async (category_id: string) => {
  return await prisma.product.findMany({
    where: { category_id },
    include: {
      category: true,
      product_images: {
        orderBy: {
          is_main: "desc",
        },
      },
    },
  });
};

export const findProduct = async (id: string) => {
  return await prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
      product_images: true,
      product_variants: {
        include: {
          variant: {
            include: {
              options: true,
            },
          },
        },
      },
      product_variants_combinations: true,
    },
  });
};

// TMP

export const findProductDetail = (id: string) => {
  return prisma.product.findUnique({
    where: { id },
    select: {
      title: true,
      description: true,
      category: {
        select: {
          name: true,
        },
      },
      product_variants: {
        select: {
          variant_id: true,
        },
      },
      product_images: {
        select: {
          filename: true,
          // type: true,
          is_main: true,
          variant_option_id: true,
        },
      },
    },
  });
};

export const findProductVariantsCombinations = (productID: string) => {
  return prisma.productVariantCombination.findMany({
    where: { product_id: productID },
    select: {
      id: true,
      quantity_in_stock: true,
      selling_price: true,
      sale: true,
      ref: true,
      id_stripe: true,
      product_variants_options: {
        select: {
          variant_option: {
            select: {
              variant_id: true,
              value: true,
            },
          },
        },
      },
    },
  });
};

export const findProductVariantCombination = (id: string) => {
  return prisma.productVariantCombination.findUnique({
    where: { id },
    select: {
      id: true,
      quantity_in_stock: true,
      selling_price: true,
      sale: true,
      ref: true,
      id_stripe: true,
      product_variants_options: {
        select: {
          variant_option: {
            select: {
              variant_id: true,
              value: true,
            },
          },
        },
      },
    },
  });
};

export const findProductVariants = (productID: string) => {
  return prisma.productVariant.findMany({
    where: { product_id: productID },
    select: {
      variant_id: true,
    },
  });
};

export const findVariantsByIDs = (ids: string[]) => {
  return prisma.variant.findMany({
    where: {
      id: {
        in: ids,
      },
    },
    select: {
      name: true,
      id: true,
      options: {
        select: {
          id: true,
          value: true,
          order: true,
        },
        orderBy: {
          order: "asc",
        },
      },
    },
  });
};

export const findPVCCart = (where: object) => {
  return prisma.productVariantCombination.findMany({
    where,
    select: {
      id: true,
      quantity_in_stock: true,
      selling_price: true,
      sale: true,
      product: {
        select: {
          id: true,
          title: true,
          product_images: {
            take: 1,
            select: {
              filename: true,
              // type: true,
            },
            orderBy: {
              is_main: "desc",
            },
          },
        },
      },
    },
  });
};

export const findDeliveryCities = () => {
  return prisma.deliveryCity.findMany({
    select: {
      id: true,
      name: true,
      shipping_fees: true,
    },
  });
};

export const findPricingAdjustmentHour = async (id: string) => {
  try {
    return await prisma.pricingAdjustmentHour.findUnique({
      where: { id },
    });
  } catch (e) {
    console.error(e);
  }
};

export const upserPricingAdjustmentHour = async (
  data: FindPricingAdjustmentHour,
) => {
  if (!data) return;
  try {
    const resUpsert = await prisma.pricingAdjustmentHour.upsert({
      where: { id: data.id || "" },
      create: data,
      update: data,
    });

    return { status: "success" };
  } catch (e) {
    return { status: "error" };
  }
};

export const findPricingAdjustmentSpecificDate = async (id: string) => {
  try {
    return prisma.pricingAdjustmentSpecificDate.findUnique({
      where: { id },
    });
  } catch (e) {
    console.error(e);
  }
};

export const upsertPricingAdjustmentSpecificDate = async (
  data: FindPricingAdjustmentSpecificDate,
) => {
  if (!data) return;
  try {
    const resUpsert = await prisma.pricingAdjustmentSpecificDate.upsert({
      where: { id: data?.id || "" },
      create: data,
      update: data,
    });

    return { status: "success" };
  } catch (e) {
    console.error(e);
    return { status: "error" };
  }
};

export const upsertPricingAdjustment = async (data: FindPricingAdjustment) => {
  try {
    if (!data) return;
    const { hours, specifics_date, ...pricingAjustment } = data;
    const resPricingAjustment = await prisma?.pricingAdjustment.upsert({
      where: { id: pricingAjustment.id || "" },
      update: pricingAjustment,
      create: pricingAjustment,
    });

    const promisesHours = hours.map((hour) => {
      const data = {
        ...hour,
        pricing_ajustment_id: resPricingAjustment.id,
      };

      return upserPricingAdjustmentHour(data);
    });
    const promisesSpecificsDate = specifics_date.map((specific_date) => {
      const data = {
        ...specific_date,
        pricing_ajustment_id: resPricingAjustment.id,
      };

      return upsertPricingAdjustmentSpecificDate(data);
    });

    await Promise.all([...promisesHours, ...promisesSpecificsDate]);

    return { status: "success" };
  } catch (e) {
    console.error(e);
    return { status: "error" };
  }
};

export const findUsers = async () => {
  try {
    const users = prisma.user.findMany();
    return users;
  } catch (e) {
    console.error(e);
  }
};

export const findUser = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    return user;
  } catch (e) {
    console.error(e);
  }
};

export const findProductRental = async (id: string) => {
  return await prisma.productVariantCombination.findUnique({
    where: { id },
    select: {
      id: true,
      ref: true,
      selling_price: true,
      caution: true,
      id_stripe: true,
      default_price_stripe: true,
      product: {
        select: {
          id: true,
          title: true,
          description: true,
          product_images: {
            orderBy: {
              is_main: "desc",
            },
            select: {
              filename: true,
              type: true,
              is_main: true,
              variant_option_id: true,
            },
          },
          category: {
            select: {
              name: true,
            },
          },
          product_variants: {
            select: {
              variant_id: true,
            },
          },
        },
      },
      product_variants_options: {
        select: {
          variant_option_id: true,
          variant_option: {
            select: {
              value: true,
              variant: {
                select: {
                  name: true,
                  icon: true,
                },
              },
            },
          },
        },
      },
    },
  });
};

export const findProductsHomePage = async () => {
  return await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      product_images: {
        take: 1,
        orderBy: {
          is_main: "desc",
        },
        select: {
          filename: true,
          type: true,
          is_main: true,
          variant_option_id: true,
        },
      },
    },
  });
};

export const findProductPricingAdjustments = async (product_id: string) => {
  return await prisma.productPricingAdjustment.findMany({
    where: { product_id },
    include: {
      pricing_adjustment: true,
    },
  });
};
