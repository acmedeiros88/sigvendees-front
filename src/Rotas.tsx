// ICONS
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

const ROTAS = [
    {
        href: '/pedidos',
        icon: (<InsertDriveFileIcon />),
        title: 'Pedidos'
    },
    {
        href: '/estoque',
        icon: (<FormatListBulletedIcon />),
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
        icon: (<BarChartIcon />),
        title: 'Históricos'
    },
    {
        href: '/balancos',
        icon: (<LayersIcon />),
        title: 'Balanços'
    }
]

export default ROTAS;