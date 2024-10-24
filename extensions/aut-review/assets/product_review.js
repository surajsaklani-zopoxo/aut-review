// Product Reviews JavaScript

document.addEventListener('DOMContentLoaded', function() {
  let config;

  // Fetch the configuration
  fetch('/extensions/aut-review/config/settings.json')
    .then(response => response.json())
    .then(data => {
      config = data;
      initializeReviews();
    })
    .catch(error => console.error('Error loading configuration:', error));

  const reviewForm = document.getElementById('review-form');
  const reviewsList = document.getElementById('reviews-list');
  const averageRating = document.getElementById('average-rating');
  const totalReviews = document.getElementById('total-reviews');
  const loadMoreButton = document.getElementById('load-more-button');
  const filterBySelect = document.getElementById('filter-by');
  const sortBySelect = document.getElementById('sort-by');

  let allReviews = [
    {
      id: 1,
      username: 'John D.',
      rating: 4,
      content: 'Great product! I love how it fits perfectly in my kitchen. The quality is excellent and it\'s easy to clean.',
      timeAgo: '2 days ago',
      helpfulVotes: 5,
      unhelpfulVotes: 1,
      imageUrl: 'https://picsum.photos/seed/review1/200/300',
      imageCount: 3
    },
    {
      id: 2,
      username: 'Jane S.',
      rating: 5,
      content: 'Absolutely love it! The quality is outstanding. I\'ve been using it for a month now and it still looks brand new.',
      timeAgo: '1 week ago',
      helpfulVotes: 10,
      unhelpfulVotes: 0,
      imageUrl: 'https://picsum.photos/seed/review2/200/300',
      imageCount: 1
    },
    {
      id: 3,
      username: 'Mike R.',
      rating: 3,
      content: 'It\'s okay. Not as great as I expected, but it does the job. The material could be better.',
      timeAgo: '3 weeks ago',
      helpfulVotes: 2,
      unhelpfulVotes: 1
    },
    {
      id: 4,
      username: 'Sarah L.',
      rating: 5,
      content: 'Exceeded my expectations! The design is sleek and modern. It\'s a great addition to my home.',
      timeAgo: '1 month ago',
      helpfulVotes: 15,
      unhelpfulVotes: 2,
      imageUrl: 'https://picsum.photos/seed/review4/200/300',
      imageCount: 2
    },
    {
      id: 5,
      username: 'Tom K.',
      rating: 2,
      content: 'Disappointed with the purchase. It arrived damaged and customer service was not very helpful.',
      timeAgo: '2 months ago',
      helpfulVotes: 3,
      unhelpfulVotes: 8
    },
    {
      id: 6,
      username: 'Emily W.',
      rating: 4,
      content: 'Good value for money. It\'s not perfect, but it serves its purpose well. Would recommend.',
      timeAgo: '3 months ago',
      helpfulVotes: 7,
      unhelpfulVotes: 1
    }
  ];

  let displayedReviews = [];
  const reviewsPerPage = 3;
  let currentPage = 1;

  function initializeReviews() {
    applyStyles();
    updateAverageRating();
    updateRatingBars();
    updateCustomerPhotos();
    applyFilters();
    setupEventListeners();
  }

  function applyStyles() {
    document.documentElement.style.setProperty('--font-family', config.review_widget.fontFamily);
    document.documentElement.style.setProperty('--font-size', config.review_widget.fontSize);
    document.documentElement.style.setProperty('--background-color', config.review_widget.backgroundRyviu);
    document.documentElement.style.setProperty('--color-title', config.review_widget.colorTitle);
    document.documentElement.style.setProperty('--color-avatar', config.review_widget.colorAvatar);
    document.documentElement.style.setProperty('--color-write', config.review_widget.colorWrite);
    document.documentElement.style.setProperty('--background-write', config.review_widget.backgroundWrite);
    document.documentElement.style.setProperty('--color-verified', config.review_widget.colorVerified);
    document.documentElement.style.setProperty('--star-color', config.review_widget.starcolor);
    document.documentElement.style.setProperty('--star-active-color', config.review_widget.starActivecolor);
    document.documentElement.style.setProperty('--border-color', config.review_widget.borderColor);
  }

  function setupEventListeners() {
    const writeReviewButton = document.getElementById('write-review-button');
    if (writeReviewButton) {
      writeReviewButton.addEventListener('click', toggleReviewForm);
      writeReviewButton.textContent = config.review_widget.titleWrite;
    }

    if (reviewForm) {
      reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();
        submitReview();
      });
    }

    if (loadMoreButton) {
      loadMoreButton.addEventListener('click', loadMoreReviews);
      loadMoreButton.textContent = config.review_widget.loadMore;
    }

    if (filterBySelect) {
      filterBySelect.addEventListener('change', applyFilters);
    }

    if (sortBySelect) {
      sortBySelect.addEventListener('change', applyFilters);
    }
  }

  function toggleReviewForm() {
    const form = document.getElementById('review-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  }

  function updateAverageRating() {
    const ratings = allReviews.map(review => review.rating);
    const average = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    const averageRatingNumber = document.getElementById('average-rating-number');
    const averageRatingStars = document.getElementById('average-rating-stars');
    const totalReviewsCount = document.getElementById('total-reviews-count');

    if (averageRatingNumber) averageRatingNumber.textContent = average.toFixed(1);
    if (averageRatingStars) averageRatingStars.innerHTML = getStarRating(Math.round(average));
    if (totalReviewsCount) totalReviewsCount.textContent = allReviews.length;
    if (totalReviews) totalReviews.textContent = allReviews.length;
  }

  function updateRatingBars() {
    const ratingBars = document.getElementById('rating-bars');
    if (!ratingBars) return;

    const ratingCounts = [5, 4, 3, 2, 1].map(rating => ({
      rating,
      count: allReviews.filter(review => review.rating === rating).length
    }));

    ratingBars.innerHTML = ratingCounts.map(({rating, count}) => `
      <div class="rating-bar">
        <span class="rating-label">${rating} ☆</span>
        <div class="bar-container">
          <div class="bar" style="width: ${(count / allReviews.length) * 100}%"></div>
        </div>
        <span class="rating-count">${count}</span>
      </div>
    `).join('');
  }

  function updateCustomerPhotos() {
    const photoGrid = document.getElementById('customer-photos');
    if (!photoGrid) return;

    const reviewsWithPhotos = allReviews.filter(review => review.imageUrl);
    photoGrid.innerHTML = reviewsWithPhotos.slice(0, 6).map(review => `
      <img src="${review.imageUrl}" alt="Customer Photo" onclick="openImageModal(${review.id})">
    `).join('');
  }

  function submitReview() {
    const name = document.getElementById('review-name').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const comment = document.getElementById('review-comment').value;

    const newReview = {
      id: allReviews.length + 1,
      username: name,
      rating: parseInt(rating),
      content: comment,
      timeAgo: 'Just now',
      helpfulVotes: 0,
      unhelpfulVotes: 0
    };

    allReviews.unshift(newReview);
    applyFilters();
    updateAverageRating();
    reviewForm.reset();
  }

  function addReviewToList(review) {
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review-card';
    reviewElement.innerHTML = `
      <div class="review-header">
        <div class="avatar" style="background-color: ${getAvatarColor(review)}">${review.username[0]}</div>
        <div class="user-details">
          <span class="username">${review.username}</span>
          <span class="verified-icon">
            <i class="fas fa-check-circle"></i>
            ${config.review_widget.textVerified}
          </span>
          <span class="review-date">${review.timeAgo}</span>
        </div>
      </div>
      <div class="review-rating">
        ${getStarRating(review.rating)}
      </div>
      <div class="review-content">
        <p>${review.content}</p>
      </div>
      ${review.imageUrl ? `
        <div class="review-image" onclick="openImageModal(${review.id})">
          <img src="${review.imageUrl}" alt="Review image">
          ${review.imageCount > 1 ? `<span class="image-count">+${review.imageCount - 1}</span>` : ''}
        </div>
      ` : ''}
      <div class="review-footer">
        <span>${config.review_widget.helpulText}</span>
        <button onclick="voteHelpful(this, ${review.id})">👍 ${review.helpfulVotes}</button>
        <button onclick="voteUnhelpful(this, ${review.id})">👎 ${review.unhelpfulVotes}</button>
      </div>
    `;
    reviewsList.appendChild(reviewElement);
  }

  function getStarRating(rating) {
    return `
      <div class="stars">
        ${Array(5).fill().map((_, i) => `
          <span class="star ${i < rating ? 'filled' : ''}">★</span>
        `).join('')}
      </div>
    `;
  }

  function loadMoreReviews() {
    currentPage++;
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    const newReviews = displayedReviews.slice(startIndex, endIndex);
    newReviews.forEach(addReviewToList);

    if (endIndex >= displayedReviews.length) {
      loadMoreButton.style.display = 'none';
    }
  }

  function applyFilters() {
    const filterValue = filterBySelect.value;
    const sortValue = sortBySelect.value;

    displayedReviews = allReviews.filter(review => {
      if (filterValue === 'all') return true;
      return review.rating === parseInt(filterValue);
    });

    displayedReviews.sort((a, b) => {
      if (sortValue === 'newest') return new Date(b.date) - new Date(a.date);
      if (sortValue === 'highest') return b.rating - a.rating;
      if (sortValue === 'lowest') return a.rating - b.rating;
      return 0;
    });

    reviewsList.innerHTML = '';
    currentPage = 1;
    loadMoreReviews();
    loadMoreButton.style.display = displayedReviews.length > reviewsPerPage ? 'block' : 'none';
  }

  function getAvatarColor(review) {
    let hash = 0;
    for (let i = 0; i < review.username.length; i++) {
      hash = review.username.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = `hsl(${hash % 360}, 70%, 80%)`;
    return color;
  }

  window.voteHelpful = function(button, reviewId) {
    const review = allReviews.find(r => r.id === reviewId);
    if (review) {
      review.helpfulVotes++;
      button.textContent = `👍 ${review.helpfulVotes}`;
    }
  }

  window.voteUnhelpful = function(button, reviewId) {
    const review = allReviews.find(r => r.id === reviewId);
    if (review) {
      review.unhelpfulVotes++;
      button.textContent = `👎 ${review.unhelpfulVotes}`;
    }
  }

  window.openImageModal = function(reviewId) {
    const review = allReviews.find(r => r.id === reviewId);
    if (review && review.imageUrl) {
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close" onclick="closeModal()">&times;</span>
          <div class="modal-image">
            <img src="${review.imageUrl}" alt="Full size image">
          </div>
          <div class="modal-review">
            <div class="review-header">
              <div class="avatar" style="background-color: ${getAvatarColor(review)}">${review.username[0]}</div>
              <div class="user-info">
                <span class="username">${review.username}</span>
                <span class="time-ago">${review.timeAgo}</span>
              </div>
            </div>
            <div class="review-rating">
              ${getStarRating(review.rating)}
            </div>
            <div class="review-content">
              <p>${review.content}</p>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }
  }

  window.closeModal = function() {
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.remove();
    }
  }

  initializeReviews();
});
