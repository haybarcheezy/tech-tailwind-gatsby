import React, { useState } from "react";
import { Link } from "gatsby";
import "./style.css"
function HeaderAlt() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div className="relative bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between h-16 border-gray-100 border-b-1 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <Link to="/" className="flex">
            <svg width="293" height="40" viewBox="0 0 293 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 0H40V40H0V0ZM12.4421 22.4388L9.83431 28.0005H14.9603L19.3617 18.6406L19.7744 19.5102L19.7747 19.5093L22.0068 24.2238H22.2003L22.1995 24.2256H27.4033L33.3338 11.3337H28.188L24.6821 18.8812L22.0068 13.3551H21.8472H16.861H16.7013L15.0562 16.8638L14.7375 16.1755L14.733 16.1852L12.4793 11.3337H7.3335L12.4421 22.4388Z" fill="#408AF8"/>
<path d="M67.1933 22.3922L69.2333 15.0002H72.5213L68.7053 27.0002H65.7533L63.5453 19.7282L61.3373 27.0002H58.3853L54.5693 15.0002H57.8573L59.8973 22.3682L62.0813 15.0002H65.0093L67.1933 22.3922Z" fill="#4A5568"/>
<path d="M85.3853 22.2722H76.3373C76.7373 23.7762 77.8653 24.5282 79.7213 24.5282C80.9053 24.5282 81.8013 24.1282 82.4093 23.3282L84.9053 24.7682C83.7213 26.4802 81.9773 27.3362 79.6733 27.3362C77.6893 27.3362 76.0973 26.7362 74.8973 25.5362C73.6973 24.3362 73.0973 22.8242 73.0973 21.0002C73.0973 19.2082 73.6893 17.7042 74.8733 16.4882C76.0413 15.2722 77.5613 14.6642 79.4333 14.6642C81.2093 14.6642 82.6573 15.2722 83.7773 16.4882C84.9293 17.7042 85.5053 19.2082 85.5053 21.0002C85.5053 21.3362 85.4653 21.7602 85.3853 22.2722ZM76.2893 19.8722H82.4093C82.2333 19.0882 81.8733 18.4882 81.3293 18.0722C80.8013 17.6562 80.1693 17.4482 79.4333 17.4482C78.6013 17.4482 77.9133 17.6642 77.3693 18.0962C76.8253 18.5122 76.4653 19.1042 76.2893 19.8722Z" fill="#4A5568"/>
<path d="M90.0539 18.4082C90.0539 18.9202 90.7819 19.3602 92.2379 19.7282C92.7499 19.8402 93.2139 19.9762 93.6299 20.1362C94.0459 20.2802 94.4619 20.4962 94.8779 20.7842C95.3099 21.0562 95.6459 21.4242 95.8859 21.8882C96.1259 22.3522 96.2459 22.8882 96.2459 23.4962C96.2459 24.7282 95.7819 25.6802 94.8539 26.3522C93.9259 27.0082 92.7819 27.3362 91.4219 27.3362C88.9579 27.3362 87.2779 26.3842 86.3819 24.4802L89.0699 22.9682C89.4379 24.0082 90.2219 24.5282 91.4219 24.5282C92.5259 24.5282 93.0779 24.1842 93.0779 23.4962C93.0779 22.9842 92.3499 22.5442 90.8939 22.1762C90.3499 22.0322 89.8859 21.8882 89.5019 21.7442C89.1179 21.6002 88.7019 21.3922 88.2539 21.1202C87.8059 20.8322 87.4619 20.4722 87.2219 20.0402C86.9979 19.5922 86.8859 19.0722 86.8859 18.4802C86.8859 17.2962 87.3179 16.3682 88.1819 15.6962C89.0619 15.0082 90.1499 14.6642 91.4459 14.6642C92.4219 14.6642 93.3099 14.8882 94.1099 15.3362C94.9099 15.7682 95.5419 16.3922 96.0059 17.2082L93.3659 18.6482C92.9819 17.8322 92.3419 17.4242 91.4459 17.4242C91.0459 17.4242 90.7099 17.5202 90.4379 17.7122C90.1819 17.8882 90.0539 18.1202 90.0539 18.4082Z" fill="#4A5568"/>
<path d="M104.749 15.0002V17.9762H102.037V22.9682C102.037 23.3842 102.141 23.6882 102.349 23.8802C102.557 24.0722 102.861 24.1842 103.261 24.2162C103.661 24.2322 104.157 24.2242 104.749 24.1922V27.0002C102.653 27.2402 101.157 27.0482 100.261 26.4242C99.3814 25.7842 98.9414 24.6322 98.9414 22.9682V17.9762H96.8534V15.0002H98.9414V12.5762L102.037 11.6402V15.0002H104.749Z" fill="#4A5568"/>
<path d="M112.269 27.3362C110.461 27.3362 108.949 26.7282 107.733 25.5122C106.533 24.2962 105.933 22.7922 105.933 21.0002C105.933 19.2082 106.533 17.7042 107.733 16.4882C108.949 15.2722 110.461 14.6642 112.269 14.6642C113.437 14.6642 114.501 14.9442 115.461 15.5042C116.421 16.0642 117.149 16.8162 117.645 17.7602L114.981 19.3202C114.741 18.8242 114.373 18.4322 113.877 18.1442C113.397 17.8562 112.853 17.7122 112.245 17.7122C111.317 17.7122 110.549 18.0242 109.941 18.6482C109.333 19.2562 109.029 20.0402 109.029 21.0002C109.029 21.9282 109.333 22.7122 109.941 23.3522C110.549 23.9602 111.317 24.2642 112.245 24.2642C112.869 24.2642 113.421 24.1282 113.901 23.8562C114.397 23.5682 114.765 23.1762 115.005 22.6802L117.693 24.2162C117.165 25.1762 116.413 25.9362 115.437 26.4962C114.477 27.0562 113.421 27.3362 112.269 27.3362Z" fill="#4A5568"/>
<path d="M126.003 14.6642C127.331 14.6642 128.411 15.1042 129.243 15.9842C130.107 16.8802 130.539 18.0962 130.539 19.6322V27.0002H127.443V20.0162C127.443 19.2322 127.227 18.6242 126.795 18.1922C126.379 17.7602 125.803 17.5442 125.067 17.5442C124.251 17.5442 123.603 17.8002 123.123 18.3122C122.659 18.8082 122.427 19.5442 122.427 20.5202V27.0002H119.331V10.2002H122.427V16.3442C123.163 15.2242 124.355 14.6642 126.003 14.6642Z" fill="#4A5568"/>
<path d="M142.302 16.4162V15.0002H145.398V27.0002H142.302V25.5842C141.374 26.7522 140.07 27.3362 138.39 27.3362C136.79 27.3362 135.414 26.7282 134.262 25.5122C133.126 24.2802 132.558 22.7762 132.558 21.0002C132.558 19.2402 133.126 17.7442 134.262 16.5122C135.414 15.2802 136.79 14.6642 138.39 14.6642C140.07 14.6642 141.374 15.2482 142.302 16.4162ZM136.59 23.4482C137.214 24.0722 138.006 24.3842 138.966 24.3842C139.926 24.3842 140.718 24.0722 141.342 23.4482C141.982 22.8082 142.302 21.9922 142.302 21.0002C142.302 20.0082 141.982 19.2002 141.342 18.5762C140.718 17.9362 139.926 17.6162 138.966 17.6162C138.006 17.6162 137.214 17.9362 136.59 18.5762C135.966 19.2002 135.654 20.0082 135.654 21.0002C135.654 21.9922 135.966 22.8082 136.59 23.4482Z" fill="#4A5568"/>
<path d="M150.968 18.4082C150.968 18.9202 151.696 19.3602 153.152 19.7282C153.664 19.8402 154.128 19.9762 154.544 20.1362C154.96 20.2802 155.376 20.4962 155.792 20.7842C156.224 21.0562 156.56 21.4242 156.8 21.8882C157.04 22.3522 157.16 22.8882 157.16 23.4962C157.16 24.7282 156.696 25.6802 155.768 26.3522C154.84 27.0082 153.696 27.3362 152.336 27.3362C149.872 27.3362 148.192 26.3842 147.296 24.4802L149.984 22.9682C150.352 24.0082 151.136 24.5282 152.336 24.5282C153.44 24.5282 153.992 24.1842 153.992 23.4962C153.992 22.9842 153.264 22.5442 151.808 22.1762C151.264 22.0322 150.8 21.8882 150.416 21.7442C150.032 21.6002 149.616 21.3922 149.168 21.1202C148.72 20.8322 148.376 20.4722 148.136 20.0402C147.912 19.5922 147.8 19.0722 147.8 18.4802C147.8 17.2962 148.232 16.3682 149.096 15.6962C149.976 15.0082 151.064 14.6642 152.36 14.6642C153.336 14.6642 154.224 14.8882 155.024 15.3362C155.824 15.7682 156.456 16.3922 156.92 17.2082L154.28 18.6482C153.896 17.8322 153.256 17.4242 152.36 17.4242C151.96 17.4242 151.624 17.5202 151.352 17.7122C151.096 17.8882 150.968 18.1202 150.968 18.4082Z" fill="#4A5568"/>
<path d="M170.651 22.2722H161.603C162.003 23.7762 163.131 24.5282 164.987 24.5282C166.171 24.5282 167.067 24.1282 167.675 23.3282L170.171 24.7682C168.987 26.4802 167.243 27.3362 164.939 27.3362C162.955 27.3362 161.363 26.7362 160.163 25.5362C158.963 24.3362 158.363 22.8242 158.363 21.0002C158.363 19.2082 158.955 17.7042 160.139 16.4882C161.307 15.2722 162.827 14.6642 164.699 14.6642C166.475 14.6642 167.923 15.2722 169.043 16.4882C170.195 17.7042 170.771 19.2082 170.771 21.0002C170.771 21.3362 170.731 21.7602 170.651 22.2722ZM161.555 19.8722H167.675C167.499 19.0882 167.139 18.4882 166.595 18.0722C166.067 17.6562 165.435 17.4482 164.699 17.4482C163.867 17.4482 163.179 17.6642 162.635 18.0962C162.091 18.5122 161.731 19.1042 161.555 19.8722Z" fill="#4A5568"/>
<path d="M188.283 17.7122V15.0002H189.507V27.0002H188.283V24.2882C187.755 25.2162 187.043 25.9442 186.147 26.4722C185.251 27.0002 184.243 27.2642 183.123 27.2642C181.427 27.2642 179.963 26.6642 178.731 25.4642C177.515 24.2482 176.907 22.7602 176.907 21.0002C176.907 19.2402 177.515 17.7602 178.731 16.5602C179.947 15.3442 181.411 14.7362 183.123 14.7362C184.243 14.7362 185.251 15.0002 186.147 15.5282C187.043 16.0562 187.755 16.7842 188.283 17.7122ZM179.595 24.6242C180.587 25.6162 181.795 26.1122 183.219 26.1122C184.627 26.1122 185.827 25.6162 186.819 24.6242C187.795 23.6482 188.283 22.4402 188.283 21.0002C188.283 19.5602 187.795 18.3522 186.819 17.3762C185.827 16.3842 184.627 15.8882 183.219 15.8882C181.795 15.8882 180.587 16.3842 179.595 17.3762C178.619 18.3522 178.131 19.5602 178.131 21.0002C178.131 22.4402 178.619 23.6482 179.595 24.6242Z" fill="#4A5568"/>
<path d="M194.007 18.1442C194.007 19.1522 194.863 19.8722 196.575 20.3042C197.071 20.4162 197.431 20.5042 197.655 20.5682C197.895 20.6162 198.239 20.7122 198.687 20.8562C199.151 20.9842 199.495 21.1282 199.719 21.2882C199.959 21.4482 200.215 21.6482 200.487 21.8882C200.775 22.1282 200.975 22.4162 201.087 22.7522C201.215 23.0722 201.279 23.4402 201.279 23.8562C201.279 24.8642 200.879 25.6882 200.079 26.3282C199.295 26.9522 198.263 27.2642 196.983 27.2642C195.847 27.2642 194.879 27.0242 194.079 26.5442C193.279 26.0642 192.727 25.4162 192.423 24.6002L193.455 24.0002C193.679 24.6722 194.095 25.1922 194.703 25.5602C195.327 25.9282 196.087 26.1122 196.983 26.1122C197.911 26.1122 198.655 25.9122 199.215 25.5122C199.791 25.1122 200.079 24.5602 200.079 23.8562C200.079 22.7682 199.223 22.0402 197.511 21.6722C195.911 21.2882 194.839 20.9362 194.295 20.6162C193.303 20.0402 192.807 19.2162 192.807 18.1442C192.807 17.1842 193.183 16.3762 193.935 15.7202C194.719 15.0642 195.703 14.7362 196.887 14.7362C197.831 14.7362 198.663 14.9522 199.383 15.3842C200.103 15.8162 200.631 16.4002 200.967 17.1362L199.959 17.7122C199.719 17.1362 199.319 16.6882 198.759 16.3682C198.215 16.0482 197.591 15.8882 196.887 15.8882C196.055 15.8882 195.367 16.0962 194.823 16.5122C194.279 16.9282 194.007 17.4722 194.007 18.1442Z" fill="#4A5568"/>
<path d="M204.273 18.1442C204.273 19.1522 205.129 19.8722 206.841 20.3042C207.337 20.4162 207.697 20.5042 207.921 20.5682C208.161 20.6162 208.505 20.7122 208.953 20.8562C209.417 20.9842 209.761 21.1282 209.985 21.2882C210.225 21.4482 210.481 21.6482 210.753 21.8882C211.041 22.1282 211.241 22.4162 211.353 22.7522C211.481 23.0722 211.545 23.4402 211.545 23.8562C211.545 24.8642 211.145 25.6882 210.345 26.3282C209.561 26.9522 208.529 27.2642 207.249 27.2642C206.113 27.2642 205.145 27.0242 204.345 26.5442C203.545 26.0642 202.993 25.4162 202.689 24.6002L203.721 24.0002C203.945 24.6722 204.361 25.1922 204.969 25.5602C205.593 25.9282 206.353 26.1122 207.249 26.1122C208.177 26.1122 208.921 25.9122 209.481 25.5122C210.057 25.1122 210.345 24.5602 210.345 23.8562C210.345 22.7682 209.489 22.0402 207.777 21.6722C206.177 21.2882 205.105 20.9362 204.561 20.6162C203.569 20.0402 203.073 19.2162 203.073 18.1442C203.073 17.1842 203.449 16.3762 204.201 15.7202C204.985 15.0642 205.969 14.7362 207.153 14.7362C208.097 14.7362 208.929 14.9522 209.649 15.3842C210.369 15.8162 210.897 16.4002 211.233 17.1362L210.225 17.7122C209.985 17.1362 209.585 16.6882 209.025 16.3682C208.481 16.0482 207.857 15.8882 207.153 15.8882C206.321 15.8882 205.633 16.0962 205.089 16.5122C204.545 16.9282 204.273 17.4722 204.273 18.1442Z" fill="#4A5568"/>
<path d="M219.594 27.2642C217.834 27.2642 216.338 26.6642 215.106 25.4642C213.89 24.2482 213.282 22.7602 213.282 21.0002C213.282 19.2402 213.89 17.7602 215.106 16.5602C216.322 15.3442 217.818 14.7362 219.594 14.7362C221.338 14.7362 222.818 15.3442 224.034 16.5602C225.266 17.7602 225.882 19.2402 225.882 21.0002C225.882 22.7442 225.266 24.2322 224.034 25.4642C222.802 26.6642 221.322 27.2642 219.594 27.2642ZM215.97 24.6242C216.962 25.6162 218.17 26.1122 219.594 26.1122C221.002 26.1122 222.202 25.6162 223.194 24.6242C224.17 23.6482 224.658 22.4402 224.658 21.0002C224.658 19.5602 224.17 18.3522 223.194 17.3762C222.202 16.3842 221.002 15.8882 219.594 15.8882C218.17 15.8882 216.962 16.3842 215.97 17.3762C214.994 18.3522 214.506 19.5602 214.506 21.0002C214.506 22.4402 214.994 23.6482 215.97 24.6242Z" fill="#4A5568"/>
<path d="M234.266 27.2642C232.458 27.2642 230.954 26.6642 229.754 25.4642C228.554 24.2642 227.954 22.7762 227.954 21.0002C227.954 19.2242 228.554 17.7362 229.754 16.5362C230.954 15.3362 232.458 14.7362 234.266 14.7362C235.434 14.7362 236.49 15.0162 237.434 15.5762C238.378 16.1202 239.066 16.8642 239.498 17.8082L238.514 18.3842C238.162 17.6162 237.602 17.0082 236.834 16.5602C236.082 16.1122 235.226 15.8882 234.266 15.8882C232.842 15.8882 231.634 16.3842 230.642 17.3762C229.666 18.3522 229.178 19.5602 229.178 21.0002C229.178 22.4562 229.666 23.6722 230.642 24.6482C231.618 25.6242 232.826 26.1122 234.266 26.1122C235.226 26.1122 236.082 25.8882 236.834 25.4402C237.602 24.9922 238.186 24.3842 238.586 23.6162L239.594 24.2162C239.114 25.1442 238.394 25.8882 237.434 26.4482C236.474 26.9922 235.418 27.2642 234.266 27.2642Z" fill="#4A5568"/>
<path d="M241.863 11.1362C241.847 10.7522 241.999 10.4882 242.319 10.3442C242.655 10.1842 242.983 10.1842 243.303 10.3442C243.639 10.4882 243.799 10.7522 243.783 11.1362C243.799 11.5362 243.639 11.8162 243.303 11.9762C242.983 12.1362 242.655 12.1362 242.319 11.9762C241.999 11.8162 241.847 11.5362 241.863 11.1362ZM243.423 27.0002H242.223V15.0002H243.423V27.0002Z" fill="#4A5568"/>
<path d="M257.681 17.7122V15.0002H258.905V27.0002H257.681V24.2882C257.153 25.2162 256.441 25.9442 255.545 26.4722C254.649 27.0002 253.641 27.2642 252.521 27.2642C250.825 27.2642 249.361 26.6642 248.129 25.4642C246.913 24.2482 246.305 22.7602 246.305 21.0002C246.305 19.2402 246.913 17.7602 248.129 16.5602C249.345 15.3442 250.809 14.7362 252.521 14.7362C253.641 14.7362 254.649 15.0002 255.545 15.5282C256.441 16.0562 257.153 16.7842 257.681 17.7122ZM248.993 24.6242C249.985 25.6162 251.193 26.1122 252.617 26.1122C254.025 26.1122 255.225 25.6162 256.217 24.6242C257.193 23.6482 257.681 22.4402 257.681 21.0002C257.681 19.5602 257.193 18.3522 256.217 17.3762C255.225 16.3842 254.025 15.8882 252.617 15.8882C251.193 15.8882 249.985 16.3842 248.993 17.3762C248.017 18.3522 247.529 19.5602 247.529 21.0002C247.529 22.4402 248.017 23.6482 248.993 24.6242Z" fill="#4A5568"/>
<path d="M268.734 15.0002V16.1762H265.158V23.9762C265.158 24.9522 265.414 25.5522 265.926 25.7762C266.454 26.0002 267.39 26.0482 268.734 25.9202V27.0002C267.086 27.2402 265.87 27.1282 265.086 26.6642C264.318 26.1842 263.934 25.2882 263.934 23.9762V16.1762H261.294V15.0002H263.934V12.0002L265.158 11.6402V15.0002H268.734Z" fill="#4A5568"/>
<path d="M276.287 14.7362C278.047 14.7362 279.471 15.3602 280.559 16.6082C281.663 17.8562 282.215 19.3362 282.215 21.0482C282.215 21.0802 282.207 21.1762 282.191 21.3362C282.191 21.4962 282.191 21.5922 282.191 21.6242H271.319C271.463 22.9682 271.999 24.0562 272.927 24.8882C273.855 25.7042 275.015 26.1122 276.407 26.1122C277.351 26.1122 278.183 25.9202 278.903 25.5362C279.623 25.1362 280.175 24.6002 280.559 23.9282L281.615 24.5522C281.119 25.3842 280.407 26.0482 279.479 26.5442C278.567 27.0242 277.535 27.2642 276.383 27.2642C274.527 27.2642 273.015 26.6802 271.847 25.5122C270.663 24.3282 270.071 22.8242 270.071 21.0002C270.071 19.2082 270.647 17.7202 271.799 16.5362C272.983 15.3362 274.479 14.7362 276.287 14.7362ZM276.287 15.8882C274.943 15.8882 273.807 16.3122 272.879 17.1602C271.967 18.0082 271.447 19.1042 271.319 20.4482H280.967C280.839 19.0242 280.327 17.9122 279.431 17.1122C278.535 16.2962 277.487 15.8882 276.287 15.8882Z" fill="#4A5568"/>
<path d="M285.367 18.1442C285.367 19.1522 286.223 19.8722 287.935 20.3042C288.431 20.4162 288.791 20.5042 289.015 20.5682C289.255 20.6162 289.599 20.7122 290.047 20.8562C290.511 20.9842 290.855 21.1282 291.079 21.2882C291.319 21.4482 291.575 21.6482 291.847 21.8882C292.135 22.1282 292.335 22.4162 292.447 22.7522C292.575 23.0722 292.639 23.4402 292.639 23.8562C292.639 24.8642 292.239 25.6882 291.439 26.3282C290.655 26.9522 289.623 27.2642 288.343 27.2642C287.207 27.2642 286.239 27.0242 285.439 26.5442C284.639 26.0642 284.087 25.4162 283.783 24.6002L284.815 24.0002C285.039 24.6722 285.455 25.1922 286.063 25.5602C286.687 25.9282 287.447 26.1122 288.343 26.1122C289.271 26.1122 290.015 25.9122 290.575 25.5122C291.151 25.1122 291.439 24.5602 291.439 23.8562C291.439 22.7682 290.583 22.0402 288.871 21.6722C287.271 21.2882 286.199 20.9362 285.655 20.6162C284.663 20.0402 284.167 19.2162 284.167 18.1442C284.167 17.1842 284.543 16.3762 285.295 15.7202C286.079 15.0642 287.063 14.7362 288.247 14.7362C289.191 14.7362 290.023 14.9522 290.743 15.3842C291.463 15.8162 291.991 16.4002 292.327 17.1362L291.319 17.7122C291.079 17.1362 290.679 16.6882 290.119 16.3682C289.575 16.0482 288.951 15.8882 288.247 15.8882C287.415 15.8882 286.727 16.0962 286.183 16.5122C285.639 16.9282 285.367 17.4722 285.367 18.1442Z" fill="#4A5568"/>
</svg>



            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              onClick={() => toggleExpansion(!isExpanded)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              <svg
                className={`${isExpanded ? `hidden` : `block`} block w-6 h-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isExpanded ? `block` : `hidden`} w-6 h-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            <Link
              to="/"
              activeStyle={{ color: "#4A5568" }}
              className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Home
            </Link>

            <Link
              to="/about"
              activeStyle={{ color: "#4A5568" }}
              className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              About
            </Link>
            <div className="relative dropdown">
              <button
                onClick={() => toggleExpansion(!isExpanded)}
                type="button"
                className="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out focus:text-gray-900 group hover:text-gray-900 focus:outline-none "
              >
                <span>Services</span>
                <svg
                className={`${
                  isExpanded ? `block` : `rotate-45`
                } w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`${
                  isExpanded ? `block` : `hidden`
                } dropdown-menu absolute -ml-4  transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 transition ease-in-out duration-150`}
              >
                <div className="rounded-lg shadow-lg">
                  <div className="overflow-hidden rounded-lg shadow-xs">
                    <div className="relative z-20 grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                      <Link
                        to="/business-advisory-services"
                        activeStyle={{ color: "#4A5568" }}
                        className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-300"
                      >
                        <svg
                          className="flex-shrink-0 w-6 h-6 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        <div className="space-y-1">
                          <p className="text-base font-medium leading-6 text-gray-900">
                            Business Advisory Services
                          </p>
                          <p className="text-sm leading-5 text-gray-500">
                            Modernize, optimize, and manage enterprise
                            applications.
                          </p>
                        </div>
                      </Link>
                      <a
                        href="#"
                        className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-300"
                      >
                        <svg
                          className="flex-shrink-0 w-6 h-6 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg>
                        <div className="space-y-1">
                          <p className="text-base font-medium leading-6 text-gray-900">
                            Engagement
                          </p>
                          <p className="text-sm leading-5 text-gray-500">
                            Speak directly to your customers in a more
                            meaningful way.
                          </p>
                        </div>
                      </a>
                      <Link
                        to="#"
                        activeStyle={{ color: "#000000" }}
                        className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-300"
                      >
                        <svg
                          className="flex-shrink-0 w-6 h-6 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        <div className="space-y-1">
                          <p className="text-base font-medium leading-6 text-gray-900">
                            NextGen ERP Advisory Services
                          </p>
                          <p className="text-sm leading-5 text-gray-500">
                            Simplify managing large cloud-based applications
                            with effecient delivery.
                          </p>
                        </div>
                      </Link>
                      <Link
                        to="#"
                        className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-300"
                      >
                        <svg
                          className="flex-shrink-0 w-6 h-6 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                        <div className="space-y-1">
                          <p className="text-base font-medium leading-6 text-gray-900">
                            Technology Incubation
                          </p>
                          <p className="text-sm leading-5 text-gray-500">
                            Leverage innovative technology and deliver a premium
                            end user experience.
                          </p>
                        </div>
                      </Link>
                      <Link
                        to="#"
                        className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-300"
                      >
                        <svg
                          className="flex-shrink-0 w-6 h-6 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        <div className="space-y-1">
                          <p className="text-base font-medium leading-6 text-gray-900">
                            Security Services
                          </p>
                          <p className="text-sm leading-5 text-gray-500">
                            Assess, reduce and manage your security risk.
                          </p>
                        </div>
                      </Link>
                      <Link
                        to="#"
                        className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-300"
                      >
                        <svg
                          className="flex-shrink-0 w-6 h-6 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        <div className="space-y-1">
                          <p className="text-base font-medium leading-6 text-gray-900">
                            Business Strategy
                          </p>
                          <p className="text-sm leading-5 text-gray-500">
                            Adaptive planning to drive business.
                          </p>
                        </div>
                      </Link>
                      <Link
                        to="#"
                        className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-300"
                      >
                        <svg
                          className="flex-shrink-0 w-6 h-6 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        <div className="space-y-1">
                          <p className="text-base font-medium leading-6 text-gray-900">
                            Executives On-Demand
                          </p>
                          <p className="text-sm leading-5 text-gray-500">
                            C-Suite when you need it.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/resources"
              activeStyle={{ color: "#000000" }}
              className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Resources
            </Link>
            <Link
              to="/contact"
              activeStyle={{ color: "#000000" }}
              className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Contact
            </Link>
          </nav>
          <div className="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0">
            <span className="inline-flex">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 text-base"
              >
                <svg
                  className="text-gray-400 hover:text-gray-900"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M24.5 0.5H1.5C0.946875 0.5 0.5 0.946875 0.5 1.5V24.5C0.5 25.0531 0.946875 25.5 1.5 25.5H24.5C25.0531 25.5 25.5 25.0531 25.5 24.5V1.5C25.5 0.946875 25.0531 0.5 24.5 0.5ZM7.91562 21.8031H4.20625V9.87187H7.91562V21.8031ZM6.0625 8.24063C5.63727 8.24063 5.22159 8.11453 4.86802 7.87828C4.51446 7.64204 4.23889 7.30626 4.07616 6.91339C3.91343 6.52053 3.87085 6.08824 3.95381 5.67118C4.03677 5.25412 4.24154 4.87103 4.54222 4.57035C4.8429 4.26966 5.226 4.06489 5.64306 3.98194C6.06012 3.89898 6.49241 3.94156 6.88527 4.10428C7.27813 4.26701 7.61391 4.54258 7.85016 4.89615C8.0864 5.24971 8.2125 5.66539 8.2125 6.09062C8.20937 7.27812 7.24688 8.24063 6.0625 8.24063ZM21.8031 21.8031H18.0969V16C18.0969 14.6156 18.0719 12.8375 16.1688 12.8375C14.2406 12.8375 13.9438 14.3437 13.9438 15.9V21.8031H10.2406V9.87187H13.7969V11.5031H13.8469C14.3406 10.5656 15.55 9.575 17.3563 9.575C21.1125 9.575 21.8031 12.0469 21.8031 15.2594V21.8031V21.8031Z"
                  />
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } absolute inset-x-0 p-2 transition origin-top-right transform top-4 md:hidden`}
      >
        <div className="rounded-lg shadow-lg">
          <div className="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50">
            <div className="px-5 pt-5 pb-6 space-y-6">
              <div>
                <nav className="grid row-gap-8">
                  <Link
                    to="/business-adivsory-services"
                    className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-300"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <div className="text-base font-medium leading-6 text-gray-900">
                      Business Advisory Services
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-300"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                    <div className="text-base font-medium leading-6 text-gray-900">
                      NextGen ERP Advisory Services
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-300"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <div className="text-base font-medium leading-6 text-gray-900">
                      Technology Incubation
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-300"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    <div className="text-base font-medium leading-6 text-gray-900">
                      Security Services
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-300"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <div className="text-base font-medium leading-6 text-gray-900">
                      Business Strategies
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-300"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <div className="text-base font-medium leading-6 text-gray-900">
                      Executives On-Demand
                    </div>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="px-5 py-6 space-y-6">
              <div className="grid grid-cols-2 row-gap-4 col-gap-8">
                <a
                  href="#"
                  className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                >
                  Enterprise
                </a>
                <a
                  href="#"
                  className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                >
                  Guides
                </a>
                <a
                  href="#"
                  className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                >
                  Security
                </a>
                <a
                  href="#"
                  className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                >
                  Events
                </a>
              </div>
              <div className="space-y-6">
                <span className="flex w-full rounded-md shadow-sm">
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-400 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                  >
                    Contact
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderAlt;
