function GoodsItem(props) {
    const {
        id, 
        name, 
        description, 
        price, 
        full_background,
        addToBasket = Function.prototype,
    } = props;

    // const id = props.mainId
    // const name = props.displayName
    // const description = props.displayDescription
    // const price = props.price.finalPrice
    // const full_background = props.granted[0].images.background
    // const addToBasket = props.addToBasket

    return(
        <div className="card" id={id}>
            <div className="card-image">


                {full_background == null ? <img src="no_product.jpg" alt={name}/> : <img className="bg-img" src={full_background} alt={name}/>}
                
                <span className="card-title">{name}</span>
            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button 
                    className="btn"
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }
                >
                    Купить
                </button>
                <span className="right">{price}</span>
            </div>
        </div>
    );
}

export { GoodsItem};