import { Component } from "react";

class CardProduct extends Component{

    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
       
    }

    handleMinus = () =>{
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
        
    }

    render(){
        return(
            <div className="card">
                <div className="img-thub-prod">
                        <img src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2tlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="product_image"/>
                </div>
                <p className="product-title">Daging Ayam</p>
                <p className="product-price">Rp. 34.000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>                        
                    <input className="input-order" type="text" value={this.state.order}/>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}

export default CardProduct;