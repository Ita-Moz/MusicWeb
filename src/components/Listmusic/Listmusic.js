import { Songs } from '../../Context';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Listmusic.module.scss';
import Itemmusic from './Itemmusic';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function Listmusic() {
    const { DataSongs,handleSetSong,song } = useContext(Songs);
    const [idSong, setIdSong] = useState(0);
    const handlePlayMusic = (idSong) => {
        setIdSong(idSong);
        handleSetSong(idSong); 
    };
    useEffect(() => {
        setIdSong(song.id)
    },[song])
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('stt')}>Stt</div>
                <div className={cx('name')}>name</div>
                <div className={cx('author')}>author</div>
                <div className={cx('download')}>download</div>
            </div>
            {DataSongs.map((item, index) => (
                <div
                    className={cx('music', { 'active-song': idSong === item.id })}
                    onClick={() => handlePlayMusic(item.id)}
                >
                    <Itemmusic key={index} name={item.name} author={item.author} index={index+1} />
                </div>
            ))}
        </div>
    );
}

export default Listmusic;
