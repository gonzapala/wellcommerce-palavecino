//@ts-check
import Item from './Item';

export default function ItemList({ items }) {
    const listado = items;

    return (
        <>
         <div id="flix-inpage"></div>
            {listado &&
                listado.length === 0 ? <p className="text-light text-center">No se encontró ningún producto.</p> :
                listado.map((item) => (
                    <div className='col-sm-3' key={item.id}>
                        <Item item={item} ></Item>
                    </div>
                ))}
                <script
                type="text/javascript"
                src="//media.flixfacts.com/js/loader.js"
                data-flix-distributor="4780"
                data-flix-language="f4"
                data-flix-brand="SAMSUNG"
                data-flix-mpn="UN43T5300AGCZB"
                data-flix-ean="8806090484377"
                data-flix-sku=""
                data-flix-button="flix-minisite"
                data-flix-inpage="flix-inpage"
                data-flix-button-image=""
                data-flix-fallback-language=""
                data-flix-price=""></script>
        </>
    )
}
