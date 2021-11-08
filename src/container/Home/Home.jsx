import React, {Component, Fragment} from "react";
import BlogPost from "../BlogPost/BlogPost";
import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import Product from "../Product/Product";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';



class Home extends Component {
    state = {
        showCompoent: true
    }

    render(){
        return (
            <BrowserRouter>
                {/* <div>
                    <p>YouTube Component</p>
                    <hr/>
                    <YouTubeComp 
                        time="7.20"
                        title="Tutorial ReactJS Part 1"
                        desc="200 Views . Desc 1, 2021"/>
                    <YouTubeComp
                        time="8.30"
                        title="Tutorial ReactJS Part 2"
                        desc="300 Views . Desc 3, 2021"/>
                    <YouTubeComp
                        time="9.10"
                        title="Tutorial ReactJS Part 3"
                        desc="400 Views . Desc 6, 2021"/>
                    <YouTubeComp
                        time="3.30"
                        title="Tutorial ReactJS Part 4"
                        desc="500 Views . Desc 8, 2021"/>
                    <YouTubeComp/>

                    <p>Counter</p>
                    <hr/>
                    <Product/> 
                    
                    <p>Life Cycle Component</p>
                    <hr/>
                    {
                        this.state.showComponent
                        ?
                        <LifeCycleComp/>
                        : null
                    }

                    <p>Blog Post</p>
                    <hr/>
                    <BlogPost/>
                </div> */}
               
                <Routes>
                    <Route path="/" component={BlogPost}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/lifecycle" component={LifeCycleComp}/>
                </Routes>
                
            </BrowserRouter>
        )
    }
}

export default Home;