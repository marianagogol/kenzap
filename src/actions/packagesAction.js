export const changeSelected = (newPackages) => ({
    type: 'CHANGE_SELECTED',
    payload: {
        newPackages: newPackages
    }
})