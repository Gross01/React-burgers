import {TIngredient} from "./types";

export const getOrderPrice = (orderIngredients: (TIngredient | null | undefined)[] | undefined) => {
    if (!orderIngredients || orderIngredients.length === 0) return 0;
    let bunCount = 0
    return orderIngredients.reduce((sum: number, item) => {
        const price = item?.price ?? 0;

        if (item?.type === 'bun' && bunCount > 0) {
            return sum
        }

        if (item?.type === 'bun') {
            bunCount += 1
            return sum + price * 2
        }
        return sum + price;
    }, 0);
}
