import Image from 'next/image';
import goldStoneB from '../../../public/gold_stone_var.png';
import excavator from '../../../public/excavator.png';
import goldBar from '../../../public/gold_bar.png';
import test from '../../../public/test.png';

const StepBox = () => {
  const images = [excavator, goldBar, test];

  return (
    <section className='flex items-center'>
      {/* <div className='w-40 h-40 relative sm-screen:h-20 sm-screen:w-20 z-40'>
        <Image alt='' src={goldStoneB} fill objectFit='contain' />
      </div> */}

      <section className='-translate-x-8 flex items-center w-full'>
        <legend className='w-[13%] h-[1px] bg-secondary mob-screen:w-[15%]'></legend>
        <div className='p-3 border border-secondary rounded-full overflow-hidden mob-screen:p-2 flex justify-center'>
          <div className='w-12 h-12 relative sm-screen:w-8 sm-screen:h-8'>
            <Image alt='' src={goldBar} />
          </div>
          <legend className='h-60 hidden w-[1px] bg-secondary absolute top-full sm-screen:block'></legend>
        </div>
        <legend className='w-[13%] h-[1px] bg-secondary mob-screen:w-[12%]'></legend>
        <div className='p-3 border border-secondary rounded-full overflow-hidden mob-screen:p-2 flex justify-center'>
          <div className='w-12 h-12 relative sm-screen:w-8 sm-screen:h-8'>
            <Image alt='' src={excavator} />
          </div>
          {/* <legend className='h-60 hidden w-[1px] bg-secondary absolute top-full md-screen:block sm-screen:hidden'></legend> */}
        </div>
        <legend className='w-[13%] h-[1px] bg-secondary mob-screen:w-[12%]'></legend>
        <div className='p-3 border border-secondary flex justify-center rounded-full overflow-hidden mob-screen:p-2'>
          <div className='w-12 h-12 relative sm-screen:w-8 sm-screen:h-8'>
            <Image alt='' src={test} />
          </div>
          {/* <legend className='h-60 w-[1px] bg-secondary absolute top-full md-screen:hidden'></legend> */}
        </div>
      </section>
    </section>
  );
}

export default StepBox;