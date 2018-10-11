export class Recipe {
  _id: string;
  name: string;
  description: string;
  ingredients: string[];
  picture: { thumb: string; cover: string };
  duration: number;
  steps: { order: number; description: string }[];
}
