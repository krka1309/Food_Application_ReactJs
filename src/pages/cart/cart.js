import React from "react";
import "./cart.css";
import Contact from "../contact/contact";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const Cart = () => {
  const products = useSelector((state) => state.productReducer.cartItems);
  return (
    <div>
      {products.length === 0 ? (
        <div>
          <div className="cartMainDiv1">Your Cart</div>
          <div className="cartMainDiv11">No Items Added here</div>
          <Contact />
        </div>
      ) : (
        <div className="tableDiv">
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
                      ✔️
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default Cart;
