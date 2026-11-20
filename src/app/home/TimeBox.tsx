const TimeBox = () => {
    const timeline = [0, 1, 2, 3]

    return (
        <section id='hor' className='grid gap-16 sm-screen:gap-10'>
            <section className='flex flex-col items-center gap-3 md-screen:items-start'>
                <section className='logoTitle text-5xl flex flex-col justify-center gap-2 text-center relative md-screen:text-4xl md-screen:text-left sm-screen:text-3xl'>
                    <p className='text-secondary -translate-x-16 md-screen:-translate-x-0'>GOLD ADVISORY -</p>
                    <p className='-translate-x-4 md-screen:-translate-x-0'>build Wealth ON</p>
                    <p className='logoTitle ml-44 md-screen:ml-0'>
                        <span>THE global </span>
                        <span className='text-secondary'>market</span>
                    </p>
                </section>

                <section className='-translate-x-6 md-screen:-translate-x-0'>
                    <span className='font-semibold'>GOLD RUSH</span>
                    <span className='flex w-60 md-screen:w-auto'>Strategic advisory for acquiring and storing physical gold</span>
                </section>
            </section>

            <section className='grid grid-cols-4 md-screen:flex md-screen:overflow-x-scroll scrollBox'>
                {timeline.map((mile, i) => (
                    <div key={i} className='border-l border-l-white px-6 grid gap-2 md-screen:min-w-72'>
                        <article className='flex gap-2 items-center'>
                            <div className='w-6 h-6 bg-white rounded-full'></div>
                            <span className='roboText'>2024</span>
                        </article>
                        <span>Your social media pages have a clean,professional look, and it’Your social media pages have aYour social media</span>
                    </div>
                ))}
            </section>
        </section >
    );
}

export default TimeBox;