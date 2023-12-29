import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const About = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const popupVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.2 } },
  };

  return (
    <div className="w-screen bg-red-800">
      <h1 className="text-2xl md:text-4xl font-bold font-mono text-neutral-300 text-center py-5">
        <span className='bg-white text-yellow-800'>About</span> Us
      </h1>
      <div className="grid md:grid-cols-2">

        <motion.div 
       ref={ref1}
       initial="hidden"
       animate={inView1 ? "visible" : "hidden"}
       variants={popupVariants}
        className="col-span-2 md:col-span-1 p-4">
          <div className="rounded-lg shadow-xl bg-orange-100 p-4">
            <h2 className="text-lg md:text-2xl font-bold text-center">Kutch Yuvak Sangh</h2>
            <p className="text-sm md:text-base">
            Kutch Yuvak Sangh is one of the leading organizations which act as a bridge between Mumbai and Kutch. 
            Since a very long time, it is working constructively for developing various parts of Kutch and for supporting people of the Kutchi community residing in Mumbai and in Kutch. Their main aim is to take along the overall development of the Kutchi community and to resolve the various issues relating to Kutch. On numerous occasions, they had to fight, struggle and work hard to get the solutions related to the benefit of the community. Kutch Yuvak Sangh through its various humanitarian programs has given special and applauding share to the social, educational, and cultural sectors of mankind. It welcomes volunteers of any caste or religion or without any other bias or without any gender or age-related differentiation and takes everyone along, such is the "Kutch Yuvak Sangh," and it puts them in the top and elite genre. All volunteers associated with the sangh work with full dedication, no selfish motive associated with, just fulfilling their responsibility towards society and shouldering the national responsibilities as well.
            </p>
          </div>
        </motion.div>
        <motion.div 
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={popupVariants}

         className="col-span-2 md:col-span-1 p-4">
          <div className="rounded-lg shadow-xl bg-orange-100 p-4">
            <h2 className="text-lg md:text-2xl font-bold text-center">સરસ્વતી વિદ્યા મંદિર</h2>
            <p className="text-sm md:text-base">
            શિક્ષણ શિક્ષણ અને સેવા સમાજની સ્થાપના વર્ષ ૧૯૭૯માં કરવામાં આવી. આ ટ્રસ્ટ દ્વારા રાજકોટમાં સ્વાતી શિશુની સ્થાપના કરાઈ. ચાર સ્થાન ૧. મારૂતીનગર ૨. રણછોડનગર ૩. નવાથોરાળા ૪. જસદણ પર વિસ્તરણ થયેલ છે. તેમજ હાલમાં ચાર હવાઈ પણ વધુ વિદ્યાર્થીઓ જૂનાતા સભર મુલ્યનિષ્ઠા શીખવી રહ્યા છે. સરસ્વતી મંદીર ભારતીય જીવન્યો અને ભારતીય સંસ્કૃતિનું શિક્ષણ શિલના જગત કરની ગુણવત્તા ધોરણેતતુ સુખ્યાત વિદ્યાલય છે. યોગ, સંસ્કૃત, અંગ્રેજી, વિજ્ઞાન, અને સંસ્કારની વિવિધ પ્રવૃત્ત વિદ્યાર્થીઓને કારણે બાળકોનો વિકાસ અહી શક્ય સર્વોપરી છે. અમારી સહસ્તત્રાધીક વિદ્યાથીઓ આજે સમાજમાં એમના નિષ્ઠાથી વ્યક્તિત્વ સેવા સેક્ટરમાં રાજ્ય ક્ષેત્રે અને ખાનગી સ્થાન કોર્પોરેટ છે. શિક્ષણ સમર્પિત સંચાલકો, વિદ્યાપ્રતિને વિદ્યાવર્તને પવિત્રો અને શ્રેષ્ઠી સંકલ્પવાળા રાષ્ટ્રપ્રેમી વાલીઓને કારણે સમાજમાં બહોળી સ્વીકૃતિ પાત્ર છે.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;