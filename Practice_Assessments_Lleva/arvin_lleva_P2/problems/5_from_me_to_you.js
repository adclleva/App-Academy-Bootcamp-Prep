/*******************************************************************************
Write a function fromMeToYou(sentence) that returns an string where the word 'me'
is replaced with 'you'.

Examples:

fromMeToYou('that made me laugh') => 'that made you laugh'
fromMeToYou('love me or hate me') => 'love you or hate you'
*******************************************************************************/

function fromMeToYou(sentence) {
  var sentArr = sentence.split(' ');
  var newSent = [];

  for(var i = 0; i < sentArr.length; i++) {
    if(sentArr[i].indexOf('me') > -1) {
      newSent.push('you');
    } else {
      newSent.push(sentArr[i]);
    }
  }

  newSent = newSent.join(' ');
  return newSent;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fromMeToYou;
