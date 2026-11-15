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
    id: 'migration',
    title: 'Zero-downtime MongoDB → MySQL migration',
    summary:
      'A runnable recreation of a production migration I led at Hootsuite: feature-flagged dual writes, a resumable backfill, and a reconciler, all while the service keeps serving traffic.',
    tags: ['Python', 'FastAPI', 'MongoDB', 'MySQL', 'Docker'],
    coverTerminal: [
      '$ docker compose \\',
      '    run tools demo',
      '',
      'requests   19,521',
      'errors     0',
      'drift      0',
      'PASS',
    ],
    link: { label: 'View on GitHub', href: 'https://github.com/Penguinatormike/mongo-to-mysql-migration' },
    body: [
      { text: 'At Hootsuite I moved a service off MongoDB and onto MySQL while it kept serving traffic, consolidating onto one database and saving roughly $60K a year. The production code can’t be shared, so this repo rebuilds the same approach at small scale around a small accounts API.' },
      { text: 'Each step of the migration is a feature-flag flip, not a deploy: dual writes first, then a backfill that’s safe to run against live writes, then a reconciler that finds and repairs drift before reads and writes move over to MySQL.' },
      { text: 'A load generator checks every response during the run, so “zero downtime” is measured rather than claimed. One Docker Compose command runs the whole migration end to end.' },
      { text: 'The repo also has an AGENTS.md for coding agents, backed by a pre-commit hook and CI that block changes if any core file drops below 80% test coverage. It’s a demo, not production code; the README lists what’s simplified.' },
    ],
  },
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

// Retired: the Play Store listings are gone, so these are shown as plain names.
export const androidApps = [
  { name: 'Calculator' },
  { name: 'Tic-Tac-Toe' },
  { name: 'POS: System Test' },
];
