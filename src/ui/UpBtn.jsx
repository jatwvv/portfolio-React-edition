import { useEffect, useRef } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
function UpBtn() {
  const upRef = useRef(null);

  useEffect(function () {
    function handleGoUp() {
      if (window.scrollY > 100) {
        upRef.current.style.opacity = 1;
      } else {
        upRef.current.style.opacity = 0;
      }
    }

    window.addEventListener("scroll", handleGoUp);
    return () => {
      window.removeEventListener("scroll", handleGoUp);
    };
  }, []);

  function UpBtn() {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 100);
  }

  return (
    <div
      ref={upRef}
      onClick={UpBtn}
      className="w-14 h-14 text-slate-50 opacity-0 bg-transparent duration-500 fixed bottom-10 right-10 flex items-center justify-center z-50 border border-solid border-slate-50 rounded-[50%] text-[30px] transition-all cursor-pointer "
    >
      <AiOutlineArrowUp />
    </div>
  );
}

export default UpBtn;
