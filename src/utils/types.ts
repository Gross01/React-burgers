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

export type TUser = {
    name?: string,
    email: string,
    password?: string,
}

export type TOrdersFeedItem = {
    _id: string,
    ingredients: string[],
    status: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    number: number
}

export type TOrdersFeedMessage = {
    success: boolean,
    orders: TOrdersFeedItem[],
    total: number,
    totalToday: number,
}