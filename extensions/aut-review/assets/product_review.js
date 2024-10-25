let reviewsPerPage = 5; // Number of reviews per page
let currentPage = 0;
let allReviews = [
  {
    id: 1,
    username: "Jack",
    timeAgo: "1 year ago",
    rating: 5,
    content: "Faulty wiring and poor quality control. First one I received had obvious scratched brass despite being sealed so quality control must not be monitored. I liked [...]",
    helpfulVotes: 0,
    unhelpfulVotes: 0,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 9,
    comment: '',
    title: ''
  },
  {
    id: 2,
    username: "Emma",
    timeAgo: "2 months ago",
    rating: 4,
    content: "Beautiful chandelier, but installation was a bit tricky. Overall, I'm satisfied with the purchase.",
    helpfulVotes: 3,
    unhelpfulVotes: 1,
    imageUrl: "",
    imageCount : 0,
    comment: '',
    title: ''
  },
  {
    id: 3,
    username: "Michael",
    timeAgo: "6 months ago",
    rating: 3,
    content: "Decent lighting, but not as bright as I expected. The design is nice though.",
    helpfulVotes: 1,
    unhelpfulVotes: 0,
    imageUrl: "",
    imageCount : 0,
    comment: '',
    title: ''
  },
  {
    id: 4,
    username: "Sarah",
    timeAgo: "3 weeks ago",
    rating: 5,
    content: "Absolutely love this chandelier! It's exactly what I was looking for and really brightens up my dining room.",
    helpfulVotes: 7,
    unhelpfulVotes: 0,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 0,
    comment: '',
    title: ''
  },
  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },
  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },
  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },
  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },
  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },
  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },
  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },
  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },
  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },

  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },
  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },
  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },

  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },

  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },
  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },
  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },
  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },
  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },
  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },

  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },
  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },   {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },

  {
    id: 5,
    username: "David",
    timeAgo: "4 months ago",
    rating: 2,
    content: "Disappointing quality for the price. One of the arms arrived bent, and customer service was unhelpful.",
    helpfulVotes: 4,
    unhelpfulVotes: 1,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 1,
    comment: '',
    title: ''
  },
  // ... (continue with the rest of the reviews, adding imageUrl to each)
  {
    id: 20,
    username: "Charlotte",
    timeAgo: "1 day ago",
    rating: 5,
    content: "Absolutely stunning chandelier! It's the perfect statement piece for our foyer. Highly recommend!",
    helpfulVotes: 3,
    unhelpfulVotes: 0,
    imageUrl: "https://picsum.photos/200/300",
    imageCount : 0,
    comment: '',
    title: ''
  }
];
let displayedReviews = [
  {
    username: 'Alice',
    timeAgo: '2 days ago',
    rating: 4,
    title: 'Great Product!',
    content: 'This is a great product. Really loved the quality and the durability. Highly recommend!',
    comment: 'Thank you for your feedback!',
    imageUrl: 'https://picsum.photos/200/300',
    imageCount: 3,
    helpfulVotes: 10,
    unhelpfulVotes: 2,
  },
];
// Sample data - replace with dynamic data as needed
const averageRating = 4.5;
const totalReviews = 20;
const showingText = "Showing all reviews"; // Replace with dynamic value if needed
const ratingCounts = { 5: 12, 4: 5, 3: 2, 2: 1, 1: 0 }; // Example rating counts
const style = 'solid-star'; // Options: 'solid-star', 'outline-star', 'solid-circle', 'outline-circle'
const reviewImagesList = true; // Equivalent to sections.header.reviewImagesList
const customerPhotosTitle = 'Customer Photos'; // Replace with dynamic title if needed
const customerPhotos = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300'
];

const filterEnabled = true; // Equivalent to sections.header.filter
  const sortByEnabled = true; // Equivalent to sections.header.sortBy
  const translations = {
      all: 'All',
      excellent: 'Excellent',
      good: 'Good',
      average: 'Average',
      poor: 'Poor',
      terrible: 'Terrible',
      latest: 'Latest',
      oldest: 'Oldest',
      imagesSortby: 'Images',
      mostLikes: 'Most Likes'
  };

  const templateForm = {
    sections: {
      reviewItem: {
        avatar: true,
        authorName: true,
        verifiedIcon: true,
        dateTime: true,
        reviewTitle: true,
        fullContent: false,
        comment: true,
        reviewImages: true,
        reaction: true,
      },
    },
    starsForm: { style: 'solid-star' },
    media: {
      effectsWhenHoveringImages: true,
      autoHeightImages: true,
      multipleImagesOnReview: true,
      resizeImageToFit: 'cover',
    },
    languageForm: {
      verifiedBuyer: 'Verified Buyer',
      isThisHelpful: 'Is this helpful?',
    },
    languageForm: { loadMore: 'Load more' },
  };

  
  

  function getStarIcon(filled) {
    const style = templateForm.starsForm.style;
    switch (style) {
      case 'solid-star':
        return filled ? '★' : '☆';
      case 'outline-star':
        return '☆';
      case 'solid-circle':
        return filled ? '●' : '○';
      case 'outline-circle':
        return '○';
      default:
        return filled ? '★' : '☆';
    }
  }

 


  
  // Get rating options
  function getRatingOptions() {
      return [
          translations.all || 'All',
          translations.excellent || 'Excellent',
          translations.good || 'Good',
          translations.average || 'Average',
          translations.poor || 'Poor',
          translations.terrible || 'Terrible'
      ];
  }

  // Get sort options
  function getSortOptions() {
      return [
          translations.latest || 'Latest',
          translations.oldest || 'Oldest',
          translations.imagesSortby || 'Images',
          translations.mostLikes || 'Most Likes'
      ];
  }


// Generates icon based on the rating style
function getStarIcon(filled) {
    switch (style) {
        case 'solid-star': return filled ? '★' : '☆';
        case 'outline-star': return '☆';
        case 'solid-circle': return filled ? '●' : '○';
        case 'outline-circle': return '○';
        default: return filled ? '★' : '☆';
    }
}

// Calculate rating bar width as percentage
function getRatingPercentage(rating) {
    const ratingCount = ratingCounts[rating] || 0;
    return (ratingCount / totalReviews) * 100;
}

function openImageModal(imageUrl) {
  const modal = document.getElementById('image-modal');
  document.getElementById('modal-image').src = imageUrl;
  modal.style.display = 'block';
}

function closeImageModal() {
  document.getElementById('image-modal').style.display = 'none';
}

function getTranslation(key, defaultValue) {
  return templateForm.languageForm[key] || defaultValue;
}
function getAvatarColor(review) {
  const useRandomColor = templateForm.sections.reviewItem.avatar;
  return useRandomColor ? generateRandomColor(review.username) : '#FFB803';
}

function generateRandomColor(seed) {
  const hash = [...seed].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return `#${((hash & 0x00FFFFFF).toString(16).padStart(6, '0')).toUpperCase()}`;
}

function shouldShowReviewTitle() {
  return templateForm.sections.reviewItem.reviewTitle;
}

function shouldShowFullContent() {
  return templateForm.sections.reviewItem.fullContent;
}

function shouldShowComment() {
  return templateForm.sections.reviewItem.comment;
}

function shouldShowReaction() {
  return templateForm.sections.reviewItem.reaction;
}


function renderReviews() {
  const reviewsList = document.getElementById('reviews-list');
  displayedReviews.forEach(review => {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';

    reviewCard.innerHTML = `
      <div class="review-header">
        <div class="user-info" style="background-color: ${getAvatarColor(review)}">
          ${review.username[0]}
        </div>
        <div class="user-details">
          ${templateForm.sections.reviewItem.authorName ? `<span class="username">${review.username}</span>` : ''}
          ${templateForm.sections.reviewItem.verifiedIcon ? `<span class="verified-icon"><i class="fas fa-check-circle" style="color: #4CAF50;"></i> ${getTranslation('verifiedBuyer', 'Verified Buyer')}</span>` : ''}
          ${templateForm.sections.reviewItem.dateTime ? `<span class="review-date">${review.timeAgo}</span>` : ''}
        </div>
      </div>
      <div class="review-rating">
        ${[1, 2, 3, 4, 5].map(star => `<span class="star">${getStarIcon(star <= review.rating)}</span>`).join('')}
      </div>
      <div class="review-content">
        ${shouldShowReviewTitle() ? `<h3>${review.title}</h3>` : ''}
        <p>${shouldShowFullContent() ? review.content : `${review.content.slice(0, 100)}...`}</p>
        ${shouldShowComment() && review.comment ? `<div class="review-comment"><p>${review.comment}</p></div>` : ''}
      </div>
      ${review.imageUrl ? `<div class="review-image" onclick="openImageModal('${review.imageUrl}')"><img src="${review.imageUrl}" alt="Review image" class="hover-effect"></div>` : ''}
      ${shouldShowReaction() ? `
        <div class="review-footer">
          <span>${getTranslation('isThisHelpful', 'Is this helpful?')}</span>
          <button>👍 ${review.helpfulVotes}</button>
          <button>👎 ${review.unhelpfulVotes}</button>
        </div>` : ''}
    `;

    reviewsList.appendChild(reviewCard);
  });
} 


function loadMoreReviews() {
  const startIndex = currentPage * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const newReviews = allReviews.slice(startIndex, endIndex);
  
  displayedReviews = [...displayedReviews, ...newReviews];
  currentPage++;

  renderReviews();

  // Hide load more button if all reviews are displayed
  if (displayedReviews.length >= allReviews.length) {
    document.getElementById('load-more-container').style.display = 'none';
  }
}

// Initialize rating summary on page load
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize review statistics
  function initializeReviewStatistics() {
      // Set average rating number
      document.getElementById('rating-number').textContent = averageRating.toFixed(1);

      // Populate stars based on average rating
      const starsContainer = document.getElementById('stars-container');
      [1, 2, 3, 4, 5].forEach(star => {
          const starElement = document.createElement('span');
          starElement.className = 'star';
          starElement.innerHTML = getStarIcon(star <= Math.round(averageRating));
          starsContainer.appendChild(starElement);
      });

      // Set total reviews text
      document.getElementById('total-reviews').textContent = `${totalReviews} Reviews`;

      // Create rating bars for each rating (5 to 1)
      const ratingBarsContainer = document.getElementById('rating-bars');
      [5, 4, 3, 2, 1].forEach(rating => {
          const ratingBarContainer = document.createElement('div');
          ratingBarContainer.className = 'rating-bar';

          const ratingLabel = document.createElement('span');
          ratingLabel.className = 'rating-label';
          ratingLabel.textContent = `${rating} ☆`;

          const barContainer = document.createElement('div');
          barContainer.className = 'bar-container';

          const bar = document.createElement('div');
          bar.className = 'bar';
          bar.style.width = `${getRatingPercentage(rating)}%`;
          bar.style.backgroundColor = 'gold'; // Replace with dynamic color if needed

          const ratingCount = document.createElement('span');
          ratingCount.className = 'rating-count';
          ratingCount.textContent = ratingCounts[rating] || 0;

          barContainer.appendChild(bar);
          ratingBarContainer.appendChild(ratingLabel);
          ratingBarContainer.appendChild(barContainer);
          ratingBarContainer.appendChild(ratingCount);

          ratingBarsContainer.appendChild(ratingBarContainer);
      });

      // Set showing text if available
      const showingTextElement = document.getElementById('showing-text');
      if (showingText) {
          showingTextElement.style.display = 'block';
          showingTextElement.textContent = showingText;
      }
      const customerPhotosContainer = document.getElementById('customer-photos');
      const titleElement = document.getElementById('customer-photos-title');
      const photoGrid = document.getElementById('photo-grid');
      titleElement.textContent = customerPhotosTitle;

        // Check if reviewImagesList is true and there are photos
      if (reviewImagesList && customerPhotos.length > 0) {
          // Display the customer photos section
          customerPhotosContainer.style.display = 'block';

          // Add photos to the grid
          customerPhotos.forEach(photoUrl => {
              const imgElement = document.createElement('img');
              imgElement.src = photoUrl;
              imgElement.alt = 'Customer Photo';
              photoGrid.appendChild(imgElement);
          });
      }

      const filterDropdown = document.getElementById('filter-dropdown');
      const filterBySelect = document.getElementById('filterBySelect');
      
      if (filterEnabled) {
          filterDropdown.style.display = 'block';
          getRatingOptions().forEach(option => {
              const optionElement = document.createElement('option');
              optionElement.value = option;
              optionElement.textContent = option;
              filterBySelect.appendChild(optionElement);
          });
      }

      // Sort dropdown
      const sortDropdown = document.getElementById('sort-dropdown');
      const sortBySelect = document.getElementById('sortBySelect');

      if (sortByEnabled) {
          sortDropdown.style.display = 'block';
          getSortOptions().forEach(option => {
              const optionElement = document.createElement('option');
              optionElement.value = option;
              optionElement.textContent = option;
              sortBySelect.appendChild(optionElement);
          });
      }

  }

  function getLoadMoreText() {
    return templateForm.languageForm.loadMore || 'Load more';
  }

  function renderReviews() {
    const reviewsList = document.getElementById('reviews-list');
    reviewsList.innerHTML = ''; // Clear previous reviews
    displayedReviews.forEach(review => {
      const reviewCard = document.createElement('div');
      reviewCard.className = 'review-card';
      reviewCard.innerHTML = `
        <div class="user-info">
          <span class="username">${review.username}</span>
        </div>
        <div class="review-content">
          <p>${review.content}</p>
        </div>
      `;
      reviewsList.appendChild(reviewCard);
    });
  }
  initializeReviewStatistics();
  renderReviews();
  document.getElementById('load-more-button').textContent = getLoadMoreText();
  loadMoreReviews(); // Initial load
});

