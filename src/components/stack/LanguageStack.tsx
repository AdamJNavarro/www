import { languageStack } from '~/data/stack';
import GridList from '../grid/GridList';
import StackItem from './StackItem';

const LanguageStack = () => {
  return (
    <div className="space-y-6">
      <h4 className="font-sans text-xl font-bold md:text-2xl text-gray-900 dark:text-gray-300">
        Language Stack
      </h4>
      <GridList>
        {languageStack.map((item, index) => {
          return <StackItem index={index} item={item} />;
        })}
      </GridList>
    </div>
  );
};

export default LanguageStack;
