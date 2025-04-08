import React from 'react';
import './Blogs.css';

const blogData = [
  {
    title: "Music Therapy",
    description: "Listening to music & other audio files often enlightens our mood.",
    img: "/images/music.png",
  },
  {
    title: "Video Therapy",
    description: "Gain insights, find comfort, and connect with your healing journey.",
    img: "/images/video.png",
  },
  {
    title: "Yoga Therapy",
    description: "Yoga and exercise plays a very important role in our lives.",
    img: "/images/yoga.png",
  },
  {
    title: "Laughing Therapy",
    description: "Laughing is the only medicine which refreshes our mind.",
    img: "/images/laughing.png",
  },
  {
    title: "Reading Therapy",
    description: "Motivational quotes and books can help us to divert and change our mood.",
    img: "/images/reading.png",
  },
  {
    title: "Spiritual Therapy",
    description: "Helps you to become more mindful in your thinking.",
    img: "/images/spiritual.png",
  },
];

const Blogs = () => {
  return (
    <div className="blog-container">
      <div className="blog-grid">
        {blogData.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.img} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
