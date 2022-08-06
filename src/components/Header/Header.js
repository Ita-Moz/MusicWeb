import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('all-music')}>all music</div>
                <div className={cx('discover')}>discover</div>
                <div className={cx('album')}>album</div>
            </div>
            <div className={cx('container')}>
                <div className={cx('search')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faSearch} />
                    <input className={cx('input-search')} type="text" placeholder='Tìm kiếm bài hát, nhạc sĩ' />
                </div>
            </div>
        </div>
    );
}
export default Header;
