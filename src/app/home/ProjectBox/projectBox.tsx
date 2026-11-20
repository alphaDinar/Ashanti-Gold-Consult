import Link from 'next/link';
import styles from './projectBox.module.css';
import Image from 'next/image';
import { MdNorthEast } from 'react-icons/md';

const ProjectBox = () => {
  const sample = "https://res.cloudinary.com/dvnemzw0z/image/upload/v1711617125/projects/rgv_shot_sn4vjs.jpg";

  const agrivest_demo = "https://res.cloudinary.com/dvnemzw0z/image/upload/v1746234556/Globyte%20Solutions/Agrivest_Mockup_B_nf8eb0.jpg";
  const rgv_demo = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1746236028/Globyte%20Solutions/Free_Keyboard_With_Tablet_Mockup_wmyysx.jpg';
  const maqete_demo = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1742431869/Globyte%20Solutions/Screenshot_2025-03-20_at_00-50-28_Maqete_1_sel8ik.png';
  const super_demo = "https://res.cloudinary.com/dvnemzw0z/image/upload/v1742431150/Globyte%20Solutions/Screenshot_2025-03-20_at_00-38-14_Super_Mc_Restaurant_1_jkzjzn.png";
  const condos_demo = "https://res.cloudinary.com/dvnemzw0z/image/upload/v1746237654/Globyte%20Solutions/Globyte_ikhep0.jpg";

  const projectList = [
    { tag: 'Agrivest Africa', img: agrivest_demo, desc: "Enabling individuals, businesses, and communities to invest in and benefit from Africa’s most critical sector.", target: 'https://www.agrivestafrica.com/' },
    { tag: 'Royal Golf Views', img: rgv_demo, target: 'https://www.royalgolfviews.com/', desc: "Welcome to a residence where luxury meets lifestyle. This impeccably designed apartments offer an unparalleled blend of sophistication and comfort, providing you with an exquisite living experience." },
    { tag: "Condos de la chi chi", img: condos_demo, target: "https://www.condosdelachichi.com/", desc: "Welcome to Condos de la Chichi – where elegance meets comfort! Nestled in a prime location, our luxurious condos offer the perfect retreat for travelers seeking a serene getaway." },
    { tag: 'DW Engineering Africa', desc: "DW Engineering Africa (DWEA) is a premier construction firm with nearly five decades of experience, specializing in Civil Engineering,", img: "https://res.cloudinary.com/dvnemzw0z/image/upload/v1742430244/Globyte%20Solutions/Screenshot_2025-03-20_at_00-22-17_DW_Engineering_Africa_tujcye.png", target: 'https://www.dwengineeringafrica.com/' },
    { tag: 'Super Mc Restaurant', img: super_demo, target: 'https://www.supermcrestaurant.com/', desc: "Welcome to Super MC, the top-rated restaurant in Kumasi, offering a unique blend of local Ghanaian dishes and delicious fast food." },
    { tag: 'Maqete', img: maqete_demo, target: 'https://www.maqete.com/', desc: "Welcome to a world of unbeatable deals and exclusive offers! Experience lightning-fast deliveries and exceptional customer service designed for you" },
  ]

  return (
    <section className={styles.projectBox} id='hor'>
      <header>
        <h3>Recent Projects</h3>
        <small>Click to get a live preview of project.</small>
      </header>

      <section className='items gap-7'>
        {projectList.map((project, i) => (
          <Link href={project.target} target='_blank' className="" key={i}>
            <div className="h-52 relative border overflow-hidden rounded-2xl">
              <Image alt='' unoptimized fill src={project.img} objectFit='cover' />
            </div>
            <div className={styles.con}>
              <strong>{project.tag}</strong>
              <small id='cut2'>{project.desc}</small>
            </div>
            <article className={styles.sheet}>
              <MdNorthEast />
            </article>
          </Link>
        ))}
      </section>
    </section>
  );
}

export default ProjectBox;