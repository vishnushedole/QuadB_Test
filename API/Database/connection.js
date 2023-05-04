const mongoose = require('mongoose');
const url = 'mongodb://0.0.0.0:27017/QuadB';

mongoose.connect(url,
  {
    useNewUrlParser: true
  }
);
