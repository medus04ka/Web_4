import {connect} from "react-redux";
import Graph from "./Graph";
import {enterX, enterY} from "../../../../redux/modules/values";

function mapStateToProps(state) {
    return {
        rCurrent: state.values.rCurrent,
        xValues: state.values.xValues,
        xCurrent: state.values.xCurrent,
        yMin: state.values.yMin,
        yMax:state.values.yMax,
        yCurrent: state.values.yCurrent,
        entries:state.table.entries
    };
}

function mapDispatchToProps(dispatch) {
    return {
        enterX: (value) => dispatch(enterX(value)),
        enterY: (value)=> dispatch(enterY(value))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Graph);