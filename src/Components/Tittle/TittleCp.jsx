function TittleCp(props) {
  return (
    <div className="flex flex-col justify-center items-start">
      <p className="text-orange-400 text-2xl font-bold">{props.tittleParent}</p>
      <p className="text-primary text-3xl font-bold">{props.tittleChild}</p>
      {props.isShowDesc && (
        <p className={`text-gray-400 py-3 ${props.width} mb-10`}>
          {props.desc}
        </p>
      )}
    </div>
  );
}

export default TittleCp;
