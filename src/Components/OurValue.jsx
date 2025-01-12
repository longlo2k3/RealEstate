import { useState } from "react";
import TittleCp from "./Tittle/TittleCp";
import { useEffect } from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
function OurValue() {
  return (
    <div id="OurValue" className="2xl:container px-auto m-5 pt-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 py-10 gap-5">
        <div className="flex flex-col lg:items-start items-center">
          <img
            className="w-[80%] h-[600px] rounded-t-full border-8 "
            src="/value.png"
            alt=""
          />
        </div>
        <div>
          <TittleCp
            tittleParent="Our Values"
            tittleChild="Value We Give to You"
            isShowDesc
            width="max-w-[460px]"
            desc="We always ready to help by providijng the best services for you. We
        beleive a good blace to live can make your life better."
          />
          <Choice />
        </div>
      </div>
    </div>
  );
}

function Choice() {
  const [choiceFirst, setChoiceFirst] = useState(true);
  const [choiceSecond, setChoiceSecond] = useState(false);
  const [choiceThird, setChoiceThird] = useState(false);

  const handleChoiceFirst = () => {
    setChoiceFirst(true);
  };
  const handleChoiceSecond = () => {
    setChoiceSecond(true);
  };
  const handleChoiceThird = () => {
    setChoiceThird(true);
  };
  useEffect(() => {
    if (choiceFirst) {
      setChoiceSecond(false);
      setChoiceThird(false);
    }
  }, [choiceFirst]);
  useEffect(() => {
    if (choiceSecond) {
      setChoiceFirst(false);
      setChoiceThird(false);
    }
  }, [choiceSecond]);
  useEffect(() => {
    if (choiceThird) {
      setChoiceFirst(false);
      setChoiceSecond(false);
    }
  }, [choiceThird]);

  return (
    <div className="h-[400px]">
      <ChoiceCopo
        funcs={handleChoiceFirst}
        icon={<IoShieldCheckmark color="blue" />}
        choice={choiceFirst}
        tittle="Best interest rates on the market"
        desc="Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
      />
      <ChoiceCopo
        funcs={handleChoiceSecond}
        icon={<AiFillCloseCircle color="blue" />}
        choice={choiceSecond}
        tittle="Prevent unstable prices"
        desc="Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
      />
      <ChoiceCopo
        funcs={handleChoiceThird}
        icon={<AiFillSignal color="blue" />}
        choice={choiceThird}
        tittle="Best price on the market"
        desc="Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
      />
    </div>
  );
}

function ChoiceCopo(props) {
  return (
    <div
      onClick={props.funcs}
      className={` p-5 border-[1px] rounded-md mb-5 hover:cursor-pointer ${
        props.choice ? "v-div" : ""
      }`}
    >
      <div className="text-lg flex flex-row justify-between items-center">
        <div className="p-2 bg-[#eeeeff] rounded-md">{props.icon}</div>
        <p className="text-primary font-bold">{props.tittle}</p>
        <div className="p-2 bg-[#eeeeff] rounded-md">
          <AiFillCaretDown color="blue" />
        </div>
      </div>
      <p
        className={`text-gray-500 mt-10 ${
          props.choice ? "opacity-100" : "opacity-0 hidden"
        } transition-all duration-500`}
      >
        {props.desc}
      </p>
    </div>
  );
}
export default OurValue;
