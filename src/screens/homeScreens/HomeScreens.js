import React, { useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import CategoriesBar from "../../Components/categoriesBar/CategoriesBar";
import Video from "../../Components/video/Video";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVideo from "../../Components/skeletons/SkeletonVideo";

const HomeScreens = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    activeCategory === "All"
      ? dispatch(getPopularVideos())
      : dispatch(getVideosByCategory(activeCategory));
  };
  return (
    <Container>
      <CategoriesBar />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {!loading
          ? videos.map((video) => (
              <Col lg={3} md={4} key={video.id}>
                <Video video={video} key={video.id} />
              </Col>
            ))
          : [...Array(20)].map((e, i) => (
              <Col lg={3} md={4} key={i}>
                <SkeletonVideo key={i} />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreens;
