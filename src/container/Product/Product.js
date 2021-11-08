import { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import CardProduct from "../CardProduct/CardProduct";
import './Product.css'

class Product extends Component{

    state = {
        order: 4
    }

    handleCounterChange = (newValue) =>{
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://imgdb.net/storage/uploads/c0569de5231c2e6c1013018aa03302e201c7a01ff604d088616812842339031b.ico" alt="logo"/>
                    </div>
                    <div className="troley">
                        <img src="https://imgdb.net/storage/uploads/16df1935329fdf5bd42a43180d42ac652877e10dca46e56fb9b7838dd78447f1.png" alt="troley"/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>

                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        )
    }
}

export default Product;