import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

// A page of all the videos, passed into the Home.js file

// Need a list of all videos in the DB

// Probably in some kind of array to be mapped over

// Return brings back all videos from the DB

const VideoList = ({ videos }) => {
  if (!videos.length) {
    return <h3>No Videos Yet!</h3>;
  }
  console.log(videos);

  return (
    <div>
      {videos &&
        videos.map((video) => (
          <Card className="text-center my-3">
            <Card.Header as="h2" className="video-title">{video.title}</Card.Header>
            <Card.Body className="video-body">
              <Card.Title className="roboto-font">{video.publishDate}</Card.Title>
              <div className="roboto-font">Posted by: {video.videoAuthor}</div>
              <Link to={`/videos/${video._id}`}>
                <video style={{ width: 660, height: "auto" }}>
                  <source src={video.cloudURL} type="video/mp4" />
                </video>
              </Link>
              <div className="roboto-font"><Link to={`/videosCrud/${video._id}`}>Click for CRUD</Link></div>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default VideoList;
