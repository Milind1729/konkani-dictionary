import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f1faf9] dark:bg-[#040404f7] p-6 shadow-md flex items-center justify-between">
        {/* Social Media Links */}
        <div className=" flex space-x-4 justify-center items-center h-fit">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-[#1877F2] dark:hover:text-[#1877F2] dark:text-[#908a97] transition max-w-7 max-h-7"
          >
            <svg
              fill="currentColor"
              className="w-6 h-6 md:w-7 md:h-7"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2] dark:text-[#908a97] transition max-w-7 max-h-7"
          >
            <svg
              fill="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
              viewBox="-143 145 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2
                  c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7
                  c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9
                  C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5
                  c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6
                  c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-[#d62976] dark:hover:text-[#d62976] dark:text-[#908a97] transition"
          >
            <svg
              fill="currentColor"
              className="w-6 h-6 md:w-7 md:h-7"
              viewBox="-5.5 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.25 14.188v-6.469c0-1.156-0.969-2.125-2.125-2.125h-17c-1.156 0-2.125 0.969-2.125 2.125v6.469h5.156c0.813-2.219 2.969-3.813 5.469-3.813s4.656 1.594 5.469 3.813h5.156zM21.25 16.063h-4.781v0.156c0 3.219-2.625 5.844-5.844 5.844s-5.844-2.625-5.844-5.844v-0.156h-4.781v8.656c0 1.156 0.969 2.125 2.125 2.125h17c1.156 0 2.125-0.969 2.125-2.125v-8.656zM1.844 7.469h1.063v4.875h-1.063v-4.875zM3.969 7.469h1.063v4.875h-1.063v-4.875zM6.094 7.469h1.063v3.063c-0.344 0.25-0.719 0.531-1.063 0.813v-3.875zM10.625 20.219c2.219 0 3.969-1.781 3.969-4s-1.75-3.969-3.969-3.969-4 1.75-4 3.969 1.781 4 4 4zM14.344 7.469h5.031v4.875h-3.375c-0.438-0.656-1.031-1.188-1.656-1.625v-3.25z"></path>
            </svg>
          </a>
        </div>

        {/* Rights and Love */}
        <div className=" text-[10px] md:text-sm text-[#5b6a72] dark:text-[#908a97]">
          Made with ❤️ | © {new Date().getFullYear()} All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;
