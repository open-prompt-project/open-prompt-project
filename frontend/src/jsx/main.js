import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import brown from "@material-ui/core/colors/brown";
import indigo from "@material-ui/core/colors/indigo";
import blue from "@material-ui/core/colors/blue";
import lightGreen from "@material-ui/core/colors/lightGreen";

import Navbar from './navbar';
import HomeMain from './home_main';


const theme = createTheme({
	palette: {
    primary: {
      main: "#E3735E",
      contrastText: "#FFF"
    },
    secondary: {
      main: "#faf0e6",
      contrastText: "#FFF"
    },
    // warning: {
    //   main: blue[700],
    //   contrastText: "#FFF"
    // },
  },
	typography: {
    fontFamily: [
      'Karla',
      'Mirza',
			'Muli',
			'Noto Sans',
			'Hind Guntur',
			'Arial'
    ].join(','),
		body2: {
			color: "white"
		},
  },
	spacing: 8,
});


var pages = {
	"#navbar": function test1() {return <Navbar title={title} menu={menu} />},
	"#main": function test1() {return <HomeMain />}
}

for (let page in pages) {
	var pageElement = document.querySelector(page);
	if (pageElement) {
		createRoot(pageElement).render(
			<MuiThemeProvider theme={theme}>
						{pages[page].call()}
			</MuiThemeProvider>
		);
	}
}