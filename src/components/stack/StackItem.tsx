import Image from 'next/image';
import { GridItemStyle } from '../grid/GridItem';

type StackItemProps = {
  name: string;
  url?: string;
};

type StackItemArgs = {
  item: StackItemProps;
  index: number;
};

const StackItem = ({ item, index }: StackItemArgs) => {
  const { name, url } = item;
  const fixedAssetName = name.replaceAll(' ', '-');
  const assetName = fixedAssetName.replaceAll('.', '');
  const imageSrc = `/images/stack/${assetName}.png`;
  return (
    <a
      className={`${GridItemStyle} ${index % 2 == 0 ? 'md:-ml-4' : 'md:-mr-4'} ${
        !url && 'pointer-events-none'
      }`}
      href={url}
      key={name}
    >
      <Image
        alt={`${name} logo`}
        className="border border-gray-100 rounded-xl dark:border-gray-900 flex-0"
        height={48}
        layout="fixed"
        src={imageSrc}
        width={48}
      />
      <div className="items-center flex flex-1 pl-2 sm:pl-4 ">
        <p className="text-lg sm:text-xl font-semibold sm:font-medium text-black dark:text-gray-100">
          {name}
        </p>
      </div>
    </a>
  );
};

export default StackItem;
