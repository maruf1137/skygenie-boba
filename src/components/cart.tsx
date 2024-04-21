import React from "react";

interface CartProps {
  showCart: boolean;
}

const Cart: React.FC<CartProps> = ({ showCart }) => {
  return (
    <div
      className={`${
        !showCart ? "!hidden" : "flex"
      } cart-wrapper fixed top-32 right-4 max-w-[500px] w-full h-[80vh] rounded-[50px] bg-white z-10 overflow-y-auto`}>
      <div className="content-wrapper p-9">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-extrabold text-[#F6AC19]">My Order</h2>
          <p className="text-2xl font-bold">(4)</p>
        </div>
        <div role="list" className="divide-y divide-gray-200">
          {[1, 2, 3, 4, 5, 6].map((i) => {
            return (
              <div className="py-6 flex items-center" key={i}>
                <div className="flex-auto">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-gray-900 text-base">
                      Brown Sugar Boba Milk
                    </h3>
                    <p className="text-lg font-bold">
                      <span className="text-[#F6AC19] text-sm">x</span> 2
                    </p>
                  </div>
                  <p className="text-gray-500">blue</p>
                  <p className="text-gray-500">blue</p>
                  <p className="text-gray-500">blue</p>
                  {/* <div className="price">
                    <span className="text-[#F6AC19]">$</span>
                    <span className="">10</span>
                  </div> */}
                  <p className="text-lg font-bold">
                    <span className="text-[#F6AC19]">$</span> 10
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <form className="summary bg-white px-9 py-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-gray-900 text-base">Subtotal</h3>
          <p className="text-xl font-bold">
            <span className="text-[#F6AC19]">$</span> 20.8
          </p>
        </div>
        <button className="bg-[#FDF4DF] py-3 px-4 rounded-3xl w-full flex items-center gap-3 mt-4">
          <img
            src="/images/icon_tips.png"
            alt=""
            className="h-12 w-12 rounded-full"
          />
          <p className="text-bold text-[#F6AC1C]">
            Confirm the Order by saying “I’m Done!”
          </p>
        </button>
      </form>
    </div>
  );
};

export default Cart;
