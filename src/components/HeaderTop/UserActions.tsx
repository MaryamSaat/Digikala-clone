// Login.tsx

const Login: React.FC = () => {
  return (
    <div className="hidden md:flex w-[20%] h-full items-center pr-[10px] gap-[15px]">
      <a href="./form.html" className="w-[133px] h-[40px] bg-white border border-gray-300 rounded-[7px] no-underline font-yekan font-bold text-[11px] text-black text-center flex justify-center items-center gap-[10px]">
        <img src="./images/logo/enterlogo.svg" alt="ورود" />
        ورود
        <span className="inline-block  font-yekan w-[2px] h-[15px] bg-[#1b1b1b] "></span>
        ثبت نام
      </a>
      <span className="inline-block w-[1px] h-[25px] bg-gray-300"></span>
      <a href="#" className="flex items-center">
        <img src="./images/logo/cartlogo.svg" alt="سبد خرید" />
      </a>
    </div>
  );
};

export default Login;
