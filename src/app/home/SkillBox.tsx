import Image from 'next/image';
import vault from '../../../public/vault.png';
import bullion from '../../../public/test.png';
import gold_coin from '../../../public/gold_coin.png';
import comply from '../../../public/comply.png';

const SkillBox = () => {
  const skills = [
    {
      tag: "Bullion Acquisition & Sourcing",
      desc: "Direct access to investment-grade physical gold from verified refiners and trusted suppliers at competitive rates.",
      img: bullion,
    },
    {
      tag: "Secure Vaulting & Custody",
      desc: "Insured, allocated storage in high-security vaults with full legal ownership and independent auditing.",
      img: vault
    },
    {
      tag: "Portfolio & Risk Advisory",
      desc: "Tailored physical gold strategies designed to protect wealth against inflation and currency volatility.",
      img: gold_coin,
    },
    {
      tag: "Due Diligence & Compliance",
      desc: "End-to-end verification of gold provenance, assay purity, and international regulatory standards.",
      img: comply
    }
  ]

  return (
    <section id='hor' className='grid grid-cols-4 gap-5 sm-screen:grid-cols-2 mob-screen:gap-x-3 mob-screen:gap-y-5'>
      {skills.map((skill, i) => (
        <div key={i} className='flex flex-col gap-[2px]'>
          <div className='h-40 relative sm-screen:h-28 mob-screen:h-16'>
            <Image alt='' src={skill.img} fill objectFit='contain' />
          </div>

          <span className='roboText text-lg sm-screen:text-medium uppercase'>{skill.tag}</span>
          <p className='text-sm sm-screen:text-xs mob-screen:line-clamp-4'>
            {skill.desc}
          </p>
        </div>
      ))}
    </section>
  );
}

export default SkillBox;