/* 
* @Author: Mike Reich
* @Date:   2015-08-05 12:57:33
* @Last Modified 2015-08-05 @Last Modified time: 2015-08-05 12:57:33
*/

'use strict';

// A playground file for self-replicating code.

var util = require('util');

// The 'food' source
var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// An internal way of tracking creatures, used for debugging which creatures are active
var signals = []

// A count for tracking how many there are
var count = 0

// A limit for how many creatures will be spawned.
var limit = 10000

// A global spawn function
var spawn = function(creature) {
  var util = require('util');

  if(signals.length > limit) return //console.log('limiting creatures')
  eval("("+creature+")()");
}

// Base Creature class
var creature = function() {

  var signal = "creature"+count
  count += 1
  signals.push(signal)

  var task = function() {
    //console.log('my signal', signal)

    if(data.length > 0) {
      var d = data.pop() //this is work
      //console.log('eating data', d)
      setTimeout(replicate, 1)
    } //else if 
      //(signals.length > 1) return die()

    setTimeout(task, 1)
  }

  var die = function() {
    signals.shift()
    //console.log('creature die', signal)
  }

  var replicate = function() {
    //console.log('creature replicating', signal)
    spawn(spore())
  }

  var spore = function() {
    //console.log('creating spore', signal)
    //var newCreature = 
    //newCreature = newCreature.replace("interval = "+interval, "interval = "+(Math.floor(Math.random() * interval) + 1))
    return creature.toString()
  }

  //console.log('creature born ', signal)
  task()
}

// Insantiate a new creatuer
new creature()


setInterval(function() {
  //Log current state
  console.log('creatures', signals.length)
  console.log('data', data.length)
  console.log(util.inspect(process.memoryUsage()));

  // Add in 4 million new values to the array (creating 'food') when empty
  if(data.length > 0) return
  for(var i = 0; i < 4000000; i++) {
    data.push(i)
  }
}, 1000)