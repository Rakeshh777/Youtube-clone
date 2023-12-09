import React, { useEffect } from "react";
import "./_watchScreen.scss";
import { Col, Row } from "react-bootstrap";
import VideoMetadata from "../../Components/videoMetadata/VideoMetadata";
import VideoHorizontal from "../../Components/videoHorizontal/VideoHorizontal";
import Comments from "../../Components/comments/Comments";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  getVideById,
} from "../../redux/actions/videos.action";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const WatchScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { video, loading } = useSelector((state) => state.selectedVideo);

  useEffect(() => {
    dispatch(getVideById(id));
    // dispatch(getRelatedVideos(id));
    dispatch(getPopularVideos());
  }, [dispatch, id]);

  const { videos: relatedVideos, loading: relatedVideosLoading } = useSelector(
    (state) => state.homeVideos
  );

  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen_player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder={0}
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetadata video={video} videoId={id} />
        ) : (
          <h1>Loading....</h1>
        )}

        <Comments videoId={id} totalComments={video?.statistics.commentCount} />
      </Col>
      <Col lg={4}>
        {!relatedVideosLoading ? (
          relatedVideos.map((video) => (
            <VideoHorizontal video={video} key={video.id} />
          ))
        ) : (
          <SkeletonTheme color="#343a40" highlightColor="#3c4147">
            <Skeleton width="100%" height="130px" count={20} />
          </SkeletonTheme>
        )}
      </Col>
    </Row>
  );
};

export default WatchScreen;
