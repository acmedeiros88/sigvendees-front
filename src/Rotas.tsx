import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

const ROTAS = [
    {
        href: '/pedido',
        icon: (<InsertDriveFileIcon />),
        title: 'Pedido'
    },
    {
        href: '/estoque',
        icon: (<FormatListBulletedIcon />),
        title: 'Estoque'
    },
    {
        href: '/venda',
        icon: (<ShoppingCartIcon />),
        title: 'Venda'
    },
    {
        href: '/cliente',
        icon: (<PeopleAltIcon />),
        title: 'Cliente'
    },
    {
        href: '/receita',
        icon: (<MenuBookRoundedIcon />),
        title: 'Receita'
    },
    {
        href: '/historico',
        icon: (<BarChartIcon />),
        title: 'Histórico'
    },
    {
        href: '/balanco',
        icon: (<LayersIcon />),
        title: 'Balanço'
    }
]

export default ROTAS;