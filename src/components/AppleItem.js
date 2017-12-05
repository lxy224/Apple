import React from 'react';

class AppleItem extends React.Component {

    render() {
        const {appleNow,onEatAppleClick}=this.props;
        return (
            <div>
                {
                    appleNow.map(apple=>
                        <AppleSingleItem
                            key={apple.id}
                            id={apple.id}
                            weight={apple.weight}
                            onClick={()=>onEatAppleClick(apple.id)}
                        />
                    )
                }

            </div>

        );

    }


}

class AppleSingleItem extends React.Component{
    render(){
        const {id,weight,onClick}=this.props;
        return(
            <div className="appleItem">
                <div className="apple"><img src="../images/apple.png" alt=""/></div>
                <div className="info">
                    <div className="name">红苹果 - {id}号</div>
                    <div className="weight">{weight}克</div>
                </div>
                <div className="btn-div" onClick={()=>onClick()}><button>吃掉</button></div>
            </div>
        )
    }
}

export default AppleItem;