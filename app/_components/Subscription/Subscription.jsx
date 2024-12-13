import Image from "next/image";
import React from "react";

const Subscription = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="flex flex-col items-center justify-between gap-y-6 md:flex-row">
          <div>
            <div>
              <h1 className="text-2xl font-semibold leading-[29px] text-deepCharcoal">
                Subscribe to our awesome emails.
              </h1>
              <p className="mt-1 text-xl font-normal text-deepCharcoal">
                Get our latest offers & news straight in your inbox.
              </p>
            </div>
            <div className="mt-10 flex h-[89px] w-full max-w-[637px] items-center justify-center rounded-[10px] bg-[#F7F8F7] p-4">
              <input
                type="email"
                placeholder="Please Enter Your Email Address"
                className="flex w-full items-center rounded-l-md bg-[#F7F8F7] px-4 py-2 outline-none"
              />
              <button className="flex h-[69px] items-center justify-center rounded-[6px] bg-softPink px-10 font-semibold text-white">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-2xl font-semibold leading-[29px] text-deepCharcoal">
                Download our apps
              </h1>
              <p className="mt-1 text-xl font-normal text-deepCharcoal">
                Shop our products & offers on-the-go
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div>
                <Image
                  width={224}
                  height={67}
                  unoptimized
                  src="/images/play.png"
                  alt="Google Play"
                />
              </div>
              <div>
                <Image
                  width={224}
                  height={67}
                  unoptimized
                  src="/images/App Store.png"
                  alt="Apple Store"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
