import React from "react";
import "./cart.css";
import Contact from "../contact/contact";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import { deleteProduct } from "../../store/productSlice";
import handIcon from "../../assets/images/hand.png";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";
const Cart = () => {
  const products = useSelector((state) => state.productReducer.cartItems);
  let subTotal = useSelector((state) => state.productReducer.sumTotal);
  let dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <div>
      {products.length === 0 ? (
        <div>
          <div className="cartMainDiv1">
            Your Cart <img src={handIcon} alt="" className="handIcon" />
          </div>
          <div className="cartMainDiv11">No Items Added here</div>
          <Contact />
        </div>
      ) : (
        <div className="tableDiv">
          <div className="cartMainDiv13">
            Your Cart <img src={handIcon} alt="" className="handIcon" />
          </div>
          <TableContainer
            component={Paper}
            style={{
              width: "620px",
              backgroundColor: "#FFEEA9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Table sx={{ height: "80px" }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "white" }}>
                <TableRow
                  style={{ fontSize: "20px", backgroundColor: "#FFBF78" }}
                >
                  <TableCell
                    align="center"
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      border: "1px solid black",
                    }}
                  >
                    Image
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      border: "1px solid black",
                    }}
                  >
                    Product Title{" "}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      border: "1px solid black",
                    }}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      border: "1px solid black",
                    }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      border: "1px solid black",
                    }}
                  >
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": {} }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      sx={{
                        border: "1px solid black",
                        paddingTop: 0.8,
                        paddingBottom: 0,
                      }}
                    >
                      <img src={row.image01} alt="" className="prodImg" />
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: "1px solid black",
                        paddingTop: 0.8,
                        paddingBottom: 0,
                        fontWeight: 700,
                        fontSize: 15,
                      }}
                    >
                      {row.title}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: "1px solid black",
                        paddingTop: 0.8,
                        paddingBottom: 0,
                        fontWeight: 700,
                      }}
                    >
                      {row.price}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: "1px solid black",
                        paddingTop: 0,
                        paddingBottom: 0,
                        fontWeight: 700,
                      }}
                    >
                      {row.quantity}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: "1px solid black",
                        paddingTop: 0.8,
                        paddingBottom: 0,
                      }}
                    >
                      <CloseIcon
                        sx={{
                          width: "30px",
                          height: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleRemove(row.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="taxMainDiv">
            <div className="taxChildDiv">
              <span style={{ fontSize: "28px" }}>
                <b>Subtotal:</b> ${subTotal}
              </span>
              <p>Taxes and shipping will be calculate at checkout</p>
              <div>
                <Link to={"/food"}>
                  <button className="btnClass">Continue Shopping</button>
                </Link>
                <Link to={"/"}>
                  <button className="btnClass">Proceed to checkout</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
