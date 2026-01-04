import React, { useState, useRef } from "react";

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState("");
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // free sources of api key for image genreation
  const generateImage = async () => {
    const promptText = inputRef.current.value.trim();
    if (!promptText) return;

    setLoading(true);

    // Encode prompt for URL
    const encodedPrompt = encodeURIComponent(promptText);

    const url = `https://image.pollinations.ai/prompt/${encodedPrompt}`;
    setImageUrl(url);

    setLoading(false);
  };

  return (
    <div className="ai-image-generator">
      <header className="header">
        AI Image <span>Generator</span>
      </header>

      <div className="img-loading">
        <div className="image-container">
          <img
            src={
              imageUrl || "./image.png"
            }
            alt="Generated Art"
            className="generated-image"
          />

          <div className="loading">
            {" "}
            <div className={loading ? "loading-bar-full" : "loading-bar"}>
              <div className={loading ? "loading-text" : "display-none"}>
                Loading....
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="area">
        {" "}
        <div className="search-box">
          <input
            type="text"
            ref={inputRef}
            className="searchInput"
            placeholder="Describe what you want to see"
          />
        </div>
        <button className="generate" onClick={generateImage}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default ImageGenerator;
