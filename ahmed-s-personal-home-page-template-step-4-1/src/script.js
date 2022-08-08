var name_players, capture;


name_players = ['https://assets.change.org/photos/4/vi/vw/VXvIVwYYaseTdQy-800x450-noPad.jpg?1528998410', 'https://resources.premierleague.com/premierleague/photos/players/250x250/p3952.png', 'http://www1.pictures.zimbio.com/gi/Manchester+United+v+Newcastle+United+Premier+qNUUUZzi1Pil.jpg', 'https://media.gettyimages.com/photos/cristiano-ronaldo-of-manchester-united-in-action-during-the-premier-picture-id1349063883?s=612x612', 'https://i2-prod.mirror.co.uk/incoming/article22129657.ece/ALTERNATES/n615/2_Ferguson-and-Beckham.jpg', 'http://images.teamtalk.com/content/uploads/2017/05/15130123/Eric-Cantona.jpg', 'https://karnchoudhary.files.wordpress.com/2011/02/van-der-sar.jpeg', 'https://i2-prod.mirror.co.uk/incoming/article13546022.ece/ALTERNATES/s615b/0_Manchester-Uniteds-Keane-reacts-during-their-English-Premier-League-soccer-match-at-Old-Trafford.jpg', 'https://resources.premierleague.com/premierleague/photos/players/250x250/p13017.png', 'http://images2.fanpop.com/image/photos/13600000/Ole-Gunnar-Solkjaer-ole-gunnar-solskjaer-13603025-379-522.jpg'];
capture = ['Ryan Giggs 11', 'Peter Schmeichel 1', 'Paul Scholes 18', 'Cristiano Ronaldo 7', 'David Beckham 7', 'Eric Cantona 7', 'Edwin van der Sar 1', 'Roy Keane 16', 'Ronnie 10', ' Ole Gunnar Solskjær 20'];
let element_photo1 = document.getElementById('photo1');
element_photo1.setAttribute("src", name_players[0]);
let element_span = document.getElementById('span');
element_span.innerText = capture[0];


document.getElementById('next').addEventListener('click', (event) => {
  name_players.push(name_players.shift());
  let element_photo12 = document.getElementById('photo1');
  element_photo12.setAttribute("src", name_players[0]);
  capture.push(capture.shift());
  let element_span2 = document.getElementById('span');
  element_span2.innerText = capture[0];

});

document.getElementById('previous').addEventListener('click', (event) => {
  name_players.unshift(name_players.pop());
  let element_photo13 = document.getElementById('photo1');
  element_photo13.setAttribute("src", name_players[0]);
  capture.unshift(capture.pop());
  let element_span3 = document.getElementById('span');
  element_span3.innerText = capture[0];

});