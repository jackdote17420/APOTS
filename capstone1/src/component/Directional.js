import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {  gh, nbh, spdb, sptm } from '../firebase/firebase';
import About_us from './About_us';
import Bill_infomation from './Bill_infomation';
import Contact from './Contact';
import Detail from './Detail';
import Index from './Index';
import PostRequest from './PostRequest';
import Post_Product from './Post_Product';
import SellRegister from './SellRegister';
import Store from './Store';
import Support from './Support';
import Support_detail from './Support_detail';
import {push} from "firebase/database";


class Directional extends Component {
   
    addData=(item) =>{
        console.log(item);
        push(spdb, item);
        alert('thêm thành công');
      }
    addDt=(item) =>{
        console.log(item);
        push(sptm, item);
        alert('thêm thành công');
      }
    addNb=(item) =>{   
        push(nbh, item);
        alert('thêm thành công'); 
      }
    render() {
        return (
            <div>
                <Route exact path="/"> 
                    <Index/>
                 </Route>
                <Route exact path="/support"> 
                    <Support/>
                 </Route>
                <Route exact path="/support_detail"> 
                    <Support_detail/>
                 </Route>
                <Route exact path="/bill"> 
                    <Bill_infomation/>
                 </Route>
                <Route exact path="/sell"> 
                    <SellRegister getData={(item) =>this.addNb(item)} />
                 </Route>
                <Route exact path="/about_us"> 
                    <About_us/>
                 </Route>              
                <Route exact path="/detail"> 
                    <Detail/>
                 </Route>
                <Route exact path="/store"> 
                    <Store/>
                 </Route>
                <Route exact path="/contact"> 
                    <Contact/>
                 </Route>
                <Route exact path="/postproduct"> 
                    <Post_Product getData={(item) =>this.addData(item)} />
                 </Route>
                <Route exact path="/postrequest"> 
                    <PostRequest getData={(item) =>this.addDt(item)}/>
                 </Route>
               
            </div>
        );
    }
}

export default Directional;