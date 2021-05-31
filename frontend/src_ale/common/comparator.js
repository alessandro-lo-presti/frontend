const orderByName = (a, b) => {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    } else {
        return 0;
    }
};

const orderByViews = (a, b) => {
    if (a.views < b.views) {
        return -1;
    } else if (a.views > b.views) {
        return 1;
    } else {
        return 0;
    }
};

const orderByRating = (a, b) => {
    if (a.rating < b.rating) {
        return -1;
    } else if (a.rating > b.rating) {
        return 1;
    } else {
        return 0;
    }
};

export const comparator = {
    orderByName: orderByName,
    orderByViews: orderByViews,
    orderByRating: orderByRating,
};
