import * as functions from 'firebase-functions';
const admin = require('firebase-admin');
admin.initializeApp();

const twit = require('twit');

function capitalize(s: string): string {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

exports.wordAdded = functions.firestore
  .document('words/{wordId}')
  .onCreate((snap) => {
    const { consumer_key, consumer_secret, access_token, access_token_secret } =
      functions.config().twitter;
    const Twitter = new twit({
      consumer_key,
      consumer_secret,
      access_token,
      access_token_secret,
    });

    const { term, definition } = snap.data();
    const link = `https://www.merriam-webster.com/dictionary/${encodeURIComponent(
      term
    )}`;

    const tweet = `Learned a new word today! ${capitalize(
      term
    )} - ${definition}.\n${link}`;

    Twitter.post(
      'statuses/update',
      { status: tweet },
      function (err: any, data: any, response: any) {
        if (err) {
          console.log('err posting tweet', err);
        } else {
          console.log('tweet posted');
        }
      }
    );

    return;
  });
