
import gradients from '../../assets/gradiant.png';
export const Gradient = () => {
  return (
    <div className="absolute top-[18.25rem] -left-[20.375rem] w-[56.625rem] ">
      <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
        <img
          className="w-full"
          src={gradients}
          width={942}
          height={942}
          alt="Gradient"
        />
      </div>
    </div>
  );
};


