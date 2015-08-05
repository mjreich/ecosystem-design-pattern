/* 
* @Author: Mike Reich
* @Date:   2015-08-05 12:30:56
* @Last Modified 2015-08-05
*/

'use strict';

import Environment from 'lib/environment'
import Provider from 'lib/provider'
import Consumer from 'lib/consumer' 

var opts = {} //No opts for now

// Set up the environment
var environment = new Environment(opts);

// Spawn the provider type, which takes energy (data) and creates a nutrient
environment.spawn(Provider);

// Spawn the consumer type, which injests a nutrient and creates waste
environment.spawn(Consumer);
