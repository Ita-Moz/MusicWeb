import PropTypes from 'prop-types';
import './Global.scss';
function Global({ children }) {
    return children;
}

Global.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Global;