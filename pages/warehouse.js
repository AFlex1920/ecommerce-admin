import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function WareHouse() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productSold, setProductSold] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    axios.get("/api/warehouse").then((response) => {
      setProducts(response.data);
      setIsLoading(false);
    });
    axios.get("/api/orders").then((response) => {
      const data = response.data;
      setOrders(data);
      setIsLoading(false);
      const productOder = data.map((order) => {
        console.log(order);
        order.line_items.map((l) => console.log(l.price_data));
      });
    });
  }, []);

  return (
    <>
      <Layout>
        <table className="basic">
          <thead>
            <th>Product</th>
            <th>Total Quantity</th>
            <th>Total Sold</th>
            <th>Remaining total</th>
          </thead>
          {products.map((product) => (
            <tbody>
              <tr>
                <td>{product.title}</td>
                <td className="pl-6">{product.quantity}</td>
                <td>Chưa làm được</td>
                <td>Chưa làm được</td>
              </tr>
            </tbody>
          ))}
        </table>
      </Layout>
    </>
  );
}
