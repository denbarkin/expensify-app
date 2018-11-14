import moment from 'moment';
import {
  setStartDateFilter,
  setEndDateFilter,
  setTextFilter,
  sortByAmount,
  sortByDate
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDateFilter(moment(0));
  expect(action).toEqual({
    type: 'START_DATE_FILTER',
    startDate: moment(0)
  });
});

test('should generate set end date aciton object', () => {
  const action = setEndDateFilter(moment(0));
  expect(action).toEqual({
    type: 'END_DATE_FILTER',
    endDate: moment(0)
  });
});

test('should generate set text filter object with text value', () => {
  const text = 'Something in';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate set text filter object with default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate action object for sort by date', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE_FILTER' });
});

test('should generate action object for sort by amount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT_FILTER' });
});
