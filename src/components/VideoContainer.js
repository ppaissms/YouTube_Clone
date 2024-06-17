import { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../utils/Constant';
import VideoCard from './VideoCard';
import ShimmerVideoCart from './ShimmerVideoCart';
import { Link } from 'react-router-dom';
import HigherOrderfn from './HigherOrderfn';

const VideoContainer = () => {
    const [resData, setResData] = useState([]);
    useEffect(() => {
        getVideos();
    }, []);
    async function getVideos() {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        setResData(json.items);
    }

    if (resData.length === 0) {
        return (
            <div className='flex flex-wrap gap-2 p-2 py-3'>
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />
                <ShimmerVideoCart />


            </div>
        );
    }
    return (
        <div className='flex flex-wrap'>

            {
                resData.map((c) => <Link key={c.id} to={`/watch?v=${c.id}`}> {c.statistics.viewCount > 4000000 ? <HigherOrderfn key={c.id} children={<VideoCard key={c.id} info={c} />} /> : <VideoCard key={c.id} info={c} />}

                </Link>)
            }
        </div>
    );
};

export default VideoContainer;