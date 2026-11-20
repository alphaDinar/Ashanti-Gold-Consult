import Image from 'next/image';
import goldStone from '../../../public/gold_stone.png';

const SkillBox = () => {
  const skills = [0, 1, 2, 3]

  return (
    <section id='hor' className='grid grid-cols-4 gap-5 sm-screen:grid-cols-2'>
      {skills.map((skill, i) => (
        <div key={i} className='flex flex-col gap-2'>
          <div className='h-40 relative sm-screen:h-28'>
            <Image alt='' src={goldStone} fill objectFit='contain' />
          </div>

          <span className='roboText text-lg sm-screen:text-medium'>AURUM COIN - BAW NPONYCK</span>
          <p className='text-sm sm-screen:text-xs'>
            Your social media pages have a clean,professional look, and it’Your social media pages have aYour social media pages have a clean,professional look, and it’Your social media pages have a
          </p>
        </div>
      ))}
    </section>
  );
}

export default SkillBox;