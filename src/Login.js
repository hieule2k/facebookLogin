import React from "react";
import PlusIcon from "./PlusIcon";
import meta from "./download.png";

const Login = () => {
  return (
    <div className="flex flex-col justify-between h-full gap-2 mx-4">
      <div className="flex flex-col items-center ">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="error"
          className="w-[141px] h-[88px]"
        />
        <form className="w-full ">
          <input
            placeholder="Số di động hoặc email"
            className="w-full h-6 px-4 py-5 bg-[#dddddd] opacity-60 rounded mb-2"
          />
          <input
            placeholder="Mật khẩu"
            className="w-full h-6 px-4 py-5 bg-[#dddddd] opacity-60 rounded mb-2"
          />
          <button className="w-full text-center py-1.5 bg-[#1877f2] rounded mb-2 text-[16px] font-bold text-[#fff]">
            Đăng nhập
          </button>
          <div className="text-[#1877f2] text-center text-[14px] mb-3">
            Quên mật khẩu
          </div>
          <div className="text-center mb-4 relative before:absolute before:w-[40%] before:opacity-50  before:h-[1px] before:top-1/2 before:translate-y-[-50%] before:bg-black before:left-0 after:absolute after:w-[40%] after:h-[1px] after:top-1/2 after:translate-y-[-50%] after:opacity-50 after:bg-black after:right-0 ">
            hoặc
          </div>
        </form>
        <button className="w-9/12 py-1.5 border-[1px] rounded border-[#dddddd] font-bold border-solid">
          Tạo tài khoản mới
        </button>
      </div>
      <div className="flex flex-col mb-36">
        <div className="flex justify-around w-full mb-4 text-sm ">
          <div className="flex flex-col text-center">
            <span className="text-[#dddddd] font-semibold">Tiếng Việt</span>
            <span className="text-[#1877f2] ">中文(台灣)</span>
            <span className="text-[#1877f2] ">Español</span>
            <span className="text-[#1877f2] ">Français (France)</span>
          </div>
          <div className="flex flex-col text-center">
            <span className="text-[#1877f2] ">English (UK)</span>
            <span className="text-[#1877f2] ">한국어</span>
            <span className="text-[#1877f2] ">Português (Brasil)</span>
            <div className="flex justify-center w-full ">
              <PlusIcon customclass="w-5 h-5 border-[1px] rounded border-[#000000] border-solid" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 text-sm opacity-70 ">
          <div>
            <span>Giới thiệu . Trợ giúp . Xem thêm </span>
          </div>
          <div className="flex items-center gap-1">
            <span>Meta</span>
            <img src={meta} alt="no" className="w-4 h-4" />
            <span>2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
// #42b72a
