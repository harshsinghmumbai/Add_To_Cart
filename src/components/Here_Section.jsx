"use client";
import { useState } from "react";
import Card_Data from "@/components/Card_Data";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { addToCart } from "@/Store/Slice/CartSlice";
import Image from "next/image";

const Here_Section = () => {
  const [data, setdata] = useState(Card_Data);
  const dispatch = useDispatch();

  const sendData = (items) => {
    dispatch(addToCart(items));
  };
  return (
    <>
      <div className="sm:grid sm:grid-cols-2 sm:gap-2 lg:grid lg:grid-cols-3 lg:gap-4 xl:grid xl:grid-cols-4 xl:gap-3">
        {data.map((items, id) => {
          const { imgdata, dish, address, price, rating } = items;
          return (
            <div
              className="w-[300px] rounded-md border dark:border dark:border-gray-500 m-auto mt-3 z-0"
              key={id}
            >
              <div className="overflow-hidden rounded-md">
                <Image
                  src={imgdata}
                  alt="Laptop"
                  className="h-[200px] w-full rounded-md object-cover hover:scale-125 duration-500 hover:cursor-pointer"
                  width={100}
                  height={100}
                />
              </div>
              <div className="p-4">
                <h1 className="text-lg font-semibold capitalize">{dish}</h1>
                <p className="mt-1 text-base text-gray-600">{address}</p>
                <p className="mt-1 flex justify-between mb-3">
                  <span className="text-base text-blue-500 font-semibold">
                    ₹ {price}
                  </span>
                  <span className="text-base text-blue-500 font-semibold">
                    {rating} ⭐
                  </span>
                </p>
                <Button
                  variant="outline"
                  className="active:scale-125 transition ease-in-out"
                  onClick={() => {
                    toast(`${dish}`, {
                      description: "Item add to Your Cart",
                      className:
                        "group-[.toaster]:bg-green-100 group-[.toaster]:border group-[.toaster]:border-green-800",
                      cancel: {
                        label: "Close",
                        onClick: () => console.log("Undo"),
                      },
                    });
                    return sendData(items);
                  }}
                >
                  Add To Card
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Here_Section;
