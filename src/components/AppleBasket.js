import React from "react"
// import PropTypes from "prop-types"
import AppleItemContainer from '../containers/AppleItemConainer'
class AppleBasket extends  React.Component{
    render(){
        const {appleNow,appleEaten,onPickAppleClick}=this.props;
        return(
            <div className="appleBasket">
                <div className="title">苹果篮子</div>
                <div className="stats">
                    <div className="section">
                        <div className="head">当前</div>
                        <div className="content">{appleNow.quantity}个苹果，{appleNow.weight}克</div>
                    </div>
                    <div className="section">
                        <div className="head">已经吃掉</div>
                        <div className="content">{appleEaten.quantity}个苹果，{appleEaten.weight}克</div>
                    </div>
                </div>
                <div className="appleList">
                    <AppleItemContainer/>
                    <div className="empty-tip" style={{"display":appleNow.quantity <=0?"block":"none"}}>苹果篮子空空如也</div>
                </div>

                <div className="btn-div">
                    <button onClick={()=>onPickAppleClick()}>摘苹果</button>
                </div>
            </div>

        )

    }
}

export default AppleBasket