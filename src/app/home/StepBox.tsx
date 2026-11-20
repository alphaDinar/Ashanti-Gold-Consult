import Image from 'next/image';
import goldStoneB from '../../../public/gold_stone_var.png';

const StepBox = () => {
  return (
    <section className='flex items-center'>
      <div className='w-40 h-40 relative'>
        <Image alt='' src={goldStoneB} fill objectFit='contain' />
      </div>

      <div className='w-40 h-[1px] bg-secondary'></div>
    </section>
  );
}

export default StepBox;