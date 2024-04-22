"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Chats = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const getData = () => {
    axios
      .get("/api/chats")
      .then((res) => {
        const data = res.data;
        // console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(e.target.message.value);
    const message = inputValue;

    try {
      const response = await axios.post("/api/chats", { message });
      if (response.status === 200) {
        console.log("Data submitted successfully");
        getData();
        setInputValue("");
      } else {
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

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
          {data && data.length > 0 && (
            <div className="py-5 ">
              {data.map(({ id, name, text }) => {
                return (
                  <div
                    className={`${!name ? "bg-[#FDF4DF]" : "bg-transparent"}`}
                    key={id}>
                    <div className="chat__item chat__primary flex gap-5 py-7 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <img
                        src={`/images/user-${name ? "1" : "2"}.png`}
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
          )}
        </main>
      </div>
      <div className="message-box fixed bottom-0 left-0 w-full bg-[#FFFBF4] pt-6">
        <form
          onSubmit={handleSubmit}
          className="message px-4 rounded-full bg-[#FDF4DF] max-w-7xl mx-auto flex items-center justify-between">
          <input
            type="text"
            name="message"
            value={inputValue}
            placeholder="Send a message…"
            className="w-full py-4 px-5 bg-transparent text-xl font-medium text-black placeholder:text-black"
            onChange={(e) => setInputValue(e.target.value)}
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
