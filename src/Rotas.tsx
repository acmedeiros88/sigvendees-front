// ICONS
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import BalanceRoundedIcon from '@mui/icons-material/BalanceRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';

const ROTAS = [
    {
        title: "Home",
        href: "/",
        icon: <HomeRoundedIcon />
    },
    {
        href: '/pedidos',
        icon: (<ReceiptRoundedIcon />),
        title: 'Pedidos'
    },
    {
        href: '/estoques',
        icon: (<Inventory2RoundedIcon />),
        title: 'Estoques'
    },
    {
        href: '/vendas',
        icon: (<ShoppingCartIcon />),
        title: 'Vendas'
    },
    {
        href: '/produtos',
        icon: (<FastfoodRoundedIcon />),
        title: 'Produtos'
    },
    {
        href: '/receitas',
        icon: (<MenuBookRoundedIcon />),
        title: 'Receitas'
    },
    {
        href: '/ingredientes-embalagens',
        icon: (<KitchenRoundedIcon />),
        title: 'Ingredientes/Embalagens'
    },
    {
        href: '/clientes',
        icon: (<PeopleAltIcon />),
        title: 'Clientes'
    },
    {
        href: '/historicos',
        icon: (<WorkHistoryRoundedIcon />),
        title: 'Históricos'
    },
    {
        href: '/balancos',
        icon: (<BalanceRoundedIcon />),
        title: 'Balanços'
    }
]

export default ROTAS;