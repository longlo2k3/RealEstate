function ChoiceCopo(props) {
  return (
    <div
      className="r-card w-[15rem] p-3 mt-5 ml-3  hover:scale-105 hover:cursor-pointer transition-all
     duration-500 rounded-lg flex flex-col justify-center items-start gap-2"
    >
      <div>
        <img
          className="max-w-[15rem] w-full rounded-xl object-cover"
          src={props.img}
          alt=""
        />
      </div>
      <div className="text-lg">
        <h1 className="text-gray-400 font-bold">
          <span className=" text-orange-400">$</span>
          {props.price}
        </h1>
      </div>
      <div className="font-bold text-2xl text-primary">{props.tittle}</div>
      <div className="text-gray-400 text-[0.7rem]">{props.desc}</div>
    </div>
  );
}

export default ChoiceCopo;
