import test = require('blue-tape');
import cheerio = require('cheerio');

const HTML = '<h2 class="title">Hello world</h2>';
const RESULT = '<h2 class="title welcome">Hello there!</h2>';

test( 'Simple html check', function(t) {
  const $ = cheerio.load( HTML );

  $('h2.title').text('Hello there!');
  $('h2').addClass('welcome');

  const str = $.html();
  t.equal( str, RESULT, 'HTML correct' );

  return t.end();
});

test( '#get()', function(t) {
  const $ = cheerio.load('<ul> <li></li> <li></li> </ul>');
  let $ul: cheerio.Cheerio = $('ul');
  let $lis: cheerio.Cheerio = $('li');

  let lis: cheerio.Element[] = $lis.get();
  t.equal( lis.length, 2, 'Got the right number of elements' );
  t.assert( lis instanceof Array, 'Result was an Array' );
  t.equal( lis[0].tagName, 'li', 'First element has the correct tagName' );
  t.equal( lis[1].tagName, 'li', 'Second element has the correct tagName' );

  let ul: cheerio.Element = $ul.get(0);
  t.equal( lis[0].parent, ul, 'First element has the correct parent' );
  t.equal( lis[1].parent, ul, 'Second element has the correct parent' );

  return t.end();
});
