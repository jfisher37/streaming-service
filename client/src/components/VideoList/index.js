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

  let inc = false;

  const makeIncTrue = () => {
    console.log("TRUE!!!!");
    inc = true;
  };

  return (
    <div>
      {videos &&
        videos.map((video) => (
          <Card className="text-center my-3" key={video._id}>
            <Card.Header as="h2">{video.title}</Card.Header>
            <Card.Body>
              <Card.Title>{video.publishDate}</Card.Title>
              <div>Posted by: {video.videoAuthor}</div>
              <Link to={`/videos/${video._id}`} onClick={makeIncTrue}>
                <video style={{ width: 660, height: "auto" }}>
                  <source src={video.cloudURL} type="video/mp4" />
                </video>
              </Link>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default VideoList;
