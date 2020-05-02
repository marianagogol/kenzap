export const changeRating = (newRating, index) => ({
    type: 'CHANGE_RELATED_RATING',
    payload: {
        index: index,
        relatedRating: newRating
    }
})