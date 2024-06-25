import "./App.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import Stars from "./components/Stars";
import Hills from "./assets/pattern-hills.png";
import Facebook from "./components/Facebook";
import Instagram from "./components/Instagram";
import Pinterest from "./components/Pinterest";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone.js";
import utc from "dayjs/plugin/utc.js";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useEffect, useState } from "react";
function App() {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(customParseFormat);
  const param = new URLSearchParams(window.location.search);
  const dateParam = param.get("date");
  const [date, setDate] = useState("2024-09-03 00:00");

  console.log(dayjs().format("DD MMMM YYYY HH:mm"));
  console.log(dayjs().format("dddd"));

  useEffect(() => {
    if (
      dateParam !== null &&
      dateParam !== undefined &&
      dateParam !== "" &&
      dayjs(dateParam, "YYYY-MM-DD HH:mm", true).isValid()
    ) {
      setDate(dateParam);
    }
  }, []);
  return (
    <>
      <div className="bg-[#1e1e28] h-screen text-white flex flex-col justify-center items-center relative">
        <div className="">
          <h1 className="mb-5 text-3xl md:text-xl text-center font-bold tracking-widest">
            WE'RE LAUNCHING SOON
          </h1>
          <h2 className="mb-10 text-lg text-center font-bold">
            {`${dayjs(date).format("dddd")} , ${dayjs(date).format(
              "D MMMM YYYY HH:mm"
            )}`}
          </h2>
        </div>
        <FlipClockCountdown to={dayjs(date).tz("Asia/Jakarta").valueOf()}>
          Finished
        </FlipClockCountdown>
        <Stars />
        <div className="absolute bottom-20 z-10 flex gap-5">
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Pinterest />
          </a>
          <a href="#">
            <Instagram />
          </a>
        </div>
        <img
          src={Hills}
          alt=""
          className="absolute bottom-0 h-[170px] md:h-max w-full object-cover"
        />
      </div>
    </>
  );
}

export default App;
