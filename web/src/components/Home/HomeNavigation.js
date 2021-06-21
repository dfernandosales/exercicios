import React from 'react';
import { Toolbar, AppBar, Drawer, Divider, ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import House from '@material-ui/icons/House';
import { useLocation, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
const drawerWidth = 240;

const HomeNavigation = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar />
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List disablePadding={true}>
        
          <ListItem button component={Link} to="/">
            <ListItemIcon><House /></ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
          <ListItem button component={Link} to="/veiculos">
            <ListItemIcon><DriveEtaIcon /></ListItemIcon>
            <ListItemText primary={"Veículos"} />
          </ListItem>
          <ListItem button component={Link} to="/ultima-semana">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={"Veiculos Cadastrados na Ultima Semana"} />
          </ListItem>
          <ListItem button component={Link} to="/nao-vendidos">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={"Veiculos Não Vendidos "} />
          </ListItem>
          <ListItem button component={Link} to="/por-decada">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={"Veiculos Por Decada "} />
          </ListItem>
          <ListItem button component={Link} to="/por-marca">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={"Veiculos Por Marca "} />
          </ListItem>
        </List>
      </Drawer>
    </>
  )

}


export default HomeNavigation;