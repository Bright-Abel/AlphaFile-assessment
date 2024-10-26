import Chart from './Chart';
import Slider from './Slider';


const SecondHero = () => {
  return (
    <section className="w-full">
      <h2 className="font-medium text-lg text-black dark:text-white">
        Event Registrations per month
      </h2>

      <div className="w-full flex flex-col lg:flex-row lg:items-center gap-[12px] mt-4">
        <Chart />
        <Slider />
      </div>
    </section>
  );
};

export default SecondHero;
