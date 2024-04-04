import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Not Found</h3>;
    }

    return (
        <div className="goods">
            {goods.slice(20,60).map((item) => (
                <GoodsItem key={item} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    );
}

export { GoodsList };