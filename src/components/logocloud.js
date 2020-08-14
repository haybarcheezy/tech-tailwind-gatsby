import React from "react";
import { Link } from "gatsby";

const LogoCloud = () => {
  return (
    <section className="bg-gray-900">
      <div className="container flex flex-wrap px-5 py-24 mx-auto">
        <div className="w-full mb-10 overflow-hidden rounded-lg lg:w-1/2 lg:mb-0">
          <div className="flex w-full">
            <div className="w-1/2 px-6 py-6 mx-1 my-1 text-center bg-gray-900 border border-gray-700 rounded cursor-pointer hover:bg-gray-800 hover:border-blue-400">
              <svg
                className="mx-auto"
                width="115"
                height="58"
                viewBox="0 0 115 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M73.8099 51.4868V55.7042H74.446V53.874H75.1615L76.3145 55.7042H77.0301L75.7976 53.874C76.4134 53.7976 76.9108 53.4392 76.9108 52.6804C76.9108 51.849 76.4024 51.4868 75.4001 51.4868H73.8099ZM74.446 52.0438H75.3205C75.7506 52.0438 76.235 52.1139 76.235 52.6406C76.235 53.2989 75.7445 53.3569 75.2013 53.3569H74.446V52.0438ZM75.2411 49.9351C73.2234 49.9351 71.5039 51.491 71.5039 53.5955C71.5039 55.7153 73.2233 57.2957 75.2411 57.2957C77.2308 57.2957 78.8987 55.7156 78.8987 53.5955C78.8987 51.491 77.2308 49.9351 75.2411 49.9351ZM75.2411 50.5319C76.8872 50.5319 78.183 51.8628 78.183 53.5955C78.183 55.3578 76.8872 56.6591 75.2411 56.6591C73.5668 56.6591 72.2196 55.3578 72.2196 53.5955C72.2196 51.8628 73.5668 50.5319 75.2411 50.5319Z"
                  fill="#9FA6B1"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.695312 57.2671V0.725098H114.915L58.4164 57.2671H0.695312ZM66.6623 27.7764H69.138C72.4431 27.7764 75.0741 26.6815 75.0741 23.1879C75.0741 19.805 72.4431 18.7152 69.138 18.7152H66.6623V27.7764ZM38.8901 33.6153C39.9524 34.015 41.1813 34.2544 42.4917 34.2544H42.4955C43.7754 34.2544 44.9725 34.0226 46.0246 33.6459L42.5324 22.3603H42.4561L38.8901 33.6153ZM57.2391 11.3537H68.4815L68.4802 11.3651C79.2278 11.3651 84.2759 15.1961 84.2759 23.5482C84.2759 31.0523 79.0777 35.5238 70.2995 35.5238H66.6648V46.333H50.0066L48.3578 41.1639C46.5958 41.7445 44.6048 42.0629 42.4943 42.0629C40.3315 42.0629 38.2884 41.7216 36.4946 41.1143L34.7796 46.333H24.5702L25.6948 43.3079L25.2827 43.6684C22.737 45.7156 19.5514 46.8423 15.6076 46.9187H15.0211C10.4882 46.9187 6.04697 45.6684 2.29525 43.5308L5.76708 36.6264C9.5303 38.8518 11.8927 39.3485 15.0783 39.2848C16.7309 39.2478 17.9255 38.9487 18.7028 38.1402C19.1748 37.6563 19.4178 37.0439 19.4432 36.3908C19.4725 34.5968 16.923 33.7553 13.7998 32.7916C11.2681 31.997 8.40181 30.9366 6.1551 29.289C3.50002 27.3322 2.23164 24.8851 2.29525 21.4373C2.33723 18.9203 3.26721 16.659 4.98595 14.8715C7.45911 12.3162 11.4462 10.7553 16.2309 10.7553H16.2564C20.358 10.7642 25.3717 11.9253 28.9898 13.7753L25.0842 20.5842C21.1187 18.6655 19.1214 18.4822 16.8569 18.3676C13.497 18.1881 11.7935 19.39 11.7681 20.6861C11.7388 22.2712 14.9575 23.7022 17.9815 24.6762C22.569 26.1315 28.4046 28.0833 29.2914 33.7209L37.6828 11.3537H47.4177L57.2391 38.107V11.3537Z"
                  fill="#9FA6B1"
                />
              </svg>
            </div>
            <div className="w-1/2 px-6 py-6 mx-1 my-1 text-center bg-gray-900 border border-gray-700 rounded cursor-pointer hover:bg-gray-800 hover:border-blue-400">
              <svg
                className="mx-auto"
                width="101"
                height="60"
                viewBox="0 0 101 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.5627 23.1591C31.5627 24.188 31.674 25.0223 31.8686 25.6341C32.0911 26.2459 32.3692 26.9133 32.7585 27.6363C32.8975 27.8588 32.9532 28.0812 32.9532 28.2759C32.9532 28.554 32.7863 28.8321 32.4248 29.1101L30.6728 30.2781C30.4226 30.445 30.1723 30.5284 29.9498 30.5284C29.6717 30.5284 29.3936 30.3893 29.1156 30.1391C28.7262 29.7219 28.3925 29.277 28.1144 28.8321C27.8364 28.3593 27.5583 27.8309 27.2524 27.1913C25.0833 29.7497 22.358 31.0289 19.0766 31.0289C16.7407 31.0289 14.8775 30.3615 13.5149 29.0267C12.1522 27.6919 11.457 25.9121 11.457 23.6875C11.457 21.3237 12.2913 19.4049 13.9876 17.9589C15.684 16.5128 17.9365 15.7898 20.8008 15.7898C21.7462 15.7898 22.7196 15.8732 23.7485 16.0122C24.7774 16.1513 25.8341 16.3738 26.9465 16.624V14.594C26.9465 12.4805 26.5015 11.0067 25.6395 10.1446C24.7496 9.28254 23.2479 8.86541 21.1066 8.86541C20.1333 8.86541 19.1322 8.97664 18.1033 9.22692C17.0744 9.4772 16.0733 9.7831 15.1 10.1724C14.655 10.3671 14.3213 10.4783 14.1267 10.5339C13.932 10.5895 13.793 10.6174 13.6817 10.6174C13.2924 10.6174 13.0977 10.3393 13.0977 9.75529V8.39266C13.0977 7.94772 13.1534 7.61402 13.2924 7.41936C13.4314 7.2247 13.6817 7.03004 14.071 6.83537C15.0444 6.33482 16.2123 5.91769 17.5749 5.58398C18.9376 5.22247 20.3836 5.05562 21.9131 5.05562C25.2223 5.05562 27.6417 5.80645 29.199 7.30812C30.7285 8.80979 31.5071 11.0901 31.5071 14.1491V23.1591H31.5627ZM20.2724 27.386C21.1901 27.386 22.1356 27.2192 23.1367 26.8855C24.1378 26.5517 25.0277 25.94 25.7785 25.1057C26.2235 24.5773 26.5572 23.9933 26.724 23.3259C26.8909 22.6585 27.0021 21.8521 27.0021 20.9066V19.7386C26.1956 19.544 25.3336 19.3771 24.4437 19.2659C23.5538 19.1546 22.6917 19.099 21.8297 19.099C19.9665 19.099 18.6039 19.4605 17.6862 20.2114C16.7685 20.9622 16.3236 22.0189 16.3236 23.4094C16.3236 24.7164 16.6573 25.6897 17.3525 26.3571C18.0199 27.0523 18.9932 27.386 20.2724 27.386ZM42.6028 30.3893C42.1022 30.3893 41.7685 30.3059 41.546 30.1113C41.3236 29.9444 41.1289 29.5551 40.9621 29.0267L34.427 7.53059C34.2602 6.97442 34.1767 6.6129 34.1767 6.41824C34.1767 5.9733 34.3992 5.72303 34.8441 5.72303H37.5694C38.0978 5.72303 38.4593 5.80645 38.6539 6.00111C38.8764 6.16797 39.0433 6.55729 39.2101 7.08565L43.882 25.495L48.2201 7.08565C48.3592 6.52948 48.526 6.16797 48.7485 6.00111C48.971 5.83426 49.3603 5.72303 49.8608 5.72303H52.0855C52.6139 5.72303 52.9754 5.80645 53.1979 6.00111C53.4204 6.16797 53.615 6.55729 53.7263 7.08565L58.12 25.7175L62.9309 7.08565C63.0978 6.52948 63.2924 6.16797 63.4871 6.00111C63.7096 5.83426 64.0711 5.72303 64.5716 5.72303H67.1579C67.6028 5.72303 67.8531 5.9455 67.8531 6.41824C67.8531 6.55729 67.8253 6.69633 67.7975 6.86318C67.7696 7.03004 67.714 7.25251 67.6028 7.5584L60.9009 29.0545C60.734 29.6107 60.5394 29.9722 60.3169 30.1391C60.0944 30.3059 59.7329 30.4172 59.2602 30.4172H56.8686C56.3403 30.4172 55.9788 30.3337 55.7563 30.1391C55.5338 29.9444 55.3392 29.5829 55.2279 29.0267L50.9176 11.0901L46.635 28.9989C46.496 29.5551 46.3291 29.9166 46.1067 30.1113C45.8842 30.3059 45.4949 30.3893 44.9943 30.3893H42.6028ZM78.337 31.1402C76.8909 31.1402 75.4448 30.9733 74.0544 30.6396C72.664 30.3059 71.5794 29.9444 70.8564 29.5273C70.4115 29.277 70.1056 28.9989 69.9943 28.7486C69.8831 28.4984 69.8275 28.2203 69.8275 27.97V26.5517C69.8275 25.9678 70.05 25.6897 70.4671 25.6897C70.6339 25.6897 70.8008 25.7175 70.9676 25.7731C71.1345 25.8287 71.3848 25.94 71.6629 26.0512C72.6084 26.4683 73.6373 26.802 74.7218 27.0245C75.8342 27.247 76.9187 27.3582 78.0311 27.3582C79.783 27.3582 81.1456 27.0523 82.0911 26.4405C83.0366 25.8287 83.5372 24.9388 83.5372 23.7987C83.5372 23.02 83.2869 22.3804 82.7863 21.8521C82.2858 21.3237 81.3403 20.851 79.9777 20.406L75.9454 19.1546C73.9154 18.515 72.4137 17.5695 71.496 16.3181C70.5783 15.0946 70.1056 13.7319 70.1056 12.2859C70.1056 11.1179 70.3559 10.089 70.8564 9.19911C71.357 8.30924 72.0244 7.53059 72.8586 6.9188C73.6929 6.2792 74.6384 5.80645 75.7507 5.47275C76.8631 5.13904 78.0311 5 79.2546 5C79.8664 5 80.506 5.02781 81.1178 5.11123C81.7574 5.19466 82.3414 5.3059 82.9254 5.41713C83.4816 5.55617 84.0099 5.69522 84.5105 5.86207C85.011 6.02892 85.4004 6.19577 85.6784 6.36263C86.0678 6.5851 86.3459 6.80757 86.5127 7.05784C86.6796 7.28031 86.763 7.58621 86.763 7.97553V9.28254C86.763 9.86652 86.5405 10.1724 86.1234 10.1724C85.9009 10.1724 85.5394 10.0612 85.0667 9.83871C83.4816 9.11569 81.7018 8.75418 79.7274 8.75418C78.1423 8.75418 76.8909 9.00445 76.0288 9.53282C75.1668 10.0612 74.7218 10.8676 74.7218 12.0078C74.7218 12.7864 74.9999 13.4538 75.5561 13.9822C76.1123 14.5106 77.1412 15.0389 78.615 15.5117L82.5639 16.7631C84.5661 17.4027 86.0121 18.2926 86.8742 19.4327C87.7363 20.5729 88.1534 21.8799 88.1534 23.3259C88.1534 24.5217 87.9031 25.6063 87.4304 26.5517C86.9298 27.4972 86.2624 28.3315 85.4004 28.9989C84.5383 29.6941 83.5094 30.1947 82.3136 30.5562C81.0622 30.9455 79.7552 31.1402 78.337 31.1402Z"
                  fill="#9FA6B1"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M83.593 44.6552C74.4439 51.4127 61.1513 55 49.722 55C33.7041 55 19.2714 49.0768 8.37042 39.2325C7.50835 38.4538 8.28699 37.3971 9.31591 38.0089C21.1068 44.8498 35.6507 48.9933 50.6953 48.9933C60.8454 48.9933 71.9967 46.8799 82.2581 42.5417C83.7876 41.8465 85.0946 43.5428 83.593 44.6552Z"
                  fill="#9FA6B1"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M87.4023 40.3168C86.2343 38.8151 79.6715 39.5938 76.696 39.9553C75.8061 40.0665 75.667 39.2879 76.4735 38.7039C81.7015 35.0331 90.2944 36.0899 91.2955 37.3135C92.2966 38.5648 91.0174 47.1577 86.1231 51.2734C85.3723 51.913 84.6493 51.5793 84.983 50.7451C86.0953 47.992 88.5703 41.7907 87.4023 40.3168Z"
                  fill="#9FA6B1"
                />
              </svg>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/2 px-6 py-6 mx-1 my-1 text-center bg-gray-900 border border-gray-700 rounded cursor-pointer hover:bg-gray-800 hover:border-blue-400">
              <svg
                className="mx-auto"
                width="100"
                height="60"
                viewBox="0 0 100 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M85.9771 47.2629V50H100V47.2629H85.9771ZM76.7141 47.2629L77.6907 49.9913L77.8573 49.9942L78.8513 47.2629H76.7141ZM55.5552 47.2629V50H69.4245V47.2629H55.5552ZM22.2224 47.2629V49.9942H43.3754C47.1282 49.9942 49.9609 47.2629 49.9609 47.2629H22.2224ZM0.153596 47.2629V50H19.6187V47.2629H0.153596ZM85.9771 41.9366V44.6765H100V41.9366H85.9771ZM74.787 41.9366L75.8027 44.6765H79.754L80.7045 41.9366H74.787ZM55.5552 41.9366V44.6765H69.4245V41.9366H55.5552ZM22.2224 41.9366V44.6765H52.1879C52.8182 44.0491 53.1804 41.9366 53.1804 41.9366H22.2224ZM0.153596 41.9366V44.6765H19.6187V41.9366H0.153596ZM85.9771 36.6145V39.3516H94.4042V36.6145H85.9771ZM72.8715 36.6145L73.8597 39.3516H81.6187L82.6156 36.6145H72.8715ZM60.9975 36.6145V39.3516H69.4245V36.6145H60.9975ZM44.4448 36.6145V39.3516H53.4093C53.4093 38.0591 52.8747 36.6145 52.8747 36.6145H44.4448ZM27.8168 36.6145V39.3516H36.2452V36.6145H27.8168ZM5.59437 36.6145V39.3516H14.0243V36.6145H5.59437ZM85.9771 31.2925V34.0296H94.4042V31.2925H85.9771ZM70.956 31.2925L71.9775 34.0296H83.5545L84.5224 31.2925H70.956ZM60.9975 31.2925V34.0296H69.4245V31.2925H60.9975ZM27.8168 31.2925V34.0296H51.7228C51.1476 32.7009 49.348 31.2925 49.348 31.2925H27.8168ZM5.59437 31.2925V34.0296H14.0243V31.2925H5.59437ZM60.9975 25.9705V28.7061H69.4245V27.1832L69.9591 28.7061H85.4019L85.9771 27.1832V28.7061H94.4042V25.9705H78.5818L77.7414 28.2874L76.8981 25.9705H60.9975ZM27.8168 25.9705V28.7061H49.348C49.348 28.7061 51.1476 27.3021 51.7228 25.9705H27.8168ZM5.59437 25.9705V28.7061H14.0243V25.9705H5.59437ZM80.3857 20.6441L79.3859 23.3841H94.4042V20.6441H80.3857ZM60.9975 20.6441V23.3841H75.9418L74.9464 20.6441H60.9975ZM44.4448 20.6441V23.3841H52.8747C52.8747 23.3841 53.4093 21.9366 53.4093 20.6441H44.4448ZM27.8168 20.6441V23.3841H36.2452V20.6441H27.8168ZM5.59437 20.6441V23.3841H14.0243V20.6441H5.59437ZM82.2215 15.3264L81.2985 18.0577H99.8464V15.3264H82.2215ZM55.4016 15.3264V18.0577H74.0234L73.1004 15.3264H55.4016ZM22.2224 15.3264V18.0577H53.1804C53.1804 18.0577 52.8182 15.9523 52.1879 15.3264H22.2224ZM0 15.3221V18.0577H19.4651V15.3221H0ZM84.2138 10L83.2184 12.7371H99.8464V10H84.2138ZM55.4016 10V12.7371H72.1833L71.1878 10H55.4016ZM22.2224 10V12.7371H49.9609C49.9609 12.7371 47.1282 10 43.3754 10H22.2224ZM0 10V12.7371H19.4651V10H0Z"
                  fill="#9FA6B1"
                />
              </svg>
            </div>
            <div className="w-1/2 px-6 py-6 mx-1 my-1 text-center bg-gray-900 border border-gray-700 rounded hover:bg-gray-800 hover:border-blue-400">
              <svg
                className="mx-auto"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60 30C60 13.4308 46.5692 1.04577e-05 30 1.04577e-05C29.5482 1.04577e-05 29.0988 0.0114185 28.6516 0.0319531L22.5151 16.8978H27.8598C31.0393 16.8978 32.7528 19.3459 31.6644 22.336L24.0951 43.1376L17.7397 43.1365L25.8623 20.8404H21.0834L12.9608 43.1365H6.60304L16.1539 16.8978H16.1551L21.9002 1.10774C9.26684 4.64198 0 16.2384 0 30C0 44.1701 9.82583 56.0448 23.0353 59.1855L28.6025 43.886H28.6071L38.4283 16.8978H50.1342C53.3171 16.8978 55.0295 19.3459 53.9411 22.336L47.2902 40.6062C46.7837 41.998 45.158 43.1365 43.6772 43.1365H35.2398L29.109 59.9863C29.4045 59.9943 29.7022 60 30 60C46.5692 60 60 46.5681 60 30Z"
                  fill="#9FA6B1"
                />
                <path
                  d="M48.1538 20.8244H43.3772L36.6875 39.179H41.4641L48.1538 20.8244Z"
                  fill="#9FA6B1"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap -mb-10 lg:py-6 lg:w-1/2 lg:pl-12">
          <div className="flex flex-col flex-wrap w-full mb-2 text-left">
            <h2 className="text-4xl font-extrabold leading-9 tracking-tight text-white sm:leading-10">
              Industry professionals,
              <br />
              <span className="text-blue-500">made available on-demand.</span>
            </h2>
          </div>
          <div>
            <p className="mt-3 mb-4 text-base leading-6 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex py-2">
            <Link
              to="/about/"
              className="px-2 py-2 text-blue-500 uppercase rounded text-md hover:bg-gray-800"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
