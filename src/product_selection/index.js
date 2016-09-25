import React, {Component} from "react";
import {render} from "react-dom";
import Filter from "./filter";
import ProductList from "./product_list";
import css from "./style.css"
import Split from 'grommet/components/Split';
class ProductSelection extends Component {

	render() {
		return <Split>
						<Filter />
						<ProductList/>
					</Split>
	}
}

export default ProductSelection;
