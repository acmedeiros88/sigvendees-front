import NextLink from "next/link";
import { useRouter } from "next/router";
// MUI CORE
import { Box, Button, ListItem, SxProps, Theme } from "@mui/material";

interface NavItemProps {
  href: string;
  title: string;
  icon: React.ReactNode;
  others?: any;
}

export default function NavItem(props: NavItemProps) {
  const router = useRouter();
  const active = props.href ? router.pathname === props.href : false;

  const styleLinkItem: SxProps<Theme> | any = {
    backgroundColor: active && "rgba(255,255,255, 0.08)",
    borderRadius: 1,
    color: active ? "secondary.main" : "neutral.300",
    fontWeight: active && "fontWeightBold",
    justifyContent: "flex-start",
    px: 3,
    textAlign: "left",
    textTransform: "none",
    width: "100%",
    height: "7vh",
    "& .MuiButton-startIcon": {
      color: active ? "secondary.main" : "neutral.400",
    },
    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.08)",
    },
  };

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
      {...props.others}
    >
      <Button
        component={NextLink}
        href={props.href}
        passHref
        startIcon={props.icon}
        disableRipple
        sx={styleLinkItem}
      >
        <Box sx={{ flexGrow: 1 }}>{props.title}</Box>
      </Button>
    </ListItem>
  );
}
