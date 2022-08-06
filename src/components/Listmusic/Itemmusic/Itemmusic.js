import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import styles from './Itemmusic.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Itemmusic({ name, author,index }) {
    return (
        <div className={cx('list-music')}>
            <div>{index}</div>
            <div className={cx('name')}>{name}</div>
            <div className={cx('author')}>{author}</div>
            <div className={cx('download', 'btn')}>
                <FontAwesomeIcon className={cx('icon')} icon={faArrowAltCircleDown} />
            </div>
        </div>
    );
}

export default Itemmusic;
