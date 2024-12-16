import { useEffect, useState } from "react";
import "./youtube.css";
import "./bootstrap.css";

function Youtube() {
  const [youtubevideo, setyoutube] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBUnemRs32gHY2jjSq9ggVG4h6NezQ0FAk&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setyoutube(data.items);
      });
  }, []);

  // the [] used to the function doesn't mount or call more means it used to call only one times

  return (
    <div className="container">
      <div className="row h-100 align-items-center justify-content-center text-center">
        <div className="col-12">
          <div className="title-wraper bold video-title-wrapper">
            <b>Latest Videos</b>
            
          </div>
        </div>

        {/* Render videos */}
        {youtubevideo.map((singleVideo, i) => {
          const vidId = singleVideo.id.videoId;
          const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
          return (
            <div key={i} className="col-sm-12 col-md-4">
              <div className="singleVideoWrapper">
                <div className="videoThumbnail">
                  <a href={vidLink} target="_blank" rel="noopener noreferrer">
                    <img
                      src={singleVideo.snippet.thumbnails.high.url}
                      alt={singleVideo.snippet.title}
                    />
                  </a>
                </div>
                <div className="videoInfoWrapper">
                  <div className="videoTitle">
                    <a href={vidLink} target="_blank" rel="noopener noreferrer">
                      {singleVideo.snippet.title}
                    </a>
                  </div>
                  <div className="videoDesc">
                    {singleVideo.snippet.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Youtube;
