"use client";

import { useState } from "react";

import ServiceFooter from "@/app/footers/service_footer";
import ServiceHeader from "@/app/headers/ServiceHeader";
import ServiceItem from "./serviceitem";
import ServiceItem1 from "./serviceitem1";

export default function ServiceInterView() {
  const [tab, setTab] = useState(1);
  const [hover1, sethover1] = useState(false);
  const [hover2, sethover2] = useState(false);

  const handleSetTap = (index: number) => {
    if (index == 1) {
      setTab(1);
    } else {
      setTab(2);
    }
    sethover1(false);
    sethover2(false);
  };

  return (
    <div className="min-h-[100vh] bg-[#f4f6fa] min-w-full flex flex-col">
      <ServiceHeader progressNumber={1} progressTitle="SERVICES" />

      <div className="flex-1 max-w-[1024px] w-full mx-auto px-4 py-8 max-sm:bg-white max-sm:max-w-[540px] max-sm:shadow-none max-sm:min-h-full max-sm:h-auto">
        <div className="flex flex-row items-center pb-4">
          <button
            className="max-md:fixed max-md:left-[12px] max-md:top-[52px] max-md:translate-y-[-50%] flex items-center justify-center shadow-[0_2px_3px_0_#dce0e6] w-[40px] h-[40px] rounded-[50%] bg-white mr-4 text-[#788391]
                      active:border-solid active:border-red-300 active:border-[2px]"
          >
            {/* SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="Arrow-Left--Streamline-Feather"
              className="w-5 h-5"
            >
              <path
                d="M11.76 4.850064000000001C11.628816 4.927944 4.901184000000001 11.660016 4.8426 11.772C4.775208 11.90088 4.775184 12.099072 4.842576 12.228C4.905768 12.348912 11.665992000000001 19.10628 11.781648 19.164144C11.91024 19.228512 12.158016 19.206072000000002 12.284136 19.118664C12.403824 19.035743999999998 12.504216000000001 18.848328 12.503471999999999 18.709296C12.502272 18.487344 12.573192 18.563328 9.461112 15.450000000000001L6.5162640000000005 12.504 12.661416 12.504L18.806568 12.504 18.928584 12.443208C19.004808 12.405216000000001 19.076352 12.345216 19.119287999999997 12.283248C19.18032 12.195192 19.188 12.163512 19.188 12C19.188 11.836488000000001 19.18032 11.804808000000001 19.119287999999997 11.716752C19.076352 11.654784 19.004808 11.594784 18.928584 11.556792L18.806568 11.496 12.661416 11.496L6.5162640000000005 11.496 9.461112 8.55C12.573192 5.436672 12.502272 5.512656 12.503471999999999 5.290704C12.504264 5.142744 12.402743999999998 4.960944 12.27036 4.873248C12.175128 4.810176 12.137832 4.8000240000000005 12.001896 4.800096C11.885088 4.800168 11.822136 4.8131520000000005 11.76 4.850064000000001"
                stroke="none"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <h1 className="text-[32px] font-bold">Choose Services.</h1>
        </div>
        <div className="flex flex-wrap shadow-[0_2px_4px_0_#d9dce9] rounded-[10px] max-md:shadow-none max-md:rounded-none bg-white">
          <div className="w-2/3 max-md:w-full px-4">
            <div className="px-4 py-8 max-sm:px-0 max-sm:py-4">
              <div className="relative w-full sm:rounded-[4px] mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#788391] absolute z-[1] top-[49%] translate-y-[-55%] left-4 h-[1em]"
                  viewBox="0 0 24 24"
                  id="Search--Streamline-Ultimate"
                >
                  <path
                    d="M8.976 0.025248000000000003C6.649032 0.226632 4.422648 1.281192 2.8022400000000003 2.949552C1.594416 4.193112 0.731256 5.711208 0.324072 7.308C-0.319296 9.831 -0.003 12.344904 1.24008 14.588136000000002C2.464368 16.797504 4.564896 18.4896 6.9778080000000005 19.210248C9.115584 19.84872 11.367216 19.751592 13.44 18.931512C14.286287999999999 18.596688 15.361296 17.97036 15.984 17.449296C16.0566 17.388528 16.135584 17.323704 16.159512 17.305224000000003C16.199448 17.27436 16.475640000000002 17.543976 19.519512 20.585088C22.738176 23.800800000000002 22.840248000000003 23.900112 22.98 23.95164C23.585352 24.17484 24.17484 23.585352 23.95164 22.98C23.900112 22.840248000000003 23.800824000000002 22.7382 20.586216 19.520664C18.205344 17.137608 17.279376000000003 16.196136000000003 17.293416 16.172664C17.304144 16.154688 17.394984 16.0374 17.49528 15.912C18.283392 14.926608 18.882624 13.778328 19.223664 12.6C19.643208 11.150376 19.737744 9.632184 19.4976 8.200632C19.416096 7.7148 19.230936 6.975384000000001 19.11516 6.67332C19.097184000000002 6.6264 19.042896 6.48 18.994536 6.348C18.798864 5.813928000000001 18.426384 5.06652 18.097512000000002 4.548C17.42676 3.490512 16.535712 2.554416 15.493968 1.81284C14.102544 0.82236 12.640344 0.26952000000000004 10.824 0.04716C10.5468 0.013248000000000001 9.287376 -0.0017039999999999998 8.976 0.025248000000000003M9.576 1.505448C7.5559199999999995 1.559496 5.558256 2.3873040000000003 4.117368 3.767424C2.592528 5.227944 1.727472 7.022880000000001 1.5338640000000001 9.12804C1.498392 9.513672000000001 1.5191999999999999 10.544616 1.5695519999999998 10.896C1.711248 11.885088 1.974096 12.711744 2.435712 13.620000000000001C2.84736 14.43 3.3657600000000003 15.133704000000002 4.00284 15.74736C5.455488000000001 17.146608 7.15176 17.91408 9.197087999999999 18.097512000000002C9.6048 18.134088 10.45692 18.114864 10.86 18.060024C12.26952 17.868192 13.628808 17.322408000000003 14.751768000000002 16.497336C15.56436 15.900336000000001 16.35216 15.038447999999999 16.899192000000003 14.148C18.127368 12.148776 18.450072000000002 9.664344 17.77188 7.429032C17.507687999999998 6.55824 17.032896 5.598936 16.52412 4.908C15.670344000000002 3.74856 14.477088 2.78928 13.167504 2.20956C12.073056 1.725048 10.787544 1.4730480000000001 9.576 1.505448"
                    stroke="none"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
                <input
                  className="focus:border-red-400 focus:border-solid focus:border-[2px] block w-full h-[calc(2.5rem+2px)] pl-10 p-[1.5rem_0.75rem] text-base font-normal leading-[1.5] text-[#495057] bg-white 
                                    bg-clip-padding border-[1px] max-sm:border-[1px] border-[#c5ccd3] rounded-[3px] shadow-[inset_0_1px_1px_rgba(51,51,51,.075)] transition-[border-color,box-shadow] 
                                    duration-150 ease-in-out outline-none"
                  placeholder="Search services or describe problem"
                />
              </div>

              {/* Services Tap */}
              {/* <div className="flex flex-row flex-wrap items-center">
                            { tab == 1 ? 
                                <div className="flex-auto relative">
                                    <div className="absolute top-0 w-full h-[5px] bg-[#e83c79]"></div>
                                    <div className="flex justify-center items-center px-[24px] py-[16px] border-l-[#e5e8ed] border-l-[1px] border-white bg-white border-solid border-y-[1px] text-black font-bold text-[15px]">Popular</div> 
                                </div>
                                :        
                                <div className="flex-auto relative" onClick={() => handleSetTap(1)} onMouseEnter={()=>sethover1(true)} onMouseLeave={()=>sethover1(false)}>
                                    {hover1 ? <div className="absolute top-0 w-full h-[5px] bg-[#009ed5]"></div> : <></>}
                                    <div className="flex justify-center items-center px-[24px] py-[16px] border-[#e5e8ed] bg-[#f8f9fc] border-solid border-[1px] text-[#009ed5] text-[15px] font-bold cursor-pointer">Popular</div>
                                </div>                         
                            }
                            { tab == 2 ? 
                                <div className="flex-auto relative">
                                    <div className="absolute top-0 w-full h-[5px] bg-[#e83c79]"></div>
                                    <div className="flex justify-center items-center px-[24px] py-[16px] w-full border-r-[#e5e8ed] border-white bg-white border-solid border-r-[1px] border-y-[1px] text-black font-bold text-[15px]">Browse by Category</div> 
                                </div>
                                :     
                                <div className="flex-auto relative" onClick={() => handleSetTap(2)} onMouseEnter={()=>sethover2(true)} onMouseLeave={()=>sethover2(false)}>
                                    {hover2 ? <div className="absolute top-0 w-full h-[5px] bg-[#009ed5]"></div> : <></>}
                                    <div className="flex justify-center items-center px-[24px] py-[16px] w-full border-[#e5e8ed] bg-[#f8f9fc] border-solid border-[1px] text-[#009ed5] text-[15px] font-bold cursor-pointer">Browse by Category</div>
                                </div>                            
                            }
                            </div> */}
              <ServiceItem1 />
            </div>
          </div>
          <div className="w-1/3 px-[8px] py-8 relative max-md:hidden md:pr-8">
            <div className="w-[1px] absolute top-4 left-[-0.5rem] bottom-4 bg-[#e5e8ed] max-md:hidden"></div>
            <div className="">
              <div className="rounded-md bg-white flex flex-col shadow-[0_2px_3px_0_rgba(120,131,145,.3)] mb-4 border-none">
                <div className="px-[16px] py-[12px] flex flex-row bg-[#f4f6fa] border-none items-center">
                  <svg
                    className="h-[21px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="Location--Streamline-Mynaui"
                  >
                    <path
                      d="M11.28 1.1191440000000001C9.958632 1.238544 8.856768 1.555728 7.716 2.145168C6.806376 2.61516 6.088008 3.1505039999999997 5.338584 3.91692C4.58124 4.6914240000000005 4.053503999999999 5.4306 3.6246240000000003 6.317640000000001C3.236136 7.121112000000001 3.018792 7.8526560000000005 2.891856 8.784C2.838528 9.1752 2.818608 10.066872 2.85372 10.490207999999999C2.9784960000000003 11.9946 3.436608 13.476192000000001 4.267464 15.062376000000002C5.644368 17.691048 8.04432 20.39472 10.776 22.394592C11.121888 22.647816 11.214336000000001 22.70748 11.361912 22.772664C11.755488 22.946544 12.288576 22.937064 12.686376000000001 22.749096C12.84408 22.6746 13.181688 22.437528 13.707576 22.032C15.808776 20.411687999999998 17.80632 18.24084 19.084968 16.188C20.248584 14.31984 20.9106 12.559152000000001 21.124392 10.764C21.166392000000002 10.411296 21.166272 9.237264000000001 21.124176 8.904C20.916168 7.257072 20.343408 5.922264 19.275696 4.59624C18.995616000000002 4.248408 18.416567999999998 3.6493200000000003 18.071664 3.350568C16.891416 2.328216 15.385224000000001 1.5887280000000001 13.86 1.2828000000000002C13.207464000000002 1.151904 12.926904 1.124976 12.132 1.1169360000000002C11.7228 1.112784 11.339400000000001 1.1137920000000001 11.28 1.1191440000000001M11.604000000000001 2.1157440000000003C10.754520000000001 2.150544 9.92244 2.32044 9.084 2.6302559999999997C8.651424 2.79012 7.837896000000001 3.203856 7.450944000000001 3.4608C6.632447999999999 4.004304 5.87232 4.727736 5.262024 5.5440000000000005C4.727352000000001 6.259152 4.285896 7.167024 4.068984 7.997664C3.442464 10.396656 4.110144 13.15764 6.011880000000001 16.032C7.3330079999999995 18.028776 9.264456000000001 20.030904 11.367408 21.583416C11.734944 21.854784 11.803968 21.888 12 21.888C12.195888 21.888 12.264288 21.855096 12.632304 21.5838C15.059472 19.794456 17.242848 17.410536 18.548136000000003 15.124608C19.580088 13.317312000000001 20.10288 11.669232000000001 20.152152 10.068C20.175648000000002 9.304752 20.108712 8.67804 19.931016 7.997664C19.373712 5.863656 17.637984000000003 3.8594640000000004 15.495096 2.875584C14.249352 2.303616 12.995304 2.05872 11.604000000000001 2.1157440000000003M11.723640000000001 6.888648C10.989023999999999 6.949224 10.231776 7.364232 9.792792 7.946808000000001C9.501936 8.3328 9.328704 8.707488 9.239256 9.144C9.169776 9.483096000000002 9.181368 10.055472 9.264048 10.368C9.394896000000001 10.862712 9.638688 11.290464 9.996 11.652264C10.512336000000001 12.175080000000001 11.117112 12.451439999999998 11.841744 12.49572C12.643416 12.544680000000001 13.409376000000002 12.252504 13.982952000000001 11.678952C14.394648000000002 11.267232 14.676264 10.733184 14.772408000000002 10.18176C14.813184 9.948024 14.818968 9.465768 14.783616000000002 9.247968C14.594520000000001 8.08296 13.662432 7.127544 12.518256000000001 6.92592C12.256944 6.879864 11.984832 6.867096000000001 11.723640000000001 6.888648M11.767631999999999 7.897896C11.370672 7.945104 11.042808 8.108664 10.738152 8.411472C10.560431999999999 8.588112 10.49952 8.668776000000001 10.407336 8.849424C10.25724 9.143544 10.200000000000001 9.373944 10.200000000000001 9.684000000000001C10.200000000000001 10.356024 10.559208 10.963248 11.136000000000001 11.266295999999999C11.474904 11.444328 11.763552 11.510544 12.105264 11.488631999999999C12.38364 11.470776 12.563160000000002 11.423568000000001 12.804 11.304960000000001C13.416744 11.003136 13.8 10.379424 13.8 9.684000000000001C13.8 8.601528 12.852552000000001 7.768871999999999 11.767631999999999 7.897896"
                      stroke="none"
                      fill="#000000"
                      fillRule="evenodd"
                    />
                  </svg>
                  <div className="ml-2 text-[14px] font-bold">Location</div>
                </div>

                <div className="py-[20px] px-[16px]">
                  <div className="text-[16px]">Florida, NY 10921</div>
                </div>
              </div>

              <div className="rounded-md bg-white flex flex-col shadow-[0_2px_3px_0_rgba(120,131,145,.3)] mb-4 border-none">
                <div className="px-[16px] py-[12px] flex flex-row bg-[#f4f6fa] border-none items-center">
                  <svg
                    className="h-[21px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="Tool--Streamline-Mynaui"
                  >
                    <path
                      d="M16.302072000000003 1.106304C15.219648000000001 1.18428 14.087712000000002 1.599408 13.212 2.2395359999999997C11.0532 3.8176080000000003 10.161816 6.469463999999999 10.933968 9.0168C10.979088 9.165648 11.016 9.30636 11.016 9.329472C11.016 9.353328 8.959344 11.429904 6.255864 14.135736000000001C3.6377760000000006 16.75608 1.45752 18.954 1.410816 19.02C1.056312 19.521048 0.9989040000000001 20.218992 1.2683039999999999 20.75268C1.3777920000000001 20.969592 1.498416 21.110064 2.085888 21.704952000000002C2.959128 22.589208 3.1606080000000003 22.744824 3.5666160000000002 22.848672C3.7764720000000005 22.902336000000002 4.12944 22.911768000000002 4.357584 22.869792C4.518408 22.840224000000003 4.78752 22.722912 4.9602 22.607136C5.023896000000001 22.564439999999998 7.22532 20.38176 9.852264 17.756736C13.079568 14.531808 14.644392 12.984 14.677439999999999 12.984C14.704344 12.984 14.828448 13.016448 14.953176 13.056096C15.563952000000002 13.250231999999999 16.07928 13.327512 16.776 13.329528000000002C17.323104 13.331088 17.559432 13.308696 18.048000000000002 13.208976000000002C19.457352 12.921336 20.835912 12.036264000000001 21.707424 10.859472C22.288176 10.07532 22.653576 9.210504 22.82772 8.208C22.877712000000002 7.92024 22.883928 7.810175999999999 22.883328 7.224C22.882752 6.6496319999999995 22.875648 6.523704 22.828656 6.2534160000000005C22.71684 5.610144 22.624920000000003 5.3697360000000005 22.416 5.174328C22.077744 4.857936 21.595248 4.810584 21.174864 5.052528C21.104136 5.0932319999999995 20.62188 5.553816 19.92 6.250992000000001C18.89076 7.27332 18.763224 7.3919760000000005 18.6072 7.472328C17.9946 7.787903999999999 17.28264 7.68168 16.799376000000002 7.202616C16.58856 6.9936240000000005 16.470744 6.7818 16.391976 6.47016C16.303608 6.120456 16.348032 5.769312 16.527383999999998 5.4C16.609944000000002 5.230008 16.67844 5.156016 17.7606 4.0680000000000005C18.966984 2.855112 18.993072 2.82456 19.071336000000002 2.532C19.187784 2.096664 18.976632 1.607208 18.581688 1.3971120000000001C18.34092 1.269024 17.754816 1.147488 17.172 1.104792C16.800768 1.0776240000000001 16.697784 1.077792 16.302072000000003 1.106304M16.321344 2.112984C13.759224000000001 2.359944 11.76156 4.46352 11.670768 7.010184000000001C11.649312 7.611960000000001 11.735064000000001 8.217048 11.92284 8.78892C12.004584 9.037944000000001 12.011832 9.082464 12.011928000000001 9.336C12.012 9.599256 12.008208 9.620304 11.929848 9.792C11.847984 9.971424 11.832408000000001 9.987312 7.030272 14.796000000000001C4.380696 17.449199999999998 2.192904 19.6578 2.16852 19.704C2.105592 19.823232 2.1057360000000003 20.185224 2.168736 20.304000000000002C2.230296 20.42004 3.538848 21.73248 3.672 21.811728000000002C3.767712 21.86868 3.804552 21.876 3.996 21.875904C4.159416 21.875832000000003 4.232448 21.865032 4.296 21.831552000000002C4.3422 21.807216 6.545400000000001 19.624944 9.192 16.982088C13.032984 13.146552000000002 14.02992 12.16332 14.1324 12.109632C14.4594 11.938368 14.717184000000001 11.932128 15.226584 12.083112000000002C16.281048 12.395664 17.131296 12.417312 18.112368 12.156576000000001C19.470048 11.79576 20.652576 10.849295999999999 21.310296 9.597072C21.853152 8.563488000000001 22.02588 7.329432 21.788568 6.180168C21.761280000000003 6.0480719999999994 21.733488 5.930976 21.726792 5.91996C21.72012 5.90892 21.221736 6.3903360000000005 20.619312 6.989712C20.014872 7.591128000000001 19.452912 8.129712 19.36536 8.191488C18.475991999999998 8.81904 17.292912 8.817143999999999 16.399704 8.186736C15.399072000000002 7.480512 15.055104000000002 6.1146 15.598224000000002 5.0040000000000004C15.66276 4.872 15.772344000000002 4.6884 15.841728 4.596C15.911088 4.5036000000000005 16.447656 3.9459359999999997 17.034096 3.3567600000000004C17.620535999999998 2.76756 18.091248 2.280264 18.080160000000003 2.27388C18.044952000000002 2.253552 17.708592 2.185296 17.46 2.1480479999999997C17.151072000000003 2.101776 16.610544 2.08512 16.321344 2.112984"
                      stroke="none"
                      fill="#000000"
                      fillRule="evenodd"
                    />
                  </svg>
                  <div className="ml-2 text-[14px] font-bold">Services</div>
                </div>

                <div className="py-[20px] px-[16px]">
                  <div className="text-[16px]">
                    No services currently selected.
                  </div>
                </div>
              </div>

              <div className="rounded-md bg-white flex flex-col shadow-[0_2px_3px_0_rgba(120,131,145,.3)] mb-4 border-none">
                <div className="px-[16px] py-[12px] flex flex-row bg-[#f4f6fa] border-none items-center">
                  <svg
                    className="h-[21px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="Car--Streamline-Ultimate"
                  >
                    <path
                      d="M6.864 3.4483200000000003C5.93652 3.5496000000000003 5.1421920000000005 4.197432 4.864008 5.079504C4.80984 5.251272 4.744752 5.629248 4.593888000000001 6.648000000000001C4.571424 6.7998 4.549848 6.927840000000001 4.545984 6.93252C4.54212 6.937224 4.313976 6.811007999999999 4.038984 6.652032C3.27672 6.211392 3.1914960000000003 6.181656 2.688 6.180672C2.278368 6.17988 2.13696 6.210552000000001 1.8098640000000001 6.37116C1.3400880000000002 6.6018 0.963672 7.080191999999999 0.827184 7.62C0.76728 7.8568560000000005 0.77196 8.25564 0.8376 8.508000000000001C0.914592 8.80404 1.075296 9.107136 1.262448 9.309288C1.461456 9.524232000000001 1.597776 9.620280000000001 2.16936 9.948336000000001L2.622696 10.20852 2.56536 10.253496C1.768848 10.877976 1.2540959999999999 11.652552 1.018896 12.580368C0.900432 13.047648 0.888888 13.217736 0.888744 14.496C0.888648 15.566304 0.893112 15.705696 0.9338399999999999 15.903048C1.104744 16.731168 1.706928 17.408160000000002 2.511768 17.677032L2.7075359999999997 17.742408 2.717616 18.393216000000002C2.72688 18.990408000000002 2.732232 19.057824 2.782584 19.212C3.1246320000000005 20.259096 4.19172 20.80092 5.233704 20.456544C5.78112 20.275608000000002 6.266159999999999 19.768008000000002 6.434424 19.2C6.481728 19.040304 6.48888 18.951624 6.497976 18.414L6.508248000000001 17.808 11.987688 17.808L17.467152 17.808 17.47812 18.402C17.487744 18.92256 17.495592 19.017936 17.541576 19.173432000000002C17.7318 19.816464 18.252024 20.330496 18.884736 20.500656C19.098959999999998 20.558256 19.59072 20.570472 19.788 20.52312C20.430744 20.3688 20.967552 19.883064 21.183888 19.26C21.249456000000002 19.071192 21.250704000000002 19.056984 21.259224000000003 18.405024L21.267888000000003 17.742072 21.424704000000002 17.699616000000002C21.776592 17.60436 22.252128000000003 17.311176 22.49712 17.038415999999998C22.85136 16.644023999999998 23.056344000000003 16.179096 23.111040000000003 15.646056C23.141424 15.35016 23.142552000000002 13.787591999999998 23.112744 13.35552C23.043576 12.353712000000002 22.648992 11.445624 21.972096 10.730376C21.803688 10.55244 21.54156 10.316808 21.433824 10.246536C21.377208 10.2096 21.382824 10.205352000000001 21.830184 9.948599999999999C22.079784 9.805344 22.35 9.641832 22.430688 9.585216C22.918968 9.242616 23.210328 8.672184 23.213832 8.052C23.215536 7.7472959999999995 23.172648000000002 7.544424 23.049744 7.2758400000000005C22.647168 6.396072 21.665256000000003 5.959872 20.743199999999998 6.25116C20.616576000000002 6.291168 20.383608 6.410616 20.023272 6.620304C19.492824000000002 6.928968 19.490496 6.9300239999999995 19.477944 6.867144C19.471008 6.832416000000001 19.416240000000002 6.4746 19.35624 6.072C19.29624 5.6693999999999996 19.231008000000003 5.276496000000001 19.211280000000002 5.198904000000001C19.04304 4.53708 18.544944 3.9493679999999998 17.897448 3.648696C17.788848 3.598248 17.6082 3.5316479999999997 17.496 3.500688L17.292 3.444384 12.120000000000001 3.441768C9.275400000000001 3.440328 6.910200000000001 3.44328 6.864 3.4483200000000003M6.948 4.4558159999999996C6.43008 4.52088 5.93712 4.937784000000001 5.809032 5.419008C5.781432000000001 5.522664 5.208192 9.287592 5.208072 9.366C5.208 9.405912 5.54868 9.408 12.026664 9.408L18.845352 9.408 18.831192 9.33C18.823415999999998 9.287088 18.692352 8.4204 18.539952000000003 7.404C18.387528000000003 6.3876 18.245976000000002 5.4971760000000005 18.22536 5.425248C18.100008000000003 4.987824 17.746272 4.632791999999999 17.295168 4.491624000000001C17.183832000000002 4.4567760000000005 16.683936 4.452768000000001 12.096 4.449912C9.3042 4.448184 6.9876 4.450824 6.948 4.4558159999999996M21.192 7.178088C21.1326 7.187615999999999 21.0516 7.207848 21.012 7.223064000000001C20.869032 7.2780000000000005 19.656 8.000424 19.656 8.030616C19.656 8.047656 19.7046 8.38068 19.764 8.77068C19.8234 9.160704 19.872 9.489431999999999 19.872 9.501216000000001C19.872 9.513024 19.912512 9.53016 19.962 9.539328C20.011512 9.548496 20.114304 9.576888 20.190456 9.602400000000001L20.328912 9.648816 21.079056 9.217344C21.49164 8.980008 21.874368 8.747184 21.929592 8.699928C22.042128 8.603592 22.164816000000002 8.376144 22.196112 8.205888C22.256591999999998 7.876776 22.092959999999998 7.4904720000000005 21.819624 7.317144C21.630336 7.197096000000001 21.3966 7.145304 21.192 7.178088M2.349408 7.232495999999999C2.117904 7.3277280000000005 1.989624 7.4472000000000005 1.874136 7.675128000000001C1.8103920000000002 7.800936 1.776504 8.05692 1.8038880000000002 8.205888C1.835184 8.376144 1.957872 8.603592 2.070408 8.699928C2.125632 8.747184 2.509224 8.980512 2.922816 9.2184L3.674832 9.650976 3.823416 9.602808000000001C3.905136 9.576312 4.015416 9.54348 4.06848 9.529872L4.16496 9.505128000000001 4.270656 8.790552C4.3288079999999995 8.397552000000001 4.377192 8.061888 4.3782000000000005 8.044632C4.380552 8.003496 3.095136 7.25832 2.941632 7.211856000000001C2.7620880000000003 7.157472 2.510496 7.166232000000001 2.349408 7.232495999999999M4.884 10.417656000000001C4.016232 10.485719999999999 3.256872 10.8636 2.684208 11.512296C2.301384 11.945952 2.0410559999999998 12.503664 1.932936 13.121712000000002C1.877952 13.436015999999999 1.8788160000000003 15.562464 1.9340160000000002 15.776544C1.992312 16.002648 2.10564 16.194912000000002 2.29128 16.382664C2.4693840000000002 16.562808 2.642016 16.666415999999998 2.8932480000000003 16.743959999999998C3.0306480000000002 16.786344 3.372144 16.788 12.012 16.788L20.988 16.788 21.18 16.720704C21.608136000000002 16.570632 21.919272 16.257336000000002 22.057776 15.836832000000001L22.116 15.66 22.115688 14.484C22.115424 13.470576 22.109640000000002 13.2774 22.073808 13.086623999999999C21.923088 12.284352 21.510863999999998 11.588544 20.9022 11.109096000000001C20.379432 10.697328 19.786608 10.469496 19.098744 10.416C18.742704 10.388328 5.238 10.389888 4.884 10.417656000000001M5.074272 11.97732C4.344288 12.065712 3.729552 12.590376000000001 3.5003520000000004 13.320599999999999C3.451896 13.475015999999998 3.4441680000000003 13.548432000000002 3.44484 13.848C3.44568 14.210016 3.4594560000000003 14.289167999999998 3.5700000000000003 14.56764C3.6534720000000003 14.77788 3.7715039999999997 14.957640000000001 3.946224 15.140736C4.202712 15.409488000000001 4.481352 15.581136000000003 4.816584 15.67692C5.083464 15.753143999999999 5.548344 15.753216 5.814984 15.677015999999998C6.4262880000000004 15.502392 6.929400000000001 15.02364 7.119264000000001 14.436C7.237248000000001 14.070744 7.224576 13.541592 7.08912 13.179143999999999C6.920544 12.728040000000002 6.46068 12.256944 6.032496 12.096744000000001C5.73336 11.984832 5.378016000000001 11.940552 5.074272 11.97732M18.528 11.967888C18.031536 12.016368 17.651736 12.201191999999999 17.3106 12.560352C17.110368 12.77112 16.971743999999997 12.996287999999998 16.879872 13.26C16.817040000000002 13.440408000000001 16.813032 13.475904 16.813536 13.848C16.814040000000002 14.212992 16.819104000000003 14.259024 16.878432 14.436C17.077632 15.030384 17.574912 15.502728000000001 18.185015999999997 15.677015999999998C18.451656 15.753216 18.916536 15.753143999999999 19.183416 15.67692C19.792752 15.502848 20.282568 15.02808 20.488416 14.412C20.546088 14.239392 20.552736 14.183664 20.554272 13.86C20.555784 13.546199999999999 20.548776 13.476984000000002 20.499672 13.320599999999999C20.312424 12.724272000000001 19.841304 12.23472 19.284504 12.057912C19.123896 12.006888 18.74484 11.94624 18.648 11.956032C18.6282 11.958048 18.574199999999998 11.963376 18.528 11.967888M5.158367999999999 12.98352C4.89924 13.029024 4.631232 13.23888 4.514064 13.488C4.460928 13.601016 4.452 13.652784 4.452 13.848C4.452 14.045328 4.460688 14.094528000000002 4.516512 14.213664C4.589664 14.369712000000002 4.771824 14.564400000000001 4.911264 14.635536C5.071416 14.717256 5.285544 14.747688 5.466024 14.714447999999999C5.661312000000001 14.678448 5.783136 14.617176 5.927112 14.482512C6.098568 14.32212 6.1755119999999994 14.149199999999999 6.187104 13.898184C6.1978800000000005 13.664472 6.150672000000001 13.498655999999999 6.023256 13.322784C5.83788 13.066872 5.480976 12.92688 5.158367999999999 12.98352M18.521568 12.984432000000002C18.265992 13.028471999999999 18.034512 13.200336 17.902248 13.444296C17.823432 13.589664 17.82 13.606536 17.82 13.848C17.82 14.079072000000002 17.825832000000002 14.11152 17.890296 14.238743999999999C18.068136000000003 14.589696 18.454368000000002 14.784408 18.834024 14.714447999999999C18.920160000000003 14.698560000000002 19.033848 14.663544 19.086648 14.636616000000002C19.228008000000003 14.564496000000002 19.409928 14.370576 19.483488 14.213664C19.539312000000002 14.094528000000002 19.548000000000002 14.045328 19.548000000000002 13.848C19.548000000000002 13.652784 19.539072 13.601016 19.485936 13.488C19.317576 13.129992 18.910464 12.917424 18.521568 12.984432000000002M3.7243679999999997 18.354C3.7317600000000004 18.882984 3.7339200000000003 18.904104 3.7939439999999998 19.032048C3.8771760000000004 19.209432 4.056168 19.38336 4.247928000000001 19.473144C4.383456 19.5366 4.430832 19.546224000000002 4.6080000000000005 19.546224000000002C4.785888 19.546224000000002 4.831968 19.536792000000002 4.968 19.472472C5.136888 19.392648 5.271096 19.275168 5.367024 19.1232C5.479176000000001 18.945528000000003 5.495472 18.842208 5.495736 18.306L5.496 17.808 4.606368 17.808L3.7167600000000003 17.808 3.7243679999999997 18.354M18.483912 18.342C18.492312000000002 18.867552 18.493512 18.87828 18.559416 19.02C18.825936 19.593096 19.558872 19.730856000000003 19.999488 19.290696C20.136864 19.15344 20.227656 18.967248 20.257368 18.761808C20.269296 18.679416 20.279256 18.431088 20.27952 18.21L20.28 17.808 19.377696 17.808L18.475368 17.808 18.483912 18.342"
                      stroke="none"
                      fill="#000000"
                      fillRule="evenodd"
                    />
                  </svg>
                  <div className="ml-2 text-[14px] font-bold">Vehicle</div>
                </div>

                <div className="py-[20px] px-[16px]">
                  <div className="text-[16px]">
                    No vehicle currently selected.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceFooter />
    </div>
  );
}
