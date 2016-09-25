import React, {Component} from "react";
import {render} from "react-dom";
import ProductSelection from "./product_selection";
import 'grommet/scss/vanilla/index.scss';
import css from "./style.css";
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Meter from 'grommet/components/Meter'; 
import Title from 'grommet/components/Title';
import Value from 'grommet/components/Value';
class AppleStore extends Component {
	render() {
		return <App > 
			<Header direction="row" 
				justify="between" 
				large={true}           
				pad={{horizontal: 'medium'}}>           
				<Title>Buy a Mackbook Pro</Title>         
			</Header>
			<Box pad="medium">
				<ProductSelection />
			</Box>
		</App>
	}
}

render(<AppleStore />, document.getElementById("content"));
