import React from "react";

const data = [
  {
    id: 1,
    name: "SkyGenie",
    text: (
      <p>
        Hello, welcome! I’m SkyGenie, I can help you place your order today.
      </p>
    ),
    userImg: "/images/user-1.png",
    messageView: "primary",
  },
  {
    id: 2,
    text: <p>May I have two boba milk tea?</p>,
    userImg: "/images/user-2.png",
    messageView: "reply",
  },
  {
    id: 3,
    name: "SkyGenie",
    text: (
      <p>
        Sure! What kind of flavor do you like? <br />
        We have matcha oolong, brown sugar and oolong.
      </p>
    ),
    userImg: "/images/user-1.png",
    messageView: "primary",
  },
  {
    id: 4,
    text: <p>Maybe just brown sugar.</p>,
    userImg: "/images/user-2.png",
    messageView: "reply",
  },
  {
    id: 5,
    name: "SkyGenie",
    text: <p>Which size do you prefer? And any adjustments or preferences?</p>,
    userImg: "/images/user-1.png",
    messageView: "primary",
  },
  {
    id: 6,
    text: <p>Normal size, no ice but extra boba.</p>,
    userImg: "/images/user-2.png",
    messageView: "reply",
  },
];

const Chats = () => {
  return (
    <div className="chat relative">
      <div className="pt-[90px] mb-[80px]">
        <header>
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-extrabold leading-tight text-[#F6AC1C]">
              Welcome to SkyGenie Boba!
            </h1>
          </div>
        </header>
        <main className="relative">
          <div className="py-5 ">
            {data.map(({ id, name, text, userImg, messageView }) => {
              return (
                <div
                  className={`${
                    messageView == "reply" ? "bg-[#FDF4DF]" : "bg-transparent"
                  }`}
                  key={id}>
                  <div className="chat__item chat__primary flex gap-5 py-7 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <img
                      src={userImg}
                      alt=""
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="name text-xl font-extrabold text-[#F6AC1C]">
                        {name && name}
                      </h3>
                      <div className="text-xl font-medium">{text}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
      <div className="message-box fixed bottom-0 left-0 w-full bg-[#FFFBF4] pt-6">
        <form
          action="#"
          className="message px-4 rounded-full bg-[#FDF4DF] max-w-7xl mx-auto flex items-center justify-between">
          <input
            type="text"
            placeholder="Send a message…"
            className="w-full py-4 px-5 bg-transparent text-xl font-medium text-black placeholder:text-black"
          />
          <img src="/images/icon_loading.png" alt="" />
        </form>

        <footer className="bg-transparent w-full ">
          <div className="py-4 px-4 text-center">
            <p>Powered by SkyGenie (EdgeThought inside)</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Chats;
