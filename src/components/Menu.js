import React, { useContext } from 'react'
import { CardContext } from '../context/allContext'
import { Link } from 'react-router-dom';

const Menu = () => {
    const { items } = useContext(CardContext);
    console.log(items)
    return (
        <>
            <nav>
                <Link to={'/'}>HOME</Link>
                <Link to={'/favcharacters'}>
                    <div>
                        <i class="pi pi-heart"></i>
                        <span>{items.length}</span>
                    </div>
                </Link>
            </nav>
        </>
    )
}

export default Menu