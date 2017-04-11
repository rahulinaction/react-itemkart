import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

/*const ButtonContainer = ({onCancelClick,onTextChange,dispatch}) => (
    <div className="button-container">
        <input type="text" name="quantity"  onChange= {this.readText} />
        <input type="button" name="cancel" value="Cancel" className="pure-button cancel"  onClick={onCancelClick} /> 
    </div>
)*/

class ButtonContainer extends Component {
	constructor(props) {
		super(props);
		this.readText = this.readText.bind(this);
		this.onCancelClick = this.onCancelClick.bind(this);
		this.onIncrement = this.onIncrement.bind(this);
		this.onDecrement = this.onDecrement.bind(this);
	}

	readText(event) {
		var value = event.currentTarget.value;
		//if(value!=""){
			this.props.onValueChange(value);
		//}
		
	}

	onCancelClick() {
		this.props.onCancelClick();
	}

	onIncrement() {
		this.props.onIncrement();
	}

	onDecrement() {
		this.props.onDecrement();
	}

	render () {
		const {quantity} = this.props;
		return (
			<div className="button-container pure-g">
				<div className="pure-u-1-2">
        			<div className="pure-g">
        				<div className="pure-u-1-5">
        					<span className="plus-icon" onClick={this.onIncrement}></span>
        				</div>
        				<div className="pure-u-3-5">
        					<input type="text" name="quantity" value={quantity}  onChange= {this.readText} />
        				</div>
        				<div className="pure-u-1-5">
        					<span className="minus-icon" onClick={this.onDecrement}></span>
        				</div>
        			</div>
        		</div>
        		<div className="pure-u-1-2">
        			<input type="button" name="cancel" value="Cancel" className="pure-button cancel"  onClick={this.onCancelClick} />
        		</div> 
    		</div>
		)
	}
}


ButtonContainer.propTypes = {
  onCancelClick: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}

export default  ButtonContainer
