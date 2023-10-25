import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ReviewPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    loadReviews();
  }, []);

  async function loadReviews() {
    setIsLoading(true);
    await axios.get("/api/reviews").then((res) => {
      setReviews(res.data);
      setIsLoading(false);
    });
  }

  function deleteReview(_id) {
    axios.delete("/api/reviews?_id=" + _id);
    loadReviews();
  }

  return (
    <>
      <Layout>
        <h1>All Reviews</h1>
        <table className="basic mt-2">
          <thead>
            <th>Product</th>
            <th>Stars</th>
            <th>Title</th>
            <th>Description</th>
            <th>Option</th>
          </thead>
          {reviews.length > 0 &&
            reviews.map((review) => (
              <tbody>
                <tr>
                  <td>{review.product.title}</td>
                  <td>{review.stars}</td>
                  <td> {review.title}</td>
                  <td> {review.description}</td>
                  <td>
                    <button
                      className="btn-red "
                      onClick={() => deleteReview(review._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </Layout>
    </>
  );
}
