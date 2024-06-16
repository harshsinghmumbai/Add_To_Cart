"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";

const cart = () => {
  const data = useSelector((state) => state.allcart);
  return (
    <>
      <div className="border border-gray-500 rounded-xl max-w-3xl w-[80%] m-auto mt-5 ">
        <div className="bg-black rounded-t-xl p-3 sm:px-5 w-full h-fit flex justify-between items-center">
          <p className="text-white text-sm sm:text-lg font-semibold">
            Cart Calculate 0
          </p>
          <Button variant="destructive" size="sm" className="text-sm">
            Empty Cart
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">Action</TableHead>
              <TableHead className="text-center"> Product Image</TableHead>
              <TableHead className="text-center"> Product Name</TableHead>
              <TableHead className="text-center"> Price</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
              <TableHead className="text-center"> Total Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, id) => {
              const { price, qnty, dish, imgdata } = item;
              return (
                <TableRow key={id}>
                  <TableCell>
                    <MdDeleteForever className="text-red-500 text-3xl m-auto" />
                  </TableCell>
                  <TableCell>
                    <img
                      src={imgdata}
                      alt="Food_Image"
                      className="w-[5rem] h-[3rem] object-cover rounded-lg m-auto"
                    />
                  </TableCell>
                  <TableCell className="capitalize text-center">
                    {dish}
                  </TableCell>
                  <TableCell className="text-center">₹ {price}</TableCell>
                  <TableCell className="text-center">{qnty}</TableCell>
                  <TableCell className="text-center">
                    ₹ {price * qnty}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div className="flex justify-end space-x-5 p-2 px-5 font-serif font-semibold text-xs sm:text-base sm:space-x-10">
          <p>Items cart : 5</p>
          <p>Total Prices :78 </p>
        </div>
      </div>
    </>
  );
};

export default cart;
