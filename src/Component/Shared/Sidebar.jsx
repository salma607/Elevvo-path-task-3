import React, { useState } from "react";
import {
  AppBar,Toolbar,IconButton,Typography,InputBase,Box,Drawer,List,ListItem,ListItemIcon,ListItemText,
  Avatar,Menu,MenuItem,CssBaseline} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;
export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleProfileMenuClose = () => setAnchorEl(null);
  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);

  const sidebarItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Projects", icon: <FolderOpenIcon /> },
    { text: "Tasks", icon: <AssignmentIcon /> },
    { text: "Calendar", icon: <CalendarTodayIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "var(--color-header)",
          color: "var(--color-helper)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
        elevation={1}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, display: { sm: "block" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 2,
                background: "var(--color-footer)",
                width: { xs: "100%", sm: 350 },
                display: "flex",
                alignItems: "center",
                px: 2,
              }}
            >
              <SearchIcon sx={{ color: "var(--color-helper)", mr: 1 }} />
              <InputBase
                placeholder="Search…"
                sx={{
                  color: "inherit",
                  width: "100%",
                  fontSize: "1rem",
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account"
              aria-controls="profile-menu"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar
                sx={{ bgcolor: "var(--color-helper)", width: 36, height: 36 }}
              >
                <AccountCircle />
              </Avatar>
            </IconButton>
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleProfileMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={() => navigate("/Login")}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#fff",
            color: "var(--color-helper)",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {sidebarItems.map((item) => (
              <ListItem button key={item.text}>
                <ListItemIcon sx={{ color: "var(--color-helper)" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
