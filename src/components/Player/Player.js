import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styles from './Player.module.scss';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Songs } from '../../Context';
const cx = classNames.bind(styles);

function Player() {
    const { song, handleSetSong } = useContext(Songs);

    const handleClickNext = () => {
        handleSetSong(song.id + 1);
    };
    const handleClickPre = () => {
        handleSetSong(song.id - 1);
    };
    const handleEnd = () => {
        handleSetSong(song.id + 1);
    };
    return (
        <div>
            <AudioPlayer
                className={cx('playing')}
                src={song.url}
                volume={0.5}
                showSkipControls={true}
                showJumpControls={true}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPre}
                onEnded={handleEnd} 
            />
        </div>
    );
}

export default Player;
