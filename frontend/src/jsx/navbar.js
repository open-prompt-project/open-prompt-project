import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import Tooltip from '@mui/material/Tooltip';

import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

// react.school/material-ui

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  offset: theme.mixins.toolbar
}));


export default function ButtonAppBar({title, menu, login}) {
	// Adapted from https://react.school/material-ui/appbar/
  const classes = useStyles();
	const icons = {
		"Login": <LoginIcon />,
		"Logout": <LogoutIcon />,
		"Home": <HomeIcon />,
    "Create": <AddIcon />,
	};



  return (
    <React.Fragment>
      <AppBar>	
        <Toolbar color="primary">
          <Typography variant="h6" className={classes.title}>
						{title}
            {title == 'Kamutiv Tech | Error' && '	\u{1F627}'}
          </Typography>
					{menu.map(menu => (
						<form action={menu.link} key={menu.key}>
							<Tooltip title={menu.name}>
			          <IconButton color="inherit" type="submit">
  			          {icons[menu.name]}
    			      </IconButton>
							</Tooltip>
						</form>
					))}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
