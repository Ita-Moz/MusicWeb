import { useContext } from 'react';
import { Songs } from '../../Context';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Listmusic from '../Listmusic';
import styles from './Mainpage.module.scss';

const cx = classNames.bind(styles);
function Mainpage() {
    const { song } = useContext(Songs);
    return (
        // Title album music
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <img
                    src={song.links.images[0].url}
                    alt={song.name}
                />
                <div className={cx('title-album')}>
                    <h2>{song.name}</h2>
                    <p>{song.author}</p>
                    <button className={cx('btn', 'play-album')}>
                        <FontAwesomeIcon icon={faPlay} /> Play Album
                    </button>
                </div>
            </div>
            <Listmusic />
        </div>
    );
}
export default Mainpage;
