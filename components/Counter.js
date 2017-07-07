import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
	constructor(props) {
		super(props);
	}

	getItemCount () {
		var itemCount = 0;
		this.props.items.forEach(function(item){
			itemCount+= item.quantity;
		});
		return itemCount;
	}

	render() {
		var itemCount = this.getItemCount();
		return (
			<div >
				<h2>Counter</h2>
				<p>
					Count: <span> {itemCount} </span>
				</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    };
};

export default connect(mapStateToProps)(Counter);
//export default Counter