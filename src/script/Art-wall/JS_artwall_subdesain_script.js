import React, { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { FaHeart, FaRegHeart, FaComment, FaTimes } from 'react-icons/fa';
import '../../Style/Art-wall/artwall_subdesain_style.css';

const ArtworkDetails = ({ artwork, onClose, isLiked, likes, comments, handleLike }) => {
const [newComment, setNewComment] = useState('');

const handleAddComment = (e) => {
e.preventDefault();
if (newComment.trim()) {
    // Handle comment submission here
    setNewComment('');
}
};

return (
<aside className="artwork-details">
    <button className="close-btn" onClick={onClose} aria-label="Close details">
    <FaTimes />
    </button>
    <div className="detail-image-container">
    <img src={artwork.url} alt={artwork.title} />
    </div>
    <div className="detail-content">
    <h2>{artwork.title}</h2>
    <div className="artist-info">
        <img src="./assets/Artwall/default-avatar.jpg" alt="Artist" className="artist-avatar" />
        <span className="artist-name">{artwork.artist || "Artist Name"}</span>
    </div>
    <p className="artwork-description">
        {artwork.description || "This artwork doesn't have a description yet."}
    </p>
    <div className="detail-actions">
        <button className="action-btn" onClick={handleLike} aria-label={isLiked ? 'Unlike' : 'Like'}>
        {isLiked ? <FaHeart className="liked" /> : <FaRegHeart />}
        <span>{likes}</span>
        </button>
        <button className="action-btn" aria-label="Comments">
        <FaComment />
        <span>{comments}</span>
        </button>
    </div>
    <div className="detail-comments">
        <h3>Comments</h3>
        <form onSubmit={handleAddComment} className='form'>
        <input
            type="text"
            className="comment-input"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            aria-label="Comment input"
        />
        <button type="submit" className="action-btn post-button">Post</button>
        </form>
    </div>
    </div>
</aside>
);
};

const ImageCard = ({ imageUrl, title, initialLikes, initialComments, artwork, onDoubleClick }) => {
const [isLiked, setIsLiked] = useState(false);
const [likes, setLikes] = useState(initialLikes);
const [comments, setComments] = useState(initialComments);
const [showComments, setShowComments] = useState(false);
const [newComment, setNewComment] = useState('');

const handleLike = (e) => {
e.stopPropagation();
setLikes(isLiked ? likes - 1 : likes + 1);
setIsLiked(!isLiked);
};

const handleAddComment = (e) => {
e.preventDefault();
e.stopPropagation();
if (newComment.trim()) {
    setComments(comments + 1);
    setNewComment('');
}
};

return (
<div className="image-card" onDoubleClick={onDoubleClick}>
    <div className="image-container">
    <img src={imageUrl} alt={title} loading="lazy" />
    <div className="image-overlay">
        <button className="action-btn" onClick={handleLike} aria-label={isLiked ? 'Unlike' : 'Like'}>
        {isLiked ? <FaHeart className="liked" /> : <FaRegHeart />}
        <span>{likes}</span>
        </button>
        
        <button 
        className="action-btn" 
        onClick={(e) => {
            e.stopPropagation();
            setShowComments(!showComments);
        }}
        aria-label="Comments"
        >
        <FaComment />
        <span>{comments}</span>
        </button>
    </div>
  </div>
    
    <div className="card-footer">
    <h3>{title}</h3>
    
    {showComments && (
        <div className="comments-section">
        <form onSubmit={handleAddComment}>
            <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            aria-label="Comment input"
            />
            <button type="submit">Post</button>
        </form>
        </div>
    )}
    </div>
</div>
);
};

const Gallery = () => {
const [selectedArtwork, setSelectedArtwork] = useState(null);
const [showDetails, setShowDetails] = useState(false);
const [globalLikes, setGlobalLikes] = useState({});
const navigateToMain = () => {
  window.location.href = '../Art-wall/artwall_main.html'; 
};

const images = [
{
    id: 1,
    url: '../../../assets/Artwall/gon_1.jpg',
    title: 'Gon muah',
    artist: 'Hunter Fan',
    description: 'This artwork depicts Gon in his iconic pose from Hunter x Hunter.',
    likes: 124,
    comments: 5
},
{
    id: 2,
    url: '../../../assets/Artwall/gon_2.jpg',
    title: 'heheheeh',
    artist: 'Anime Lover',
    description: 'A cheerful moment of Gon enjoying his adventure.',
    likes: 89,
    comments: 3
},
{
    id: 3,
    url: '../../../assets/Artwall/nanachi_1.jpg',
    title: 'taberuuu',
    artist: 'Made in Abyss Fan',
    description: 'Nanachi enjoying some delicious food.',
    likes: 89,
    comments: 3
},
{
    id: 4,
    url: '../../../assets/Artwall/killua_2.jpg',
    title: 'taberuuu 2',
    artist: 'HxH Artist',
    description: 'Lorem ipsumfsfsfsfsfsfsdfs dfsdfsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    likes: 89,
    comments: 3
},
{
    id: 5,
    url: '../../../assets/Artwall/nanachi_2.jpg',
    title: 'ahh iyahh',
    artist: 'Abyss Creator',
    description: 'Nanachi in a cute pose.',
    likes: 89,
    comments: 3
},
{
    id: 6,
    url: '../../../assets/Artwall/killua_3.jpg',
    title: 'Ih apasih',
    artist: 'Killua Fan',
    description: 'Killua with his signature smirk.',
    likes: 89,
    comments: 3
}
];


const handleArtworkDoubleClick = (artwork) => {
setSelectedArtwork(artwork);
setShowDetails(true);
// document.body.style.overflow = 'hidden'; // Prevent scrolling when details open
};

const closeDetails = () => {
setShowDetails(false);
// document.body.style.overflow = 'auto'; // Re-enable scrolling
};

const handleGlobalLike = (artworkId) => {
setGlobalLikes(prev => ({
    ...prev,
    [artworkId]: !prev[artworkId]
}));
};

const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);

useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 769);
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


return (
<div className={`gallery-main ${showDetails && isDesktop ? 'shifted' : ''}`}>
    <nav className="navbar">
      <button className="back" aria-label="Back button" onClick={navigateToMain}>
        <img src="../../assets/Artwall/Back.png" alt="Back button" />
      </button>
      <div className="search-content">
        <img className="mozi-crop" src="../../assets/Artwall/Mozi-crop.png" alt="Mozi logo" />
        <div className="search-bar">
          <span className="search-icon" aria-hidden="true">🔍</span>
          <input type="text" placeholder="Cari di sini..." aria-label="Search input" />
        </div>
      </div>
    </nav>

    <div className="gallery-container">
      <div className="masonry-grid">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            imageUrl={image.url}
            title={image.title}
            initialLikes={image.likes}
            initialComments={image.comments}
            artwork={image}
            onDoubleClick={() => handleArtworkDoubleClick(image)}
          />
        ))}
      </div>
    </div>

{showDetails && selectedArtwork && (
  <div
    className="details-overlay"
    onClick={(e) => {
    if (e.target === e.currentTarget && isDesktop) {
      closeDetails();
    }
    }}
  >
    <div
      className="details-sidebar"
      onClick={(e) => e.stopPropagation()}
    >
      <button className="close-btn" onClick={closeDetails}>
        <FaTimes />
      </button>
      <ArtworkDetails
        artwork={selectedArtwork}
        onClose={closeDetails}
        isLiked={globalLikes[selectedArtwork.id] || false}
        likes={selectedArtwork.likes + (globalLikes[selectedArtwork.id] ? 1 : 0)}
        comments={selectedArtwork.comments}
        handleLike={() => handleGlobalLike(selectedArtwork.id)}
      />
    </div>
  </div>
)}
  </div>
);

};

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="error-fallback">Gallery failed to load</div>;
    }
    return this.props.children;
  }
}

const root = createRoot(document.getElementById('gallery-content'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Gallery />
    </ErrorBoundary>
  </React.StrictMode>
);