import fridgeLogs from './img/temp-logs.jpg';
import fridgePi from './img/pi-1024x576.jpg';
import fridgeWebapp from './img/webapp1-1024x653.jpg';
import mvcScreenshot from './img/mvc-1-285x300.png';
import huntScreenshot from './img/Screenshot_2016-03-11-23-15-421-576x1024-169x300.png';

export const profile = {
  name: 'Michael Peng',
  role: 'Software Engineer',
  email: 'mail@pengmichael.com',
  resume: 'https://pengmichaelresume.s3.us-west-2.amazonaws.com/MichaelPengResume.pdf',
  github: 'https://github.com/Penguinatormike',
};

export const projects = [
  {
    id: 'iot',
    title: 'IoT Automatic Fridge Logger',
    summary:
      'A Raspberry Pi and temperature sensor that log fridge temperatures to an online database, with a web app that flags unsafe readings.',
    tags: ['Raspberry Pi', 'IoT', 'Web app'],
    cover: fridgePi,
    link: { label: 'Watch the demo', href: 'https://www.youtube.com/watch?v=50-vFkI0qMg' },
    body: [
      { text: 'Restaurants have to log the temperature of every fridge and freezer by hand, with pen and paper. With several units that gets tedious fast, and you end up with stacks of sheets like this:' },
      { img: fridgeLogs, alt: 'Handwritten temperature log sheets' },
      { text: 'I built a prototype with a Raspberry Pi and a temperature sensor that logs fridge temperatures and stores them in an online database.' },
      { img: fridgePi, alt: 'Raspberry Pi temperature sensors in a fridge' },
      { text: 'A web server displays the data. Users can open any day that has records and see each reading. Readings outside food-safety limits (above 4 °C or below 0 °C) are highlighted in red, so it is easy to spot periods when a fridge ran too warm or too cold.' },
      { img: fridgeWebapp, alt: 'Screenshot of the temperature web app' },
    ],
  },
  {
    id: 'mvc',
    title: 'MVC Memo Storage',
    summary:
      'A PHP and MySQL web app where users sign up, write memos, and search their history, with idle sign-out and per-user isolation.',
    tags: ['PHP', 'MySQL', 'MVC'],
    cover: mvcScreenshot,
    body: [
      { text: 'Users can create an account, sign in, and write their own memos. From there they can view their last 10 memos or search through them. Users are signed out automatically after 5 minutes idle, and with cookies enabled they see their username on the home screen.' },
      { img: mvcScreenshot, alt: 'MVC website showing notes' },
      { text: 'Memos and user information live in two MySQL tables. Each user only ever sees their own posts, so one user cannot read another user’s memos. The server side is written in PHP.' },
    ],
  },
  {
    id: 'hunt',
    title: 'Android GPS Scavenger Hunt',
    summary:
      'A tiny Pokémon GO-style game: three eggs spawn within 50 m of you, and you walk to each one to catch it.',
    tags: ['Android', 'Java', 'Google Maps'],
    cover: huntScreenshot,
    body: [
      { text: 'Instead of spawning eggs all over the world, the app takes the player’s last known location and places three eggs within a 50 m radius. Walk up to an egg to catch it, and catch all three to win.' },
      { img: huntScreenshot, alt: 'An egg being found in the game' },
      { text: 'Built on Android API 21 with Google Maps. The eggs were first hard-coded around the TRU campus. I later switched to spawning them near the player so the game works anywhere. The trade-off is that random spawns can land on roads or in unsafe spots, so play in a big open area (or use a GPS spoofer).' },
    ],
  },
];

export const androidApps = [
  { name: 'Calculator', href: 'https://play.google.com/store/apps/details?id=com.peng.t00055798.com.peng.t00055798.com.peng.t00055798.calculator' },
  { name: 'Tic-Tac-Toe', href: 'https://play.google.com/store/apps/details?id=com.peng.tictactoe_peng' },
  { name: 'POS: System Test', href: 'https://play.google.com/store/apps/details?id=com.peng.pos' },
];
