import AllTshirts from './components/AllTshirts'
import OneTshirt from './components/OneTshirt'

export default [
    { path: '/', component: AllTshirts, name: "Game" },
    { path: '/article/:id', component: OneTshirt, name: "Login" },
]