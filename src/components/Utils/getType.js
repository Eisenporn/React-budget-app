import { INCOME_CATEGORIES } from "../../data/categories";
import TYPES from "../Types/types";

const getType=(category)=>{
    if (Object.keys(INCOME_CATEGORIES).includes(category)){
        return TYPES.INCOME;
    }

    return TYPES.EXPENSE;
};

export default getType