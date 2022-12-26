import { createContext, useEffect, useState } from "react";

export const ItemsContext = createContext()

const ItemProvider = ({children}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async() => {
            const response = await fetch('http://localhost:5000/items')
            const data = await response.json()
            setItems(data)
        }
        fetchItems()
    }, [])
    return <ItemsContext.Provider value={items}>{children}</ItemsContext.Provider>
}

export default ItemProvider;