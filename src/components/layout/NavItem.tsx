import NextLink from "next/link";
import { useRouter } from "next/router";
// MATERIAL UI
import { Box, Button, ListItem, SxProps, Theme } from "@mui/material";

interface NavItemProps {
  href: string;
  title: string;
  icon: React.ReactNode;
}

export default function NavItem(props: NavItemProps) {
  const router = useRouter();

  let active = false;
  if (
    props.href &&
    router.pathname.includes(props.href) &&
    props.href !== "/"
  ) {
    active = true;
  } else if (props.href === "/" && router.pathname.length === 1) {
    active = true;
  }

  const styleLinkItem: SxProps<Theme> | any = {
    backgroundColor: active && "rgba(255,255,255, 0.08)",
    borderRadius: 1,
    color: active ? "secondary.main" : "neutral.400",
    fontWeight: active && "fontWeightBold",
    justifyContent: "flex-start",
    px: 1.5,
    textAlign: "left",
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
        py: 0.5,
        px: 2.5,
      }}
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
