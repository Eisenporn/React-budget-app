const HomePage = () => {
    return (
        <section>
            <div className="container">
                <header>
                    <h1>Общий баланс: 30 000 руб.</h1>
                </header>

                <div className="form">
                    <h2>Добавить операцию</h2>
                    <form action="">
                        <input type="text" name="total" placeholder="30 000 руб." />
                        <select name="category">
                            <option value="salary">Заработая плата</option>
                        </select>
                        <button className="button">
                            Добавить операцию
                        </button>
                    </form>
                </div>

                <div className="wrapper">
                    <h2>Операции</h2>

                    <div className="filter">
                        <button className="filter__butoon">Все операции</button>
                        <button className="filter__butoon">Все доходы</button>
                        <button className="filter__butoon">Все расходы</button>
                    </div>

                    <div className="items">
                        <div className="item">
                            <div className="item_left">
                                <div className="circle">

                                </div>

                                <p className="category">
                                    Категория: продукты
                                </p>
                            </div>
                            <div className="item__right">
                                <p className="total">
                                    2 2500 руб.
                                </p>

                                <button className="item__button">Remove</button>
                            </div>
                        </div>
                    </div>

                    <div className="pagination">
                        <button className="pagination__button">
                            <span>1</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage;