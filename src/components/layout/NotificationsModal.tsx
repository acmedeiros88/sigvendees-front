import { useState, useEffect } from 'react';
import { set, sub, formatDistanceToNow } from 'date-fns';
import {
    Box,
    List,
    Badge,
    Tooltip,
    Divider,
    Popover,
    Typography,
    IconButton,
    ListItemText,
    ListItemButton,
} from '@mui/material';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Notificacao } from '../../models/INotificacao';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

const NOTIFICATIONS = [
    {
        id: 1,
        titulo: 'Your order is placed',
        descricao: 'waiting for shipping',
        criadoEm: set(new Date(), { hours: 10, minutes: 30 }),
        isLido: true,
    },
    {
        id: 2,
        titulo: 'Teste',
        descricao: 'answered to your comment on the Minimal',
        criadoEm: sub(new Date(), { hours: 3, minutes: 30 }),
        isLido: true,
    },
    {
        id: 3,
        titulo: 'You have new message',
        descricao: '5 unread messages',
        criadoEm: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
        isLido: false,
    },
    {
        id: 4,
        titulo: 'You have new mail',
        descricao: 'sent from Guido Padberg',
        criadoEm: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
        isLido: false,
    },
    {
        id: 5,
        titulo: 'Delivery processing',
        descricao: 'Your order is being shipped',
        criadoEm: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
        isLido: false,
    },
];

export default function NotificationModal() {
    const [open, setOpen] = useState<Element | null>(null);
    const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);

    useEffect(() => {
        setNotificacoes(NOTIFICATIONS);
    }, [])

    const totalNaoLido = notificacoes.filter((item) => item.isLido === false).length;

    const handleOpen = (event: any) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const handleMarkAllAsRead = () => {
        setNotificacoes(
            notificacoes.map((notification) => ({
                ...notification,
                isLido: true,
            }))
        );
    };

    return (
        <>
            <Tooltip title="Notificações">
                <IconButton color={open ? 'primary' : 'default'} onClick={handleOpen} sx={{ mr: 2 }}>
                    <Badge badgeContent={totalNaoLido} color="error">
                        <NotificationsRoundedIcon fontSize="small" />
                    </Badge>
                </IconButton>
            </Tooltip>

            <Popover
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        mt: 1.5,
                        ml: 0.75,
                        width: 360,
                    },
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1">Notificações</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Você tem {totalNaoLido} mensagens não lidas
                        </Typography>
                    </Box>

                    {totalNaoLido > 0 && (
                        <Tooltip title="Marcar tudo como lido">
                            <IconButton color="primary" onClick={handleMarkAllAsRead}>
                                <DoneAllIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    )}
                </Box>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <List disablePadding>
                    {notificacoes.map((notification) => (
                        <NotificationItem key={notification.id} notification={notification} />
                    ))}
                </List>

            </Popover>
        </>
    );
}

function NotificationItem({ notification }: { notification: Notificacao }) {
    const title = (
        <Typography variant="subtitle2">
            {notification.titulo}
            <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
                &nbsp; {notification.descricao}
            </Typography>
        </Typography>
    );

    return (
        <ListItemButton
            sx={{
                py: 1.5,
                px: 2.5,
                mt: '1px',
                ...(!notification.isLido && {
                    bgcolor: 'action.selected',
                }),
            }}
        >
            <ListItemText
                primary={title}
                secondary={
                    <Typography
                        variant="caption"
                        sx={{
                            mt: 0.5,
                            display: 'flex',
                            alignItems: 'center',
                            color: 'text.disabled',
                        }}
                    >
                        <QueryBuilderIcon fontSize="small" />
                        {formatDistanceToNow(new Date(notification.criadoEm), { addSuffix: true })}
                    </Typography>
                }
            />
        </ListItemButton>
    );
}
