import Header from "@/components/header";
import * as styles from "@/components/styles";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "@/lib/contentful";
import BuildCommunityContent from "@/components/BuildCommunityContent";

const BuildCommunity = () => {
  return (
    <div className={`${styles.pageSize} h-full pb-96 ${styles.bluePallete}`}>
      <div className='z-10'>
        <Header title='Build the Community' />
      </div>
      <div className={`${styles.pageContainer} flex flex-col w-full`}>
        <p className='self-end text-white text-4xl font-bold mb-20'>
          Build The Community
        </p>
        <BuildCommunityContent />
      </div>
    </div>
  );
};

export default BuildCommunity;
