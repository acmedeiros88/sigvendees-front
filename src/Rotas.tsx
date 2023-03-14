// ICONS
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import BalanceRoundedIcon from '@mui/icons-material/BalanceRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';

const ROTAS = [
    {
        href: '/pedidos',
        icon: (<ReceiptRoundedIcon />),
        title: 'Pedidos'
    },
    {
        href: '/estoque',
        icon: (<Inventory2RoundedIcon />),
        title: 'Estoque'
    },
    {
        href: '/vendas',
        icon: (<ShoppingCartIcon />),
        title: 'Vendas'
    },
    {
        href: '/clientes',
        icon: (<PeopleAltIcon />),
        title: 'Clientes'
    },
    {
        href: '/receitas',
        icon: (<MenuBookRoundedIcon />),
        title: 'Receitas'
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