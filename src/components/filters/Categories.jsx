//@ts-check
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { categoriasContext } from '../../contextos/CategoriasContext';
import './Categories.css';

export default function Categories() {
    const [selected, setSelected] = useState(0);
	const { categorias } = useContext(categoriasContext);
    return (
        <>
            <div className='categories-container'>
                <h3>Filtrar por</h3>
                <ul className={`p-0  ${categorias.length === 0 ? "d-none" : ""}`}>
                    {categorias &&
                        categorias.map((item, i) => (
                            <li key={i} className="">
                                <Link to={`/category/${item.nombre.toLowerCase()}`}
                                    className={`${selected === item.id ? "selected" : ""}`}
                                    onClick={()=>(setSelected(item.id))}
                                    >{item.nombre}</Link>
                            </li>
                        ))}
                    <li><Link to={`/`} className={`${selected === 0 ? "selected" : ""}`}
                        onClick={()=>(setSelected(0))}>Mostrar todo</Link></li>
                </ul>
            </div>
        </>
    )
}
