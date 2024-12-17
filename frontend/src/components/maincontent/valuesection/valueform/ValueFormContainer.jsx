import {connect} from "react-redux";
import ValueForm from "./ValueForm";
import {
    enterX,
    enterY,
    enterR,
    checkEntry,
    clearEntries
} from "../../../../redux/modules/values";

function mapStateToProps(state) {
    return {
        rValues: state.values.rValues,
        rCurrent: state.values.rCurrent,
        xValues: state.values.xValues,
        xCurrent: state.values.xCurrent,
        yMin: state.values.yMin,
        yMax: state.values.yMax,
        yCurrent: state.values.yCurrent
    };
}
function mapDispatchToProps(dispatch) {
    return {
        enterR: (value) => dispatch(enterR(value)),
        enterX: (value) => dispatch(enterX(value)),
        enterY: (value) => dispatch(enterY(value)),
        checkEntry: () => dispatch(checkEntry()),
        clearEntries: () => dispatch(clearEntries())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ValueForm)