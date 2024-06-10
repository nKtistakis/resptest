import PropTypes from 'prop-types';

class Review {
    constructor(reviewer, review, rating){
        this.reviewer = reviewer;
        this.review = review;
        this.rating = rating;
    }
}

Review.propTypes = {
    reviewer: PropTypes.string,
    review: PropTypes.string,
    rating: PropTypes.number,
}

export default Review;