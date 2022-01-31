import CurrencyConverter from "./pages/CurrencyConverter"
import Favorite from "./pages/Favorite"
import Fund from "./pages/Fund"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"
const routes = [
    {path:"/fund",component:Fund},
    {path:"/currency-converter",component:CurrencyConverter},
    {path:"/favorites",component:Favorite},
    {path:"/",component:HomePage,exact:true},
    {component:NotFound},
]

export default routes;