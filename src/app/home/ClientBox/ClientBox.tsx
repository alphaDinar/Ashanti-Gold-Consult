import styles from './clientBox.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { collaboratorList } from '../../External/lists';

const ClientBox = () => {
  const aboutText = "We are your digital architects, providing everything you need to establish a commanding presence on the web. From crafting user-centric websites that illuminate your brand to implementing cutting-edge marketing strategies that ignite audience engagement, our team of stellar experts possesses the knowledge and experience to make your vision a reality.";

  return (
    <section className={styles.clientBox} id='hor'>
      <section className={styles.left}>
        {collaboratorList.map((client, i) => (
          <Link href={'/'} key={i}>
            <Image alt='' src={client.img} width={70} height={70} unoptimized className='contain' />
          </Link>
        ))}
      </section>
      <section className={styles.right}>
        <strong>About</strong>
        <small>{aboutText}</small>
      </section>
    </section>
  );
}

export default ClientBox;