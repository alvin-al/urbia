import Header from "@/components/header";
import * as styles from "@/components/styles";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "@/lib/contentful";
import BuildCommunityContent from "@/components/BuildCommunityContent";

const BuildCommunity = () => {

  return (
    <div className={`${styles.pageSize} h-screen ${styles.bluePallete}`}>
      <div className='z-10'>
        <Header title='Build the Community' />
      </div>
      <div className='absolute ml-20 top-[40%] transform -translate-y-[40%]'>
        <BuildCommunityContent />
        <p className='font-extrabold text-8xl text-white'>
          Urbia
          <br />
          Spatial
          <br />
          Manifesto
        </p>
      </div>
    </div>
  );
};

export default BuildCommunity;
