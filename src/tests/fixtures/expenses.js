import moment from "moment";

export default  [{
    id : 1,
    description : 'Gum',
    amount : 10,
    note : 'just a gum',
    createdAt: moment(0).valueOf()
},{
    id : 2,
    description : 'Water Bill',
    amount : 1020,
    note : 'Big bill',
    createdAt: moment(0).subtract(4,'days').valueOf()
},{
    id : 3,
    description : 'New Car',
    amount : 100000,
    note : 'Tesla car',
    createdAt: moment(0).add(4,'days').valueOf()
}]
