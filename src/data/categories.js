const INCOME_CATEGORIES = {
    salaru:"Заробтная плата",
    cashback:"Кэшбек",
    deposit:"Вклад"
};

const EXPENSE_CATEGORIES ={
    products:"Продукты",
    services:"Коммунальные услуги",
    car:"Автомобиль",
    health:"Здооровье и красота"
};

const CATEGOIES = {...INCOME_CATEGORIES, ...EXPENSE_CATEGORIES};

export{
    INCOME_CATEGORIES,
    EXPENSE_CATEGORIES,
    CATEGOIES
}