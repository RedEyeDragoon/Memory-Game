// Import stylesheets
import './style.css';

// Write Javascript code!
  // card options 
  const cardArray = [
    {
      name: 'fries',
      img: 'https://img5.cliparto.com/pic/s/180394/6997135-fried-potatoes-box-takeaway-french-fries.jpg'
    },
    {
      name: 'fries',
      img: 'https://img5.cliparto.com/pic/s/180394/6997135-fried-potatoes-box-takeaway-french-fries.jpg'
    },
    {
      name: 'cheeseburger',
      img: 'https://justdoughit.com/wp-content/uploads/7I1A0192-100x100.jpg'
    },
    {
      name: 'cheeseburger',
      img: 'https://justdoughit.com/wp-content/uploads/7I1A0192-100x100.jpg'
    },
    {
      name: 'hotdog',
      img: 'https://ae01.alicdn.com/kf/H47ff86b9228b480aaf111bc0676cdf03F/Halloween-Costume-For-Adult-Hot-Dog-Costume-Funny-Hotdog-Food-Cosplay-carnival-costume-mens-party-cosplay.jpg_100x100.jpg'
    },
    {
      name: 'hotdog',
      img: 'https://ae01.alicdn.com/kf/H47ff86b9228b480aaf111bc0676cdf03F/Halloween-Costume-For-Adult-Hot-Dog-Costume-Funny-Hotdog-Food-Cosplay-carnival-costume-mens-party-cosplay.jpg_100x100.jpg'
    },
    {
      name: 'ice-cream',
      img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0bedb362-1325-47fe-8fb8-8a1224de0221/defk2wa-05d7759a-c8c8-49e5-b307-58f687206360.png/v1/fill/w_100,h_100,strp/mint_chocolate_ice_cream_pixel_avatar_by_sailortrekkie92_defk2wa-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwIiwicGF0aCI6IlwvZlwvMGJlZGIzNjItMTMyNS00N2ZlLThmYjgtOGExMjI0ZGUwMjIxXC9kZWZrMndhLTA1ZDc3NTlhLWM4YzgtNDllNS1iMzA3LTU4ZjY4NzIwNjM2MC5wbmciLCJ3aWR0aCI6Ijw9MTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qdJKZPxZ1JqkAoUVfdSXeBYK1ZBvJekf_h_deoMiunM'
    },
    {
      name: 'ice-cream',
      img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0bedb362-1325-47fe-8fb8-8a1224de0221/defk2wa-05d7759a-c8c8-49e5-b307-58f687206360.png/v1/fill/w_100,h_100,strp/mint_chocolate_ice_cream_pixel_avatar_by_sailortrekkie92_defk2wa-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwIiwicGF0aCI6IlwvZlwvMGJlZGIzNjItMTMyNS00N2ZlLThmYjgtOGExMjI0ZGUwMjIxXC9kZWZrMndhLTA1ZDc3NTlhLWM4YzgtNDllNS1iMzA3LTU4ZjY4NzIwNjM2MC5wbmciLCJ3aWR0aCI6Ijw9MTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qdJKZPxZ1JqkAoUVfdSXeBYK1ZBvJekf_h_deoMiunM'
    },
    {
      name: 'milkshake',
      img: 'https://s7.orientaltrading.com/is/image/OrientalTrading/PDP_VIEWER_THUMB$NOWA$/chocolate-milkshake-cardboard-stand-up~13960105'
    },
    {
      name: 'milkshake',
      img: 'https://s7.orientaltrading.com/is/image/OrientalTrading/PDP_VIEWER_THUMB$NOWA$/chocolate-milkshake-cardboard-stand-up~13960105'
    },
    {
      name: 'pizza',
      img: 'https://i5.walmartimages.com/asr/3f827cc0-61c2-4174-89d6-5d8d5df92b9c_1.7af13333a52a706a3ade1bfe51dbf34e.jpeg?odnWidth=100&odnHeight=100&odnBg=ffffff'
    },
    {
      name: 'pizza',
      img: 'https://i5.walmartimages.com/asr/3f827cc0-61c2-4174-89d6-5d8d5df92b9c_1.7af13333a52a706a3ade1bfe51dbf34e.jpeg?odnWidth=100&odnHeight=100&odnBg=ffffff'
    }
  ]

  const grid = document.querySelector('.grid');

  //create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'https://www.aceplayingcards.com.au/wp-content/uploads/2018/12/drifters-card-back-100x100.jpg');
      card.setAttribute('data-id', i);
      grid.appendChild(card);
    }
}

  createBoard();