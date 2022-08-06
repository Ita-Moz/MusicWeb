import classNames from 'classnames/bind';
import Header from '../Header';
import Mainpage from '../Mainpage';
import Sidebar from '../Sidebar';
import styles from './Wrapper.module.scss';
import { Songs } from '../../Context';
import DataSongs from '../../data/songs.json';
import Player from '../Player';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Wrapper() {
    const [song, setSong] = useState(DataSongs[0]);

    const handleSetSong = (idSong) => {
        // eslint-disable-next-line eqeqeq
        const song = DataSongs.find((song) => song.id == idSong);
        if (!song) {
            setSong(DataSongs[0]);
        } else {
            setSong(song);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
                <div className={cx('left')}>
                    <Sidebar />
                </div>
                <div className={cx('right')}>
                    <div className={cx('header')}>
                        <Header />
                    </div>
                    <div className={cx('list-music')}>
                        <Mainpage />
                    </div>
                    <div className={cx('player')}>
                        <Player />
                    </div>
                </div>
            </Songs.Provider>
        </div>
    );
}
export default Wrapper;
