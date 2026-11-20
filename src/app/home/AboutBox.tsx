import Image from "next/image";
import goldMines from '../../../public/gold_mines.webp';

const AboutBox = () => {
  return (
    <section id='hor' className="relative flex items-center md-screen:flex-col-reverse md-screen:items-start md-screen:gap-10">
      <section className="w-[40%] grid gap-12 md-screen:gap-6 md-screen:w-[60%] sm-screen:w-full">
        <span className="roboText text-3xl sm-screen:text-2xl">
          AURUM <span className="text-sm-muted">COIN -</span>  <br className="sm-screen:hidden" />
          <span className="text-sm-muted">BAW NPONYCK</span> <br className="sm-screen:hidden" />
          <span className="text-sm-muted">B MNP FB YEBEPHEHHBK</span> <br  className="sm-screen:hidden"/>
          <span>N NEPCENNTJA <br className="sm-screen:hidden" /></span>
          <span className="text-sm-muted">NNNENJKSKE</span>
        </span>


        <section className="border border-white p-4 rounded-lg flex gap-12 items-center md-screen:flex-col md-screen:items-start md-screen:gap-3">
          <section className="flex gap-8">
            <div className="w-10 h-10 bg-red-300"></div>
            <div className="w-10 h-10 bg-red-300"></div>
            <div className="w-10 h-10 bg-red-300"></div>
          </section>
          <span>
            Your social media pages have a clean, professional look, and it’
          </span>
        </section>
      </section>


      <section className="absolute left-[36%] -translate-y-6 rotate-12 flex items-center md-screen:relative md-screen:left-0 md-screen:rotate-0 md-screen:-translate-y-0 sm-screen:flex-col sm-screen:items-start sm-screen:w-full">
        <img src={"https://res.cloudinary.com/dvnemzw0z/image/upload/v1795148927/Testers/ghana_gold_d2puka.webp"} className="w-60 h-60 rounded-2xl object-cover sm-screen:w-full sm-screen:rounded-[12px_12px_12px_0]">
        </img>
        <div className="bg-dark-muted w-52 p-4 rounded-[0_10px_10px_0] sm-screen:rounded-[0_0_10px_0px]">
          Your social media pages have a clean,professional look, and it’Your social media pages have a
        </div>
      </section>


    </section>
  );
}

export default AboutBox;