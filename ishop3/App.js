﻿"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ListOfProducts from './components/ishop';

let shopText = 'ishop (интернет-магазин)';
let titleHash = require('./theadtable.json');
let productsArr = require('./products.json');

ReactDOM.render(
  <ListOfProducts
    shop={shopText}
    products={productsArr}
    title={titleHash} />,
  document.getElementById('container')
);