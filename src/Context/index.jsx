// dfhasdjfhahttps://github.com/Luuix02/catalogo.git
import { createContext , useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [count, setCount]= useState(0)
    
    const [isProductDetailOpen, setIsProductDetailOpen]=
    useState(false)
   
    const openProductDetail = () =>
    setIsProductDetailOpen(true)
    
    const closeProductDetail = () =>
    setIsProductDetailOpen(false)

    const [productToShow, setProductToShow] = useState({})
    return (
         <CartContext.Provider value = {{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
         
         }}
         
         >
            {children}
         </CartContext.Provider>
 )   
}
