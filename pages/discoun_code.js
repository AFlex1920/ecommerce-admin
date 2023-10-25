import Layout from "@/components/Layout";

export default function DiscounCodePage() {
  return (
    <>
      <Layout>
        <form method="POST" action="/your-server-endpoint">
          <table>
            <thead>
              <th>Code</th>
              <th>% percent</th>
              <th>Date</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" name="code" placeholder="InputCoupon" />
                </td>
                <td>
                  <input type="text" name="percent" placeholder="% percent" />
                </td>
                <td class="flex">
                  <input
                    type="text"
                    name="fromDate"
                    class="mr-0.5"
                    placeholder="From"
                  />
                  <input type="text" name="toDate" placeholder="To" />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit">Save</button>
        </form>
      </Layout>
    </>
  );
}
