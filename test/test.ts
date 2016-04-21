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

