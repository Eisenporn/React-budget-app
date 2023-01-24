const Item = ({item}) => {
    const { id, category, type, total } = item;
    return (
        <div className="item">
            <div className="item_left">


                <div className={`circle ${type}`}>
                    {
                        type === 'income'
                            ?
                            <i class="fa-solid fa-credit-card"></i>
                            :
                            <i class="fa-solid fa-basket-shopping"></i>
                    }
                    {/* income */}
                </div>

                <p className="category">
                    Категория: {category}
                </p>
            </div>
            <div className="item_right">
                <p className="total">
                    {total} руб.
                </p>

                <button className="item__button">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default Item;