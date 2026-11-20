import Image from 'next/image';
import { Button } from '@heroui/button';
import goldStone from '../../../public/gold_stone.png';

const HeadBox = () => {
  return (
    <section id='hor' className='flex flex-col items-center gap-3 md-screen:items-start'>
      <section className='logoTitle text-5xl flex flex-col justify-center gap-2 text-center relative md-screen:text-4xl md-screen:text-left sm-screen:text-3xl'>
        <p className='text-secondary'>GOLD ADVISORY -</p>
        <p className='-translate-x-4 md-screen:-translate-x-0'>build Wealth ON</p>
        <p className='logoTitle ml-44 md-screen:ml-0'>
          <span>THE global </span>
          <span className='text-secondary'>market</span>
        </p>
        <div className='w-44 h-44 absolute -right-8 -translate-y-11 md-screen:w-32 md-screen:h-32 sm-screen:w-12 sm-screen:h-12 sm-screen:-top-2 sm-screen:-translate-y-0 sm-screen:right-1'>
          <Image src={goldStone} alt='' fill objectFit='contain' />
        </div>
      </section>

      <section className='translate-x-5 flex gap-4 items-center md-screen:translate-x-0'>
        <span className='flex w-60 md-screen:hidden'>Strategic advisory for acquiring and storing physical gold</span>
        <Button color='secondary' radius='sm' className='text-black'>Get In Touch</Button>
      </section>
    </section >
  );
}

export default HeadBox;