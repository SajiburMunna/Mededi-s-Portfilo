import Image from "next/image";

import SocialMediaCard from "./SocialMediaCard";

function InfoCard() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <div className="relative overflow-hidden rounded-full border border-[#FFC576] w-[100px] h-[100px] flex justify-center items-center">
          <Image
            src="/image/mehedi.png"
            width={100}
            height={100}
            alt="i am mehedi"
          />
        </div>
        <div className="absolute right-[80px] top-[200px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.43837 11.9421C4.64299 11.5128 5.91063 10.9423 6.88816 10.1164C8.04916 9.13542 8.52133 7.87198 8.83841 6.54206C9.24548 4.83345 9.40814 3.01335 9.90176 1.30196C10.0845 0.666425 10.4363 0.42619 10.5872 0.319575C10.9686 0.050267 11.3542 -0.0217188 11.717 0.00528118C12.1469 0.036435 12.7375 0.199116 13.1259 0.919809C13.1812 1.02296 13.2532 1.18012 13.3017 1.39543C13.337 1.55328 13.3598 2.04688 13.3972 2.25042C13.4907 2.75165 13.5689 3.2529 13.6423 3.7569C13.8867 5.43436 14.0272 6.85911 14.7992 8.40019C15.8466 10.4923 16.8962 11.7724 18.3196 12.3394C19.6959 12.8877 21.3415 12.7846 23.444 12.3547C23.6441 12.3062 23.8421 12.2647 24.038 12.2307C24.965 12.0687 25.8512 12.6773 26.0332 13.6008C26.2153 14.5237 25.6262 15.423 24.7075 15.6258C24.5157 15.668 24.3267 15.7082 24.1398 15.7449C21.2986 16.4483 18.0094 18.9586 16.0979 21.1567C15.5088 21.8344 14.6462 23.7293 13.7662 24.938C13.1169 25.8297 12.3872 26.4175 11.7745 26.6252C11.3639 26.765 11.0178 26.7436 10.7319 26.673C10.3165 26.5705 9.97172 26.3455 9.70726 25.9876C9.56326 25.7916 9.42961 25.5293 9.36592 25.1942C9.33546 25.0329 9.33201 24.6231 9.33271 24.4375C9.1534 23.8207 8.93393 23.2183 8.77401 22.596C8.39255 21.111 7.64415 20.1708 6.75523 18.9288C5.92377 17.7664 5.03072 17.036 3.72157 16.4531C3.55126 16.4116 2.17702 16.0751 1.69171 15.882C0.982792 15.5988 0.644928 15.1246 0.522389 14.8691C0.314005 14.4357 0.292562 14.0571 0.3341 13.7414C0.395716 13.2754 0.604794 12.8767 0.975871 12.5548C1.20572 12.3547 1.5491 12.1601 2.0088 12.0653C2.36395 11.9912 3.30614 11.9483 3.43837 11.9421ZM11.5003 9.52172C11.564 9.66365 11.6319 9.80627 11.7039 9.95027C13.238 13.0144 14.9535 14.7251 17.0388 15.5552L17.1087 15.5822C15.7137 16.6179 14.4509 17.7754 13.4858 18.8852C13.0884 19.3421 12.5623 20.2913 11.9939 21.2647C11.4775 19.5858 10.6329 18.3992 9.57086 16.9142C8.75947 15.7809 7.90932 14.928 6.86463 14.2329C7.67532 13.8168 8.44862 13.3294 9.12223 12.7604C10.2438 11.8126 10.9852 10.7146 11.5003 9.52172Z"
              fill="white"
              fill-opacity="0.05"
            />
          </svg>
        </div>
        <p className="text-white text-center text-[32px] font-League font-bold ">
          <span className="text-[#FFC576] text-[32px] font-League mr-2">
            Hello
          </span>
          I'm
        </p>

        <div className="relative">
          <h1 className="text-white text-center text-[48px] font-League font-semibold">
            Mehedi Hasan
          </h1>
          <div className="sm:hidden  md:block absolute top-[-19px] right-[-55px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="79"
              height="45"
              viewBox="0 0 79 45"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M72.08 17.6744C72.0654 17.3662 72.0683 17.0662 72.0829 16.7845C72.1325 15.9374 72.9198 15.9403 72.981 15.9415C73.1093 15.9444 73.6809 15.9806 73.8179 16.641C73.8267 16.6804 73.8471 16.9656 73.8529 17.0755C73.8646 17.3099 73.8704 17.5403 73.8383 17.7715C73.8675 18.1637 73.9316 18.5673 74.0541 18.947C74.232 19.5074 74.5206 20.0247 75.0426 20.3003C75.9757 20.796 77.2033 20.7758 78.2297 20.9018C78.6584 20.9543 78.985 21.3118 78.9995 21.7433C79.0112 22.1752 78.708 22.5519 78.2822 22.6304C76.9992 22.8677 75.5237 24.0344 74.5848 24.9739C74.2961 25.2626 73.9724 25.9502 73.6109 26.3905C73.3193 26.7433 72.9956 26.9798 72.6894 27.0737C72.5698 27.1102 71.9079 27.2431 71.6105 26.5579C71.5289 26.3654 71.2402 25.3577 71.2139 25.2428C71.0565 24.5844 70.832 23.9962 70.3917 23.4725C70.0097 23.0185 69.546 22.6219 68.9891 22.4021C68.7645 22.3134 68.5313 22.2461 68.298 22.1767C68.2163 22.1668 67.986 22.1376 67.9043 22.1099C67.7381 22.0545 67.6156 21.9676 67.5282 21.881C67.362 21.7171 67.2774 21.5215 67.2628 21.2987C67.2511 21.1517 67.2716 20.9773 67.3765 20.784C67.4553 20.6467 67.6331 20.4399 67.9539 20.3058C68.2892 20.1655 69.0095 20.0323 69.1378 19.9976C70.0301 19.7573 70.9049 19.3919 71.5901 18.7586C71.9313 18.4419 72.01 18.1005 72.08 17.6744ZM72.6515 20.1542C72.9956 20.8674 73.5088 21.4678 74.2232 21.846C74.5177 22.0032 74.8385 22.1224 75.1709 22.2152C74.4856 22.6922 73.85 23.2346 73.3455 23.7373C73.1822 23.9009 73.0043 24.1656 72.8148 24.4563C72.5932 23.6801 72.2666 22.9829 71.7301 22.3449C71.4122 21.9688 71.0536 21.625 70.6541 21.3383C71.3772 21.052 72.0625 20.6688 72.6515 20.1542Z"
                fill="white"
                fill-opacity="0.1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M53.8527 42.4516C60.4894 42.612 67.2719 42.2883 73.617 44.5569C74.0719 44.7202 74.5735 44.4811 74.7368 44.0291C74.9001 43.5742 74.661 43.0727 74.2061 42.9094C67.6831 40.5766 60.7168 40.8653 53.8964 40.702C53.4124 40.6903 53.0129 41.0723 53.0012 41.5535C52.9896 42.0375 53.3715 42.437 53.8527 42.4516Z"
                fill="white"
                fill-opacity="0.1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M53.3595 32.7564C55.4152 30.8654 57.6576 29.4473 60.3694 28.7452C60.836 28.6242 61.1159 28.1465 60.9964 27.6791C60.8739 27.2117 60.3986 26.9306 59.9292 27.0516C56.9316 27.8275 54.4471 29.3788 52.1756 31.4684C51.8199 31.7953 51.7965 32.349 52.1231 32.7044C52.4497 33.0599 53.0037 33.0832 53.3595 32.7564Z"
                fill="white"
                fill-opacity="0.1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M47.6326 11.8633C48.5745 8.6397 50.4261 6.11771 53.2633 4.2967C53.6687 4.03601 53.7882 3.49422 53.5257 3.08803C53.2662 2.68155 52.7239 2.56346 52.3185 2.82443C49.111 4.88222 47.0173 7.73023 45.953 11.3731C45.8189 11.8365 46.0842 12.3225 46.5479 12.4578C47.0115 12.5931 47.4985 12.3266 47.6326 11.8633Z"
                fill="white"
                fill-opacity="0.1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5599 7.38037C14.0117 8.03179 13.5218 8.73162 13.1019 9.47519C12.857 9.90413 12.4255 10.9031 12.4984 11.6266C12.5538 12.1686 12.8103 12.6095 13.3236 12.8696C14.1429 13.286 14.799 13.235 15.3035 12.9834C15.7875 12.7425 16.1724 12.273 16.4115 11.6388C16.8373 10.5066 16.7877 8.79489 16.5719 7.76382C17.1551 7.16926 17.7937 6.62864 18.4731 6.14634C23.6985 2.44222 31.3646 3.82612 37.2636 9.36467C39.331 11.3049 40.3137 15.3841 40.8298 19.7804C41.6434 26.679 41.1797 34.3838 41.1156 36.641C41.101 37.235 41.1652 37.5872 41.1943 37.6575C41.3576 38.0456 41.6492 38.1477 41.8504 38.1856C42.1333 38.2381 42.3578 38.1827 42.5415 38.0864C42.7864 37.9581 42.9905 37.733 43.0838 37.3825C43.1305 37.2035 43.1451 36.9548 43.1392 36.6891C43.1334 36.532 43.0955 36.3605 43.1276 36.2479C43.355 35.4568 43.6291 34.6838 43.8945 33.9058C44.7867 31.2888 45.9444 28.8365 47.2245 26.3868C51.3039 18.5983 55.2405 10.3663 61.9268 4.43235C62.2883 4.11189 62.3233 3.55874 62.0026 3.19745C61.6818 2.83646 61.1278 2.80351 60.7662 3.12397C53.9196 9.19905 49.8489 17.6013 45.6761 25.5756C44.7051 27.4284 43.807 29.2838 43.0343 31.2063C43.1042 26.8659 42.9993 20.9841 42.0341 16.1297C41.3489 12.6679 40.2029 9.72159 38.4621 8.08924C31.8807 1.91036 23.2903 0.586504 17.4613 4.71898C16.8869 5.12546 16.3416 5.56928 15.8255 6.04808C12.7287 0.64017 6.24654 -1.50538 0.510848 1.11226C0.0734543 1.31288 -0.121909 1.8322 0.0792919 2.27134C0.280493 2.71048 0.799525 2.90439 1.23692 2.70377C6.29319 0.396672 12.0201 2.43172 14.5599 7.38037ZM15.009 9.7038C14.8749 9.91054 14.7466 10.1217 14.6241 10.3371C14.5366 10.4882 14.4054 10.7512 14.315 11.0323C14.2858 11.13 14.2625 11.2837 14.2508 11.3775C14.3587 11.4289 14.4462 11.4557 14.5249 11.4169C14.6532 11.3525 14.7086 11.1918 14.7728 11.0218C14.9157 10.643 14.9886 10.1715 15.009 9.7038Z"
                fill="white"
                fill-opacity="0.1"
              />
            </svg>
          </div>
        </div>

        <div className="relative">
          <p className="text-white text-center text-[28px] font-League font-medium leading-7">
            Product Designer
          </p>
          <div className="hidden md:block absolute top-[20px] left-[-276px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="111"
              height="15"
              viewBox="0 0 111 15"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.5853 8.83345C24.8165 10.189 19.3106 11.538 14.0139 11.8748C9.48674 12.1623 5.11392 11.7158 1.5347 9.81584C1.03016 9.54832 0.398335 9.73223 0.125474 10.2273C-0.147802 10.722 0.0402034 11.3414 0.544746 11.6093C4.44923 13.6814 9.21014 14.2234 14.1483 13.9093C19.5402 13.5668 25.1455 12.2088 30.01 10.8337C30.5744 11.9547 31.7432 12.9999 33.8021 13.7711C36.9646 14.9557 41.2825 14.9411 45.8313 14.2735C52.4286 13.3058 59.5255 10.998 64.0884 9.35828C64.2756 9.2914 64.5543 9.18498 64.8954 9.04469C64.9994 9.2698 65.1158 9.49164 65.2448 9.70941C66.3637 11.6073 68.3436 13.1419 70.3609 13.6899C83.1554 17.1652 98.0879 13.0012 110.246 9.61234C110.795 9.4586 111.115 8.89422 110.961 8.35307C110.803 7.81192 110.229 7.4975 109.676 7.65124C97.8591 10.9455 83.3509 15.1017 70.9141 11.7247C69.3834 11.3088 67.8943 10.1294 67.0458 8.68909C66.9501 8.52841 66.867 8.36407 66.7879 8.19728C68.4642 7.38291 70.4358 6.2476 71.4964 5.03235C72.5862 3.78652 72.8566 2.45669 71.9082 1.20066C71.093 0.126927 69.8576 0.0355781 68.5723 0.592225C67.1872 1.18843 65.7605 2.58227 65.2988 3.23638C64.4337 4.45815 64.1591 5.78351 64.3172 7.07583C63.9096 7.24466 63.5785 7.37026 63.3743 7.44366C58.9112 9.04713 51.9744 11.3104 45.5235 12.2569C41.3728 12.8662 37.43 12.9473 34.5442 11.8667C33.3134 11.4054 32.5002 10.8672 32.0589 10.2424C32.9299 9.98712 33.7697 9.73591 34.5721 9.49613C36.1589 9.02185 39.4628 8.23685 41.8233 6.83768C43.7004 5.72521 44.9732 4.21186 44.8992 2.31477C44.8613 1.34013 44.2861 0.689677 43.3706 0.325104C42.0025 -0.219309 39.6366 0.0441243 38.7556 0.227634C36.0836 0.783058 32.5173 3.08225 30.7528 5.673C30.0486 6.70677 29.6298 7.78826 29.5853 8.83345ZM31.7802 8.19646C32.5352 7.9738 33.2647 7.75522 33.9656 7.54561C35.4468 7.10274 38.5431 6.39928 40.7472 5.09269C41.9143 4.40106 42.8673 3.57242 42.8211 2.39265C42.8174 2.3009 42.7246 2.27481 42.6427 2.23729C42.5158 2.17979 42.3706 2.14022 42.2159 2.10923C41.169 1.89962 39.7626 2.10229 39.187 2.22218C36.945 2.6883 33.9627 4.63147 32.4823 6.80545C32.1695 7.26463 31.9204 7.73239 31.7802 8.19646ZM66.372 6.13708C67.3495 5.64405 68.3727 5.04783 69.1796 4.39902C69.608 4.05443 69.9699 3.70007 70.1987 3.33223C70.39 3.02801 70.4649 2.71643 70.2361 2.41548C70.1446 2.29355 70.0074 2.29111 69.8659 2.31395C69.7162 2.33842 69.5623 2.3906 69.4084 2.45789C68.3935 2.89587 67.3453 3.91904 67.0084 4.39902C66.6132 4.95567 66.4177 5.54454 66.372 6.13708Z"
                fill="white"
                fill-opacity="0.1"
              />
            </svg>
          </div>
        </div>

        <p className="text-center mt-5 mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="70"
            viewBox="0 0 124 87"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M60.5896 35.732C52.7553 32.9684 44.5512 30.9959 36.0868 29.8656C32.9945 29.4527 30.8124 29.503 29.3475 29.8583C27.9005 30.2093 27.2719 30.8211 27.0256 31.4717C26.7581 32.1783 26.8373 33.1899 27.3759 34.5277C27.9064 35.8456 28.8312 37.3501 30.0428 38.9496C32.4626 42.1442 35.9274 45.589 39.3166 48.4888C42.7181 51.3991 45.9691 53.6967 47.9468 54.6426C50.8665 56.039 54.0686 56.5896 56.6989 55.938C59.2615 55.3032 61.3732 53.511 62.218 49.96C63.3367 45.2578 62.5227 40.36 60.5896 35.732ZM59.6024 33.5798C52.1287 31.0573 44.3354 29.2393 36.3135 28.1681C33.1348 27.7436 30.709 27.7658 28.9438 28.194C27.1608 28.6265 25.9373 29.5092 25.4239 30.8654C24.9318 32.1654 25.1856 33.6728 25.7872 35.1673C26.3969 36.6817 27.4196 38.3229 28.6776 39.9837C31.1969 43.3096 34.7593 46.8435 38.2032 49.7901C41.6347 52.7261 45.0229 55.1425 47.2079 56.1875C50.3648 57.6974 53.982 58.3754 57.1106 57.6004C60.3069 56.8086 62.8938 54.5191 63.8841 50.3563C64.9899 45.7081 64.3561 40.9606 62.733 36.5112C87.3508 45.7299 108.153 62.8507 121.659 86.2432C121.895 86.6528 122.419 86.7931 122.828 86.5566C123.238 86.3202 123.378 85.7965 123.142 85.3869C109.16 61.1706 87.4803 43.584 61.8674 34.3694C61.8528 34.3364 61.8382 34.3035 61.8234 34.2705C59.5559 29.1958 56.0844 24.5651 52.5128 20.9667C46.7305 15.1409 38.2358 8.99471 29.0165 4.91597C19.8123 0.843889 9.7627 -1.22046 0.934549 1.30493C0.479872 1.435 0.216725 1.90902 0.346789 2.3637C0.476852 2.81838 0.95088 3.08152 1.40556 2.95146C9.68454 0.583163 19.2922 2.4865 28.3236 6.48211C37.3399 10.4711 45.6591 16.4925 51.2973 22.1731C54.4217 25.3209 57.4491 29.2696 59.6024 33.5798Z"
              fill="white"
              fill-opacity="0.3"
            />
          </svg>
        </p>

        <SocialMediaCard />
        <div className="absolute bottom-[10px] left-[100px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="38"
            viewBox="0 0 37 38"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.83909 16.8074C6.53447 16.2033 8.31856 15.4004 9.69435 14.2379C11.3284 12.8573 11.9929 11.0791 12.4391 9.20737C13.0121 6.80265 13.241 4.24103 13.9357 1.83241C14.1929 0.937953 14.688 0.599845 14.9004 0.449793C15.4372 0.0707676 15.9799 -0.0305458 16.4905 0.00745425C17.0956 0.0513004 17.9267 0.280259 18.4733 1.29457C18.5513 1.43975 18.6526 1.66094 18.7208 1.96396C18.7705 2.18612 18.8026 2.88082 18.8553 3.16728C18.9868 3.87272 19.0969 4.57818 19.2002 5.28751C19.5441 7.64838 19.7419 9.65359 20.8284 11.8225C22.3026 14.767 23.7797 16.5686 25.783 17.3666C27.72 18.1383 30.036 17.9932 32.9952 17.3881C33.2768 17.3199 33.5554 17.2614 33.8311 17.2137C35.1358 16.9857 36.383 17.8421 36.6393 19.1419C36.8955 20.4407 36.0664 21.7064 34.7734 21.9919C34.5035 22.0513 34.2375 22.1079 33.9744 22.1595C29.9756 23.1494 25.3464 26.6825 22.6562 29.7761C21.827 30.73 20.613 33.3968 19.3746 35.098C18.4607 36.353 17.4337 37.1802 16.5714 37.4725C15.9936 37.6693 15.5064 37.6392 15.104 37.5398C14.5194 37.3956 14.0342 37.0789 13.662 36.5751C13.4593 36.2994 13.2712 35.9301 13.1816 35.4585C13.1387 35.2315 13.1338 34.6547 13.1348 34.3936C12.8825 33.5254 12.5736 32.6777 12.3485 31.8017C11.8116 29.7117 10.7583 28.3886 9.50726 26.6406C8.33705 25.0046 7.08017 23.9767 5.23766 23.1563C4.99797 23.0978 3.06386 22.6243 2.38083 22.3524C1.38309 21.9539 0.907576 21.2865 0.735115 20.9269C0.441833 20.317 0.411654 19.784 0.470116 19.3397C0.556834 18.684 0.851092 18.1228 1.37335 17.6697C1.69684 17.3881 2.18012 17.1143 2.8271 16.9808C3.32694 16.8765 4.65299 16.8161 4.83909 16.8074ZM16.1855 13.401C16.2752 13.6007 16.3707 13.8014 16.472 14.0041C18.6312 18.3166 21.0456 20.7243 23.9804 21.8925L24.0788 21.9305C22.1155 23.3882 20.3382 25.0173 18.98 26.5792C18.4207 27.2223 17.6802 28.5581 16.8802 29.9281C16.1534 27.5653 14.9647 25.8952 13.47 23.8052C12.328 22.2102 11.1315 21.0098 9.66123 20.0315C10.8022 19.4459 11.8905 18.76 12.8386 17.9591C14.4171 16.6252 15.4606 15.0798 16.1855 13.401Z"
              fill="white"
              fill-opacity="0.1"
            />
          </svg>
        </div>
        <div className="absolute bottom-[10px] right-[100px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="69"
            height="35"
            viewBox="0 0 69 35"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M65.3282 4.71422C52.3778 28.7952 26.5081 38.5854 2.48074 25.0284C1.68086 24.577 0.666532 24.8592 0.215102 25.6492C-0.236327 26.4533 0.0458467 27.469 0.845723 27.9205C26.5998 42.465 54.3754 32.0962 68.2568 6.29421C68.6913 5.49011 68.388 4.47425 67.5797 4.03693C66.7714 3.61371 65.7627 3.91011 65.3282 4.71422Z"
              fill="white"
              fill-opacity="0.1"
            />
            <path
              d="M22.7004 14.7006C25.3755 14.7006 27.5442 12.532 27.5442 9.85689C27.5442 7.18176 25.3755 5.01318 22.7004 5.01318C20.0253 5.01318 17.8567 7.18176 17.8567 9.85689C17.8567 12.532 20.0253 14.7006 22.7004 14.7006Z"
              fill="white"
              fill-opacity="0.1"
            />
            <path
              d="M42.7527 9.54806C45.3755 9.54806 47.5018 7.42187 47.5018 4.79903C47.5018 2.17618 45.3755 0.0499878 42.7527 0.0499878C40.1299 0.0499878 38.0037 2.17618 38.0037 4.79903C38.0037 7.42187 40.1299 9.54806 42.7527 9.54806Z"
              fill="white"
              fill-opacity="0.1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
