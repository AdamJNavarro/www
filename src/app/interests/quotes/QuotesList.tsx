import { Blockquote, SimpleGrid } from '@mantine/core';

interface QuoteProps {
  author: string;
  source: string;
  words: string;
}

const quotes: QuoteProps[] = [
  {
    author: 'J.R.R. Tolkien',
    source: 'The Fellowship of the Ring',
    words: `“I wish it need not have happened in my time,” said Frodo.
    “So do I,” said Gandalf, “and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.”`,
  },
];

export default function QuotesList() {
  return (
    <SimpleGrid cols={1} spacing="xl">
      {quotes.map((quote, index) => (
        <Blockquote
          key={`quote-${index}`}
          cite={`– ${quote.author} (${quote.source})`}
        >
          {quote.words}
        </Blockquote>
      ))}
    </SimpleGrid>
  );
}
