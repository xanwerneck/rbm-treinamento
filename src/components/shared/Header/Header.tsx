import { AppBar, Avatar, Box, IconButton, List, ListItem, ListItemButton, 
    ListItemIcon, ListItemText, Menu, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountBalanceWallet, AccountCircle, MoneyOff, PriceCheck } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

const _Image = require('../../../assets/logo-h.png')

export default function Header () {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{flexGrow: 1}}>
            <Avatar sx={{bgcolor: '#ffffff', width: 150}} 
            variant="square"
            alt="RMB" src={_Image} />
          </Box>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <List>
                    <ListItem disablePadding>
                      <Link to="/contasapagar">
                        <ListItemButton onClick={handleClose}>
                        <ListItemIcon onClick={handleClose}>                            
                          <MoneyOff />
                        </ListItemIcon>
                        <ListItemText primary="Contas a pagar" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link to="/contasareceber">
                        <ListItemButton onClick={handleClose}>
                        <ListItemIcon onClick={handleClose}>                            
                          <PriceCheck />
                        </ListItemIcon>
                        <ListItemText primary="Contas a receber" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link to="/plano-contas">
                        <ListItemButton onClick={handleClose}>
                        <ListItemIcon onClick={handleClose}>                            
                          <AccountBalanceWallet />
                        </ListItemIcon>
                        <ListItemText primary="Plano de contas" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link to="/dashboard">
                        <ListItemButton onClick={handleClose}>
                        <ListItemIcon onClick={handleClose}>                            
                          <PriceCheck />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                </List>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    )
}