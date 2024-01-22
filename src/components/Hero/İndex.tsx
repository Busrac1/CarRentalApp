import CustomButton from "./../CustomButton/İndex";
import {motion} from 'framer-motion'

const Hero = () => {
  const flyTo = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title"> Özgürlüğü Hisset, Yolculağa Başla!</h1>
        <p className="hero__subtitle text-gray-300">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel
          kılabilirsin.
        </p>
        <CustomButton
          title="arabaları keşfet"
          desings="mt-10"
          handleClick={flyTo}
        />
      </div>

      <div className="w-100 flex justify-center">
        <motion.img 
        initial={{translateX:250}}
        whileInView={{translateX:0}}
        transition={{duration:1}}
        className="img-fluid object-contain" 
        src="/hero.png" />
      </div>
    </div>
  );
};

export default Hero;
