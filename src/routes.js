import CurrencyConvertor from "./pages/CurrencyConvertor"
import Favorite from "./pages/Favorite"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"
const routes = [
    {path:"/currency-convertor",component:CurrencyConvertor},
    {path:"/favorites",component:Favorite},
    {path:"/",component:HomePage,exact:true},
    {component:NotFound},
]

export default routes;