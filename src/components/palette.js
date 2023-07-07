import React from "react";

const palette = () => {
  return (
    <>
      {/* component */}
      <div className="min-h-screen bg-gray-50 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
        <div className="relative px-6 pt-10 pb-8 bg-[#efedec] shadow-xl sm:max-w-lg sm:mx-auto rounded-xl sm:px-10">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-400/50">
              <img src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-softail-standard/2022-softail-standard-motorcycle-nav.jpg?impolicy=myresize&rw=500" />
              <div className="py-8 text-base flex justify-between">
                <p className="text-xl font-serif text-gray-900 opacity-75">
                  Choose your pride
                </p>
                <div className="relative cursor-pointer gap-1 flex justify-center">
                  <div className="w-8 h-8 bg-[#4b2612] transition-all rounded-full block ring-[#f6cda8] hover:ring-2 ring-offset-1 " />
                  <div className="w-8 h-8 bg-[#888382] transition-all rounded-full block ring-[#d89d94] hover:ring-2 ring-offset-1 " />
                  <div className="w-8 h-8 bg-[#e3d8d9] transition-all rounded-full block ring-[#dd6b6c] hover:ring-2 ring-offset-1 " />
                  <div className="w-8 h-8 bg-[#ffffff] transition-all rounded-full block ring-[#875d71] hover:ring-2 ring-offset-1 " />
                  <div className="w-8 h-8 bg-[#000000] transition-all rounded-full block ring-[#5b5b5b] hover:ring-2 ring-offset-1 " />
                </div>
              </div>
              <div className="divide-y divide-gray-400/50" />
            </div>
          </div>
        </div>
        {/* color scheme from https://www.instagram.com/p/CXG6caosw0h/ */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n.bg\\-\\[\\#f6cda8\\]{\n  background-color: #f6cda8\n}\n.bg\\-\\[\\#d89d94\\]{\n  background-color: #d89d94\n}\n.bg\\-\\[\\#dd6b6c\\]{\n  background-color: #dd6b6c\n}\n.bg\\-\\[\\#875d71\\]{\n  background-color: #875d71\n}\n.bg\\-\\[\\#5b5b5b\\]{\n  background-color: #5b5b5b\n}\n.bg\\-\\[\\#efedec\\]{\n  background-color: #efedec\n}\n.divide-gray-400\\/50 > :not([hidden]) ~ :not([hidden]) {\n    border-color: rgb(156 163 175 / 0.5);\n}\n",
          }}
        />
      </div>
    </>
  );
};

export default palette;
