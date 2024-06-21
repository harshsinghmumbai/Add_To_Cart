"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { RemoveAllCart, Remove_Item } from "@/Store/Slice/CartSlice";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const cart = () => {
  const data = useSelector((state) => state.allcart);
  const dispatch = useDispatch();

  const DeleteAllCart = () => {
    dispatch(RemoveAllCart());
  };

  const delete_item = (item) => {
    dispatch(Remove_Item(item));
  };
  return (
    <>
      <div className="border border-gray-500 rounded-xl max-w-3xl w-[80%] m-auto mt-5 ">
        <div className="bg-black rounded-t-xl p-3 sm:px-5 w-full h-fit flex justify-between items-center">
          <p className="text-white text-sm sm:text-lg font-semibold">
            Cart Calculate {data.length === 0 ? "" : data.length}
          </p>
          {data.length === 0 ? (
            ""
          ) : (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="destructive"
                  size="sm"
                  className="text-sm active:scale-110 transition ease-in-out"
                >
                  Empty Cart
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will delete all cart item
                    from your ecommerce webapp
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => DeleteAllCart()}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
        {data.length === 0 ? (
          <p className="text-base font-semibold md:text-lg md:p-4 lg:text-xl lg:p-6 capitalize p-2 text-center">
            Not Found any Items
          </p>
        ) : (
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] text-center">
                    Action
                  </TableHead>
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
                        <MdDeleteForever
                          className="text-red-500 text-3xl m-auto cursor-pointer capitalize"
                          onClick={() => {
                            toast(`${dish}`, {
                              description: "Item delete successfully",
                              className:
                                "group-[.toaster]:bg-red-100 group-[.toaster]:border group-[.toaster]:border-red-800",
                              cancel: {
                                label: "Cancel",
                                onClick: () => console.log("Undo"),
                              },
                            });
                            return delete_item(item);
                          }}
                        />
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
        )}
      </div>
    </>
  );
};

export default cart;
