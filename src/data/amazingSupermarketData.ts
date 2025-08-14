export interface DiscountItem {
  id: number;
  imagePath: string;
  discountPercentage: number;
}

export const discountItems: DiscountItem[] = [
  {
    id: 1,
    imagePath: "./images/glocery-discount/1.png",
    discountPercentage: 25,
  },
  {
    id: 2,
    imagePath: "./images/glocery-discount/2.png",
    discountPercentage: 30,
  },
  {
    id: 3,
    imagePath: "./images/glocery-discount/3.png",
    discountPercentage: 15,
  },
  {
    id: 4,
    imagePath: "./images/glocery-discount/4.png",
    discountPercentage: 40,
  },
  {
    id: 5,
    imagePath: "./images/glocery-discount/5.png",
    discountPercentage: 20,
  },
  {
    id: 6,
    imagePath: "./images/glocery-discount/6.png",
    discountPercentage: 35,
  },
];
