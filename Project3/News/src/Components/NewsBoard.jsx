import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem"; // make sure this path is correct

const NewsBoard= ({category}) => {
  const [article, setarticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_Open_Api_Key
    }`;
    console.log("API Key:", import.meta.env.VITE_Open_Api_Key);

    //   fetch(url)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setarticle(data.articles); // correct field
    //     })
    //     .catch((error) => console.error("Error fetching news:", error));


    // use with error handling messeges
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("NewsAPI response:", data); // 👈 check this
        if (data.status === "ok" && data.articles) {
          setarticle(data.articles);
        } else {
          setError(data.message || "Failed to load news");
        }
      })
      .catch((err) => setError("Fetch error"))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-4">
        Latest <span className="bg-red-500 text-white px-2 rounded">News</span>
      </h1>

      {article.length > 0 ? (
        article.map((News, index) => (
          <NewsItem
            key={index}
            title={News.title}
            description={News.description}
            src={News.urlToImage}
            url={News.url}
          />
        ))
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default NewsBoard;
