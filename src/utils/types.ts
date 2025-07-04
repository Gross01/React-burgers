export type TIngredient = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v?: number;
}

export type TConstructorIngredient = Pick<TIngredient, 'name' | 'image' | 'price'> & {
    id: string;
    ingredientId: string
    bun: boolean;
}

export type TOptionsType = {
    method?: string;
    headers?: HeadersInit;
    body?: BodyInit | null;
}

export type TSuccess = {
    success: boolean,
    user: {
        name: string,
        email: string,
    }
}
