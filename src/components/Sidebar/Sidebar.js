import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import logo from '../../assets/images/logo.PNG';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={logo} alt="logo" />
            </div>
            <div className={cx('footer')}>Products by Ita-Moz</div>
        </div>
    );
}
export default Sidebar;
