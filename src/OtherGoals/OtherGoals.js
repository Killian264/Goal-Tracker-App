import React, { Component } from 'react';
import OtherGoalList from './OtherGoalList';

class OtherGoals extends Component {
    shouldComponentUpdate(nextProps){
        if(this.props.otherGoalCategories === nextProps.otherGoalCategories){
            return false
        }
        return true;
    }
    render() {
        const{otherGoalCategories, deleteGoal} = this.props;
        const displayOtherGoals = otherGoalCategories.map(category => {

            if(category.render === false) {return(null)}

            return(
                <div className="othergoals" key={category.id}>
                    <div className="otherheading">
                        <div className="otherheadingheading">
                            <h1>{category.category}</h1>
                        </div>
                        <div className="otherheadingheading otherheadingheadingtimeframe">
                            <h1>TimeFrame</h1>
                        </div>
                        <div className="otherheadingheading otherheadingheadingyourprogress">
                            <h1>Your Progress</h1>
                        </div>
                    </div>
                    <OtherGoalList othergoals={category} deleteGoal={deleteGoal} addPercentage={this.props.addPercentage} subtractPercentage={this.props.subtractPercentage}/>
                </div>
            )
        })

        return(
        <div>
            {displayOtherGoals}
        </div>
        )
    }
}
export default OtherGoals