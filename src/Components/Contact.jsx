import TittleCp from "./Tittle/TittleCp";
import { FaPhoneAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { MdVideoCall } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";

function Contact() {
  return (
    <div id="ContactUs" className="2xl:container px-auto m-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div>
          <TittleCp
            tittleParent="Our Contact Us"
            tittleChild="Easy to contact us"
            isShowDesc
            width="max-w-[600px]"
            desc="We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Choice
              icon={<FaPhoneAlt color="blue" />}
              tittle="Call"
              phone="(+62) 123 456 789"
              button="Call Now"
            />
            <Choice
              icon={<IoChatbubbleEllipsesSharp color="blue" />}
              tittle="Chat"
              phone="(+62) 123 456 789"
              button="Chat Now"
            />
            <Choice
              icon={<MdVideoCall color="blue" />}
              tittle="Video Call"
              phone="(+62) 123 456 789"
              button="Video Call Now"
            />
            <Choice
              icon={<IoChatboxEllipses color="blue" />}
              tittle="Message"
              phone="(+62) 123 456 789"
              button="Message Now"
            />
          </div>
        </div>
        <div className="flex flex-col justify-end 2xl:items-end items-center">
          <img
            className="w-[80%] h-[600px] rounded-t-full"
            src="./contact.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

function Choice(props) {
  return (
    <div className="p-5 flex flex-col gap-5 border-[1px] rounded-md hover:scale-110 transition-all duration-500">
      <div className="flex flex-row justify-start items-center gap-5">
        <div className="text-xl p-3 bg-[#eeeeff] rounded-md">{props.icon}</div>
        <div>
          <p className="text-lg font-bold text-primary">{props.tittle}</p>
          <p className="text-gray-500 text-sm">{props.phone}</p>
        </div>
      </div>
      <div className="p-3 bg-[#eeeeff] rounded-md hover:cursor-pointer text-center text-[blue] font-bold text-sm hover:scale-105 hover:bg-[blue] hover:text-white transition-all duration-500">
        {props.button}
      </div>
    </div>
  );
}
export default Contact;
