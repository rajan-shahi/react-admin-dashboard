import { useState } from "react";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";
import { Formik, Form } from "formik";

import {
  DashboardBox,
  GlobalChart,
  Modal,
  Input,
  Select,
  Table,
  Review,
} from "components";
import { cn } from "helpers";
import { useGlobalProvider } from "hooks";
import { orders, reviews } from "./data";
import { columns } from "./columns";

interface Values {
  amount: string;
  paymentMethod: string;
}

export const Dashboard = () => {
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const { isDarkTheme } = useGlobalProvider();

  const onWithdrawModalOpen = () => {
    setIsWithdrawModalOpen(true);
  };

  const onWithdrawModalClose = () => {
    setIsWithdrawModalOpen(false);
  };

  return (
    <div className="grid xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2 grid gap-6">
        <div className="grid md:grid-cols-3 gap-6">
          <DashboardBox title="Total Sales">
            <p>$7,435.00</p>
            <div className="w-[calc(100%+32px)] -ml-4 mt-auto">
              <GlobalChart
                series={[
                  {
                    name: "Sales",
                    data: [
                      559, 498, 450, 500, 490, 550, 480, 560, 520, 560, 540,
                      530,
                    ],
                  },
                ]}
                options={{
                  colors: ["#339943"],
                  chart: { id: "total-sales-chart" },
                  xaxis: {
                    categories: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                  },
                }}
                type="line"
              />
            </div>
          </DashboardBox>
          <DashboardBox title="Total Expenses">
            <p>$3,975.00</p>
            <div className="w-[calc(100%+32px)] -ml-4 mt-auto">
              <GlobalChart
                series={[
                  {
                    name: "Expenses",
                    data: [
                      250, 220, 190, 180, 190, 170, 220, 190, 250, 190, 220,
                      170,
                    ],
                  },
                ]}
                options={{
                  colors: ["#ED1C24"],
                  chart: { id: "total-expenses-chart" },
                  xaxis: {
                    categories: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                  },
                }}
                type="line"
              />
            </div>
          </DashboardBox>
          <DashboardBox title="Total Profit">
            <p>$3,460.00</p>
            <div className="w-[calc(100%+32px)] -ml-4 mt-auto">
              <GlobalChart
                series={[
                  {
                    name: "Profit",
                    data: [
                      250, 250, 140, 360, 580, 140, 470, 250, 180, 250, 180,
                      210,
                    ],
                  },
                ]}
                options={{
                  chart: { id: "total-profit-chart" },
                  xaxis: {
                    categories: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                  },
                }}
                type="area"
              />
            </div>
          </DashboardBox>
        </div>
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-6">
          <div className="2xl:col-span-2">
            <DashboardBox title="Sales by category">
              <GlobalChart
                series={[
                  {
                    name: "Category 1",
                    data: [25, 25, 14, 36, 58, 14, 47, 25, 58, 25, 58, 21],
                  },
                  {
                    name: "Category 2",
                    data: [85, 42, 32, 52, 12, 55, 22, 74, 25, 14, 25, 47],
                  },
                ]}
                options={{
                  colors: ["#BD7651", "#0B3948"],
                  chart: {
                    id: "sales-by-category",
                    stacked: true,
                    sparkline: { enabled: false },
                  },
                  xaxis: {
                    categories: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                    labels: { show: true },
                  },
                  legend: { position: "right", offsetY: 0, show: true },
                }}
                type="bar"
              />
            </DashboardBox>
          </div>
          <DashboardBox title="Top 5 products">
            <GlobalChart
              series={[10, 2, 8, 15, 6, 7]}
              options={{
                colors: [
                  "#BD7651",
                  "#0B3948",
                  "#590D29",
                  "#0D5919",
                  "#0D2759",
                  "#13544E",
                ],
                chart: { id: "top-5-products" },
                labels: [
                  "Product 1",
                  "Product 2",
                  "Product 3",
                  "Product 4",
                  "Product 5",
                  "Others",
                ],
                legend: { position: "bottom", show: true },
              }}
              type="donut"
            />
          </DashboardBox>
        </div>
        <DashboardBox title="Latest orders">
          <div className="pt-4 overflow-x-auto">
            <Table data={orders} columns={columns} />
          </div>
        </DashboardBox>
      </div>
      <div className="grid gap-6">
        <DashboardBox title="My Wallet">
          <div className="bg-primary p-2.5 pb-5 rounded-[10px] mt-2 text-white">
            <div className="relative pr-8 mb-5">
              <p className="font-inika text-lg uppercase">My Admin</p>
              <HiOutlineCurrencyDollar className="absolute top-1/2 right-0 -translate-y-1/2 w-6 h-6" />
            </div>
            <div className="font-inder">
              <p className="text-lg">My balance</p>
              <p className="text-3xl">$35,614.00</p>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 bg-secondary rounded-[10px] p-2.5 w-[calc(100%+16px)] -ml-2 -mt-2 text-sm uppercase font-inder text-dark"
            onClick={onWithdrawModalOpen}
          >
            <HiOutlineArrowLeftOnRectangle className="w-6 h-6" /> withdraw
          </button>
        </DashboardBox>
        <DashboardBox title="Sales by country">
          <GlobalChart
            series={[
              {
                name: "Sales",
                data: [12, 25, 18, 16, 29, 41, 99, 102, 90, 51],
              },
            ]}
            options={{
              chart: {
                id: "sales-by-country",
                sparkline: { enabled: false },
              },
              labels: [
                "Brasil",
                "Egypt",
                "Monaco",
                "Argentina",
                "Span",
                "Germany",
                "Japan",
                "China",
                "UK",
                "USA",
              ],
              yaxis: {
                labels: { show: true, style: { fontSize: "14" } },
                show: true,
              },
              plotOptions: { bar: { horizontal: true } },
            }}
            type="bar"
          />
        </DashboardBox>
        <DashboardBox title="Recent reviews">
          <ul className="border-t border-dark font-inder py-3 mt-3">
            {reviews.map((review) => (
              <Review key={review.id} review={review} />
            ))}
            {reviews.length === 0 && <p>No reviews</p>}
          </ul>
        </DashboardBox>
      </div>

      {isWithdrawModalOpen && (
        <Modal onClose={onWithdrawModalClose}>
          <div className="mb-6">
            <p
              className={cn("font-inika uppercase text-xl", {
                "text-white": isDarkTheme,
              })}
            >
              Withdraw
            </p>
          </div>
          <Formik<Values>
            initialValues={{ amount: "", paymentMethod: "" }}
            onSubmit={(values) => console.log(values)}
          >
            <Form>
              <Input name="amount" label="Amount" type="number" />
              <Select
                name="paymentMethod"
                label="Payment method"
                options={[
                  { value: "stripe", label: "Stripe" },
                  { value: "paypal", label: "Paypal" },
                ]}
              />
              <button
                type="submit"
                className="font-inder uppercase w-full rounded-[10px] bg-primary text-white hover:bg-primary/[.8] active:bg-primary/[.9] px-4 py-3 transition-colors mt-2"
              >
                withdraw
              </button>
            </Form>
          </Formik>
        </Modal>
      )}
    </div>
  );
};
