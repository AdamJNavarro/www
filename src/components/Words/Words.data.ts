import { WordProps } from './Words.types';

const API_KEY = process.env.NEXT_PUBLIC_MERRIAM_WEBSTER_KEY;

export async function getDictionaryData(spelling: string) {
  const response = await fetch(
    `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${spelling}?key=${API_KEY}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }
  );
  const data = await response.json();
}

const wordBank: WordProps[] = [
  {
    spelling: 'ameliorate',
    definition: 'to make better or more tolerable',
    partOfSpeech: 'verb',
    dateLearned: 1610337000,
  },
  {
    spelling: 'anathema',
    definition: 'someone or something that is detested or shunned',
    //partOfSpeech: '',
    dateLearned: 1578715080,
  },
  {
    spelling: 'appelation',
    definition: 'a name or title',
    //partOfSpeech: '',
    dateLearned: 1610337360,
  },
  {
    spelling: 'aspersion',
    definition: 'an attack on the reputation or integrity of someone or something',
    partOfSpeech: 'noun',
    dateLearned: 1578714240,
  },
  {
    spelling: 'assiduously',
    definition: 'with great care and perseverance',
    //partOfSpeech: '',
    dateLearned: 1578714300,
  },
  {
    spelling: 'autarky',
    definition: 'economic independence or self-sufficiency',
    //partOfSpeech: '',
    dateLearned: 1547178000,
  },
  {
    spelling: 'bien-pensants',
    definition: 'a right thinking or orthodox person',
    //partOfSpeech: '',
    dateLearned: 1515643140,
  },
  {
    spelling: 'bivouac',
    definition:
      'a temporary camp without tents or cover, used especially by soldiers or mountaineers',
    //partOfSpeech: '',
    dateLearned: 1547177940,
  },
  {
    spelling: 'cogitating',
    definition: 'pondering or meditating on',
    //partOfSpeech: '',
    dateLearned: 1515642480,
  },
  {
    spelling: 'cognomen',
    definition:
      'an extra personal name given to an ancient Roman citizen; functioning like a nickname',
    //partOfSpeech: '',
    dateLearned: 1610337300,
  },
  {
    spelling: 'condign',
    definition: 'appropriate to the punishment of the crime, fitting, deserved',
    //partOfSpeech: '',
    dateLearned: 1578714600,
  },
  {
    spelling: 'contretemps',
    definition: 'minor disagreement or dispute',
    partOfSpeech: 'noun',
    dateLearned: 1515642420,
  },
  {
    spelling: 'contrivance',
    definition: 'an artificial arrangement or development',
    //partOfSpeech: '',
    dateLearned: 1547178480,
  },
  {
    spelling: 'cyclamen',
    definition: 'plants of the primrose family having showy nodding flowers',
    //partOfSpeech: '',
    dateLearned: 1610337120,
  },
  {
    spelling: 'demiurge',
    definition: 'a being responsible for the creation of the universe',
    //partOfSpeech: '',
    dateLearned: 1578715020,
  },
  {
    spelling: 'desiccate',
    definition: 'to dry thoroughly',
    //partOfSpeech: '',
    dateLearned: 1578714420,
  },
  {
    spelling: 'ermine',
    definition: 'any of several weasels whose coats become white in winter',
    //partOfSpeech: '',
    dateLearned: 1547179020,
  },
  {
    spelling: 'exigency',
    definition: 'an urgent need or demand',
    //partOfSpeech: '',
    dateLearned: 1547179140,
  },
  {
    spelling: 'festoon',
    definition: 'to adorn a place with ribbons, garlands, or other decorations',
    //partOfSpeech: '',
    dateLearned: 1547178360,
  },
  {
    spelling: 'furtive',
    definition:
      'attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble; secretive',
    //partOfSpeech: '',
    dateLearned: 1547178060,
  },
  {
    spelling: 'fusillade',
    definition:
      'a series of shots fired or missiles thrown all at the same time or in quick succession',
    //partOfSpeech: '',
    dateLearned: 1578714780,
  },
  {
    spelling: 'gauche',
    definition: 'lacking social experience or grace',
    //partOfSpeech: '',
    dateLearned: 1515642600,
  },
  {
    spelling: 'hegemonic',
    definition: 'having complete dominion or power',
    //partOfSpeech: '',
    dateLearned: 1610337060,
  },
  {
    spelling: 'iconoclast',
    definition: 'a person who attacks cherished beliefs or institutions',
    //partOfSpeech: '',
    dateLearned: 1578714840,
  },
  {
    spelling: 'impingement',
    definition:
      'to have an impact on or make an impression; to encroach or infringe upon',
    //partOfSpeech: '',
    dateLearned: 1578714180,
  },
  {
    spelling: 'improvident',
    definition: 'not foreseeing and providing for the future',
    //partOfSpeech: '',
    dateLearned: 1547178540,
  },
  {
    spelling: 'inimitable',
    definition: 'so good or unusual as to be impossible to copy; unique',
    //partOfSpeech: '',
    dateLearned: 1578714720,
  },
  {
    spelling: 'iniquity',
    definition: 'immoral or grossly unfair behavior',
    //partOfSpeech: '',
    dateLearned: 1610337420,
  },
  {
    spelling: 'intransigence',
    definition: "refusal to change one's views or to agree about something",
    //partOfSpeech: '',
    dateLearned: 1547178180,
  },
  {
    spelling: 'jingoism',
    definition:
      'extreme patriotism, most often demonstrated via aggressive foreign policy',
    //partOfSpeech: '',
    dateLearned: 1630472400,
  },
  {
    spelling: 'luddite',
    definition:
      'someone who is opposed or resistant to new technologies or technological change',
    //partOfSpeech: '',
    dateLearned: 1578714960,
  },
  {
    spelling: 'melange',
    definition: 'a mixture or medley',
    //partOfSpeech: '',
    dateLearned: 1578714480,
  },
  {
    spelling: 'nascent',
    definition:
      'coming into existence and beginning to display signs of future potential',
    //partOfSpeech: '',
    dateLearned: 1578715140,
  },
  {
    spelling: 'obsequious',
    definition: 'marked by or exhibiting a fawning attentiveness',
    //partOfSpeech: '',
    dateLearned: 1547178900,
  },
  {
    spelling: 'parsimonious',
    definition: 'unwilling to spend money or use resources',
    partOfSpeech: 'adjective',
    dateLearned: 1515643020,
  },
  {
    spelling: 'pedagogy',
    definition: 'the art, science, or profession of teaching',
    //partOfSpeech: '',
    dateLearned: 1547178720,
  },
  {
    spelling: 'pernicious',
    definition: 'having a harmful effect in a gradual or subtle manner',
    //partOfSpeech: '',
    dateLearned: 1578714660,
  },
  {
    spelling: 'perspicacious',
    definition: 'having a ready insight into and understanding of things',
    //partOfSpeech: '',
    dateLearned: 1610337540,
  },
  {
    spelling: 'pollyannish',
    definition:
      'irrepressibly or excessively optimistic; capable of seeing good in anyone',
    //partOfSpeech: '',
    dateLearned: 1515642780,
  },
  {
    spelling: 'presage',
    definition: 'something that foreshadows or portends a future event',
    //partOfSpeech: '',
    dateLearned: 1515642900,
  },
  {
    spelling: 'prevaricate',
    definition: 'to deviate from the truth',
    //partOfSpeech: '',
    dateLearned: 1515642360,
  },
  {
    spelling: 'prig',
    definition: 'one who offends or irritates',
    //partOfSpeech: '',
    dateLearned: 1610337180,
  },
  {
    spelling: 'prolegomenon',
    definition:
      'a formal essay or critical discussion serving to introduce and interpret an extended work',
    //partOfSpeech: '',
    dateLearned: 1610337240,
  },
  {
    spelling: 'putative',
    definition: 'generally considered or reputed to be',
    //partOfSpeech: '',
    dateLearned: 1578714360,
  },
  {
    spelling: 'querulous',
    definition: 'habitually complaining',
    //partOfSpeech: '',
    dateLearned: 1547178840,
  },
  {
    spelling: 'reconnoiter',
    definition: 'to make a military observation of (a region)',
    //partOfSpeech: '',
    dateLearned: 1547178300,
  },
  {
    spelling: 'recrimination',
    definition: 'a retaliatory accusation',
    //partOfSpeech: '',
    dateLearned: 1515642660,
  },
  {
    spelling: 'remonstrance',
    definition: 'an earnest presentation of reasons for opposition or grievance',
    //partOfSpeech: '',
    dateLearned: 1515643080,
  },
  {
    spelling: 'rivulet',
    definition: 'a small stream',
    //partOfSpeech: '',
    dateLearned: 1515642720,
  },
  {
    spelling: 'scansion',
    definition: ' the action of scanning a line of verse to determine its rhythm',
    //partOfSpeech: '',
    dateLearned: 1547178240,
  },
  {
    spelling: 'seiche',
    definition:
      'an oscillation of the surface of a landlocked body of water that varies in period from a few minutes to several hours',
    //partOfSpeech: '',
    dateLearned: 1547178600,
  },
  {
    spelling: 'semaphore',
    definition:
      'a variable or abstract data type used to control access to a common resource',
    //partOfSpeech: '',
    dateLearned: 1515642960,
  },
  {
    spelling: 'shibboleth',
    definition:
      'a custom, principle, or belief distinguishing a particular class or group of people, especially a long-standing one regarded as outmoded or no longer important',
    //partOfSpeech: '',
    dateLearned: 1578714900,
  },
  {
    spelling: 'sidled',
    definition: 'to move sideways',
    //partOfSpeech: '',
    dateLearned: 1515642540,
  },
  {
    spelling: 'slovenly',
    definition: 'careless; excessively casual',
    //partOfSpeech: '',
    dateLearned: 1547178420,
  },
  {
    spelling: 'somnolence',
    definition: 'the quality or state of being drowsy',
    //partOfSpeech: '',
    dateLearned: 1547178960,
  },
  {
    spelling: 'soporific',
    definition: 'causing or tending to cause sleep',
    //partOfSpeech: '',
    dateLearned: 1547178780,
  },
  {
    spelling: 'suffuse',
    definition: 'gradually spread through or over',
    //partOfSpeech: '',
    dateLearned: 1610337480,
  },
  {
    spelling: 'synodical',
    definition: 'relating to conjunction',
    //partOfSpeech: '',
    dateLearned: 1547179080,
  },
  {
    spelling: 'timorously',
    definition: 'of a timid disposition',
    //partOfSpeech: '',
    dateLearned: 1547178660,
  },
  {
    spelling: 'umbrage',
    definition: 'offense or annoyance',
    //partOfSpeech: '',
    dateLearned: 1578714540,
  },
  {
    spelling: 'vittles',
    definition: 'provisions or eatables',
    partOfSpeech: 'noun',
    dateLearned: 1547178120,
  },
  {
    spelling: 'vituperation',
    definition: 'noun that refers to critical or abusive language',
    //partOfSpeech: '',
    dateLearned: 1515642840,
  },
  {
    spelling: 'abscond',
    definition: 'to leave hurriedly, usually to avoid detection',
    partOfSpeech: 'verb',
    dateLearned: 1658335722,
  },
  {
    spelling: 'rapacious',
    definition: 'aggressively greedy',
    partOfSpeech: 'adjective',
    dateLearned: 1658335691,
  },
  {
    spelling: 'abeyance',
    definition: 'a state of temporary inactivity',
    partOfSpeech: 'noun',
    dateLearned: 1658500875,
  },
  {
    spelling: 'maudlin',
    definition: 'overly sentimental',
    partOfSpeech: 'adjective',
    dateLearned: 1658500876,
  },
  {
    spelling: 'concomitant',
    definition: 'accompanying in a subordinate manner',
    partOfSpeech: 'adjective',
    dateLearned: 1658500877,
  },
  {
    spelling: 'geodesic',
    definition: 'comprised of light and straight structural elements',
    partOfSpeech: 'adjective',
    dateLearned: 1658500878,
  },
  {
    spelling: 'laconic',
    definition: 'concise almost to the point of rudeness',
    partOfSpeech: 'adjective',
    dateLearned: 1658500879,
  },
  {
    spelling: 'embochure',
    definition: 'the position and use of the mouth when playing a wind instrument',
    partOfSpeech: 'noun',
    dateLearned: 1658500880,
  },
  {
    spelling: 'couture',
    definition: 'the business of creating and selling fashionable, custom clothing',
    partOfSpeech: 'noun',
    dateLearned: 1658500881,
  },
  {
    spelling: 'licentious',
    definition: 'lacking legal or moral restraints',
    partOfSpeech: 'adjective',
    dateLearned: 1658500882,
  },
  {
    spelling: 'pareidolia',
    definition:
      'the tendency to discern a meaningful image in a random visual pattern',
    partOfSpeech: 'noun',
    dateLearned: 1658500883,
  },
  {
    spelling: 'diegetic',
    definition:
      'existing within the world of a narrative to the point the characters within the world are aware of it',
    partOfSpeech: 'adjective',
    dateLearned: 1658500884,
  },
  {
    spelling: 'castigate',
    definition: 'to subject to extreme punishment or criticism',
    partOfSpeech: 'verb',
    dateLearned: 1658500885,
  },
  {
    spelling: 'roentgen',
    definition: 'a unit of ionizing radiation',
    partOfSpeech: 'noun',
    dateLearned: 1658500886,
  },
];

export { wordBank };
