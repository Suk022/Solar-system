import React, { useEffect, useState } from 'react';

const newsItemStyle = {
  display: 'flex', alignItems: 'flex-start', gap: '0.7rem', marginBottom: '1.1rem',
  background: 'rgba(40,40,40,0.13)', borderRadius: '8px', padding: '0.5rem',
};
const newsImageStyle = {
  width: '55px', height: '55px', objectFit: 'cover', borderRadius: '50%', flexShrink: 0,
  background: '#222',
};
const newsHeadlineStyle = {
  color: '#bfc3c9', fontWeight: 600, fontSize: '0.96rem', textDecoration: 'none',
  lineHeight: 1.2,
};
const newsDateStyle = {
  color: '#bfc3c9', fontSize: '0.80rem', marginTop: '0.2rem',
};

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

const SpaceNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?limit=5&ordering=-published_at');
        if (!response.ok) throw new Error('Failed to fetch news');
        const data = await response.json();
        setNews(data.results);
      } catch (err) {
        setError('Could not fetch news.');
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <div style={{ fontWeight: 700, fontSize: '1.0rem', marginBottom: '1.2rem', letterSpacing: '0.04em', color: '#fff' }}>
        Space News & Events
      </div>
      {loading && <p style={{ color: '#bfc3c9', fontSize: '0.95rem' }}>Loading...</p>}
      {error && <p style={{ color: '#bfc3c9', fontSize: '0.95rem' }}>{error}</p>}
      {!loading && !error && news.length > 0 && (
        <div>
          {news.map(article => (
            <div key={article.id} style={newsItemStyle}>
              <img src={article.image_url || 'https://via.placeholder.com/55x55?text=No+Image'} alt={article.title} style={newsImageStyle} />
              <div>
                <a href={article.url} target="_blank" rel="noopener noreferrer" style={newsHeadlineStyle}>{article.title}</a>
                <div style={newsDateStyle}>{formatDate(article.published_at)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {!loading && !error && news.length === 0 && <p style={{ color: '#bfc3c9', fontSize: '0.95rem' }}>No news found.</p>}
    </div>
  );
};

export default SpaceNews; 