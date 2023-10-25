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
      let count = 0;
      orders.map((order) => {
        const line_items = order.line_items;
        // console.log(
        //   line_items[0].quantity,
        //   line_items[0].price_data.product_data.name,
        //   products
        // );
        // products.map((product) => {
        //   if (product.title === line_items[0].price_data.product_data.name) {
        //     count = count + line_items[0].quantity;
        //   }
        //   console.log(product.title, count);
        //   setProductSold(count);
        // });

        // if (
        //   line_items.forEach().price_data.product_data.name === products.title
        // ) {
        //   console.log(line_items[0].quantity);
        //   setProductSold(line_items[0].quantity);
        // }
        const quantityByProduct = {};

        line_items.forEach((lineItem) => {
          products.forEach((product) => {
            if ((product.title = lineItem.price_data.product_data.name)) {
              if (quantityByProduct[product.title]) {
                quantityByProduct[product.title] += lineItem.quantity;
              } else {
                quantityByProduct[product.title] = lineItem.quantity;
              }
            }
          });
        });

        console.log(quantityByProduct);

        // const uniqueQuantityByProduct = {};

        // line_items.forEach((lineItem) => {
        //   products.forEach((product) => {
        //     if (
        //       product.title === lineItem.price_data.product_data.name &&
        //       !uniqueQuantityByProduct[product.title]
        //     ) {
        //       uniqueQuantityByProduct[product.title] = lineItem.quantity;
        //     }
        //   });
        // });

        // for (const productName in uniqueQuantityByProduct) {
        //   console.log(
        //     `${productName}: ${uniqueQuantityByProduct[productName]}`
        //   );
        // }
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
                <td>{productSold}</td>
                <td>Chưa làm được</td>
              </tr>
            </tbody>
          ))}
        </table>
      </Layout>
    </>
  );
}
