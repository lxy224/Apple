import {connect} from "react-redux";
import {addApple} from "../actions";
import AppleBasket from "../components/AppleBasket";


const getAppleNow = (apples) =>{
    let quantity=0;let weight =0;
    for (let i=0;i<apples.length;i++){
        if(!apples[i].isEaten){
            quantity++;
            weight = weight+apples[i].weight;
        }
    }
    let appleNow={
        quantity:quantity,
        weight:weight
    }
    return appleNow
}
const getAppleEaten = (apples) =>{
    let quantity=0;let weight =0;
    for (let i=0;i<apples.length;i++){
        if(apples[i].isEaten){
            quantity++;
            weight = weight+apples[i].weight;
        }
    }
    let appleEaten ={
        quantity:quantity,
        weight:weight
    };
    return appleEaten
}

const mapStateToProps = (state) => ({
    appleNow:getAppleNow(state.apples),
    appleEaten:getAppleEaten(state.apples)
})
const mapDispatchToProps = {
    onPickAppleClick:addApple
}
const AppleBasketContainer = connect(
    mapStateToProps,
    //它的作用就是像它的名字那样，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
    mapDispatchToProps
    //用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
)(AppleBasket);

export default AppleBasketContainer