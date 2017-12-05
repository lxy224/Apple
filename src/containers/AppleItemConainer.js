import {connect} from "react-redux";
import {eatApple} from "../actions";
import AppleItem from "../components/AppleItem";

const getAppleNow = (apples) =>{
    let appleNow=[];
    for (let i=0;i<apples.length;i++){
        if(!apples[i].isEaten){
            appleNow.push(apples[i])
        }
    }

    return appleNow
}

const mapStateToProps = (state) => ({
    appleNow:getAppleNow(state.apples),

})
const mapDispatchToProps = {
    onEatAppleClick:eatApple
}
const AppleItemContainer = connect(
    mapStateToProps,
    //它的作用就是像它的名字那样，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
    mapDispatchToProps
    //用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
)(AppleItem);

export default AppleItemContainer