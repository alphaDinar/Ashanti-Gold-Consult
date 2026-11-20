import Image from 'next/image';
import goldStone from '../../../public/gold_stone.png';
import bullion from '../../../public/bullion.png';

const SkillBox = () => {
  const skills = [
    {
      tag: "Bullion Acquisition & Sourcing",
      desc: "We guide private and institutional buyers through purchasing investment-grade physical gold directly from accredited refiners and trusted international suppliers, ensuring competitive pricing and verified purity.",
      img: bullion,
    }
  ]

  return (
    <section id='hor' className='grid grid-cols-4 gap-5 sm-screen:grid-cols-2'>
      {skills.map((skill, i) => (
        <div key={i} className='flex flex-col gap-[2px]'>
          <div className='h-40 relative sm-screen:h-28'>
            <Image alt='' src={skill.img} fill objectFit='contain' />
          </div>

          <span className='roboText text-lg sm-screen:text-medium uppercase'>{skill.tag}</span>
          <p className='text-sm sm-screen:text-xs'>
            {skill.desc}
          </p>
        </div>
      ))}
    </section>
  );
}

export default SkillBox;