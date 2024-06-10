import PropTypes from "prop-types"

class ReviewResponse {
    constructor(response){
        this.response = response
    }
}

ReviewResponse.propTypes = {
    response: PropTypes.string
}

export default ReviewResponse