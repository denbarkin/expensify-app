
export const setTextFilter = (text = '') => {
    return({
        type : 'SET_TEXT_FILTER',
        text
    })
};

export const sortByAmount = () => {
    return({
        type : 'SORT_BY_AMOUNT_FILTER'
    });
}

export const sortByDate = () => {
    return({
        type : 'SORT_BY_DATE_FILTER'
    });
}

export const setStartDateFilter = (startDate = 0) => {
    return({
        type : 'START_DATE_FILTER',
        startDate
    })
};

export const setEndDateFilter = (endDate = 0) => {
    return({
        type : 'END_DATE_FILTER',
        endDate
    })
};
