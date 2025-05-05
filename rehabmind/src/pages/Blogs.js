import React from 'react';
import './Blogs.css';
import { Link } from 'react-router-dom';
const blogData = [
  {
    title: "Music Therapy",
    description: "Listening to music & other audio files often enlightens our mood.",
    img: "/images/music.png",
    url: "https://open.spotify.com/playlist/5sgNEknxOyv4I4IpajS6UJ?si=2e48387b08e24329" // calming music for autism
  },
  {
    title: "Video Therapy",
    description: "Gain insights, find comfort, and connect with your healing journey.",
    img: "/images/video.png",
    url: "https://youtu.be/IPmXzg0ZL80?si=groz75AvDbu17P_w" // autism video resources
  },
  {
    title: "Yoga Therapy",
    description: "Yoga and exercise plays a very important role in our lives.",
    img: "/images/yoga.png",
    url: "https://youtube.com/playlist?list=PLHDygCsgSb2ulndrI2RafDqPzZ5psjbLL&si=yRXpSiaP880K3lEr" // Autism yoga for kids
  },
  {
    title: "Social & Communication Support Therapy",
    description: "Laughing is the only medicine which refreshes our mind.",
    img: "/images/laughing.png",
    route: "/pages/AutismFriendlyPage.js" // link to the Autism-Friendly Tools page
  },
  {
    title: "Reading Therapy",
    description: "Motivational quotes and books can help us to divert and change our mood.",
    img: "/images/reading.png",
    url: "https://www.freepsychotherapybooks.org/ebook/autism-spectrum-disorder/" // article on books for autistic kids
  },
  {
    title: "Mindfulness & Sensory Therapy",
    description: "Helps you to become more mindful in your thinking.",
    img: "/images/spiritual.png",
    route: "/sensory-mindfulness" // internal route
  },
];

const Blogs = () => {
  return (
    <div className="blog-container">
      <div className="blog-grid">
        {blogData.map((blog, index) => {
          const cardContent = (
            <div className="blog-card" key={index}>
              <img src={blog.img} alt={blog.title} />
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          );

          return blog.url ? (
            <a
              key={index}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              {cardContent}
            </a>
          ) : (
            <Link to={blog.route} key={index} style={{ textDecoration: 'none' }}>
              {cardContent}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;