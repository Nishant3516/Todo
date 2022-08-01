import React, { useState } from "react";
import { useEffect } from "react";
import del from "./del.png";

const Body = () => {
  const getitem = () => {
    let l_items = localStorage.getItem("listitems");
    if (l_items){
      return JSON.parse(localStorage.getItem("listitems"));
    }else{
      return [];
    }
  };
  const [text, setText] = useState("");
  const [items, setItems] = useState(getitem());


  useEffect(() => {
    localStorage.setItem("listitems", JSON.stringify(items)), [items];
  });

  function change(event) {
    setText(event.target.value);
  }

  function Element() {
    text && setItems((oldelem) => [...oldelem, text]);
    setText("");
  }

  function Delitem(ind) {
    const ItemList = items.filter((elem, id) => {
      return id !== ind;
    });
    setItems(ItemList);
  }

  function Edititem(ind) {
    const newitems = items.map((item) => {
      if (item.id == ind) {
        item = text;
      }
      return item;
    });
    setItems(newitems);
  }

  return (
    <>
      <div className="flex h-[60%] pt-7">
        <div className="w-[40%] h-[10%] flex-col justify-center items-center">
          <div className="mx-20 my-8">
            <textarea
              className="border-red-500 border-4 rounded-[5%] text-2xl px-3 py-3"
              type="text"
              placeholder="Enter your task here..."
              value={text}
              onChange={change}
              cols={40}
              rows={8}
            ></textarea>
          </div>
          <div className="flex justify-center items-center my-2">
            <button
              className="bg-blue-600 py-2 px-2 border-3 rounded-[110%] text-2xl"
              onClick={Element}
            >
              Enter
            </button>
          </div>
        </div>
        <div className="w-[50%] px-14 flex flex-col overflow-y-auto h-[100%] scrollbar-thin scrollbar-thumb-black scrollbar-track-white">
          {items.map((elem, ind) => {
            return (
              <>
                <div
                  id={ind}
                  key={ind}
                  className="flex justify-around items-start w-[100%] my-1 border-black border-2"
                >
                  <div className="w-[65%]">
                    <p className="text-left text-2xl break-all">{elem}</p>
                  </div>
                  <div className=" w-[20%] mt-1 mr-[-7%] flex justify-center items-center">
                    {/* <img
                      src={edit}
                      alt=""
                      className="w-[20%]"
                      onClick={() => Edititem(ind)}
                    /> */}
                    <img
                      src={del}
                      alt=""
                      className="w-[32%]"
                      onClick={() => Delitem(ind)}
                    />
                  </div>
                </div>
                <br />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
