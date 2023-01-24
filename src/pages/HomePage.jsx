import Item from "../components/Item/Item";

import { useEffect, useState } from "react";
import formatMoney from "../components/Utils/formatMoney";
import { CATEGOIES } from "../data/categories";
import getType from "../components/Utils/getType";
import calculateBalance from "../components/Utils/calculeteBalance";

const initialBalanceState =0;

const initialItemsState = [];

const initialFormState = {
    value: 0,
    category: "none",
}

const HomePage = () => {
    const [items, setItems] = useState(initialItemsState);
    const [form, setform] = useState(initialFormState);
    const [balance, setbalance] = useState(initialFormState);

    useEffect(()=>{
        setbalance(calculateBalance(items));
    }, [items])

    const onChangeCategoryHandle = (event) => {
        setform((prevState) => {
            prevState = { ...prevState };
            prevState.category = event.target.value;

            return prevState;
        });
    };

    const onChangeInpitHandle = (event) => {
        setform((prevState) => {
            prevState = { ...prevState };

            const value = parseInt(event.target.value) || 0;

            if (!isNaN(value)) {
                prevState.value = value;
            }

            return prevState;
        });
    };

    const createItemsHandle = (event) => {
        setItems((prevState) => {
            prevState = [...prevState];

            prevState.push({
                category: form.category,
                total: form.value,
                type: getType(form.category),
                id: Date.now(),
                created_at: new Date(),
            });

            return prevState;
        })
    };

    const SelectOptions = Object.keys(CATEGOIES).map((category) => {
        return (
            <option key={category} value={category}>{CATEGOIES[category]}</option>
        );
    });

    return (
        <section>
            <div className="container">
                <div className="layout">
                    <header>
                        <h1>Общий баланс: {formatMoney(balance)}</h1>
                    </header>

                    <div className="form">
                        <h2>Добавить операцию</h2>
                        <form onSubmit={e => e.preventDefault()}>
                            <input type="text"
                                name="total"
                                placeholder="30 000 руб"
                                onChange={(e) => onChangeInpitHandle(e)}
                                value={form.value}
                            />
                            <select
                                name="category"
                                onChange={(e) => onChangeCategoryHandle(e)}
                            >
                                <option value="salary">Выберите категорию</option>
                                {SelectOptions}
                            </select>
                            <button
                                className="button"
                                onClick={createItemsHandle}
                            >
                                Добавить операцию
                            </button>
                        </form>
                    </div>

                    <div className="wrapper">
                        <h2>Операции</h2>

                        <div className="filter">
                            <button className="filter_button">Все операции</button>
                            <button className="filter_button">Все доходы</button>
                            <button className="filter_button">Все расходы</button>
                        </div>

                        <div className="items">
                            {
                                items.length === 0 ? <h3>Операций пока нет</h3> 
                                : 
                                items.map((item) => <Item key={item.id} item={item} />)
                            }
                        </div>

                        <div className="pagination">
                            <button className="pagination__button">
                                <span>1</span>
                            </button>

                            <button className="pagination__button">
                                <span>2</span>
                            </button>

                            <button className="pagination__button">
                                <span>3</span>
                            </button>

                            <button className="pagination__button">
                                <span>4</span>
                            </button>

                            <button className="pagination__button">
                                <span>5</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage;