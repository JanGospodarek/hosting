export interface emailData {
  name: string;
  lastName: string;
  email: string;
  description: string;
  company: string;
  uid: string;
}
export interface Car {
  brand: string;
  model: string;
  parameters: string[];
  price: number;
  imageUrl: string;
  carId: number;
  type: "sport" | "luxury";
}
export type Cars = Car[];
export type Dish = {
  name: string;
  price: number;
};
export type Dishes = Dish[];
