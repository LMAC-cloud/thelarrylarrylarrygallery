/* Shared audio paths, relative to this script at the site root. */
(() => {
  const base = document.currentScript.src;
  const urlFor = path => new URL(path.split('/').map(encodeURIComponent).join('/'), base).href;
  const titles = [
    "AFRIGHANISTAN",
    "ALL ABOUT MY HEART",
    "ANAKINS ALARMBEL",
    "AT CLUB LIBRA",
    "CHAKRA PEOPLE",
    "CHILL OUT DUDE",
    "COOLER MINDED ME",
    "DRUMBO",
    "EASEUS FISHE",
    "FUNNY SPIRITS",
    "GET UP",
    "KING LORT III",
    "LAST DAY OF SCHOOL",
    "LET THE BEAT",
    "LEX LUTHOR",
    "LMAC DJ NERDWOLFE",
    "LMAC OBEY THE ROOL",
    "LMAC THE YEAR OF THE FROG",
    "LMAC WESTMINSTER ABBY",
    "LMAC WHEN FORGIVENESS COMES TO ME",
    "LMAC WHO WILL FREE THE LION",
    "OMS BURN 1",
    "PUSHING TO THE TOP",
    "SHUT UP & RELAX ALREADY",
    "THE BOAT RIDE",
    "THE COOL ABILITY",
    "THE FLOATING SONG",
    "THE PIZZA TONITE DELIVERY DUDE IN TRAFFIC",
    "WALLETFULLAMONEY",
    "ZUZANNE'S DANCE",
    "ZUZANNE'S X FILES"
];
  window.LarryRadioPlaylist = titles.map(title => {
    const name = title + '.mp3';
    return { name, url: urlFor('Audio/' + name) };
  });
  window.LarryTypewriterSounds = {
    click: urlFor('Audio/typewriterclick.wav'),
    carriageReturn: urlFor('typewriter-carriage-return.wav'),
  };
})();
