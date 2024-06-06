import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { orderSchema } from "../../types/Schema";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "asdsaasdas",
    quantity: 4,
    price: 2000,
  },
];

type OrderFormValues = z.infer<typeof orderSchema>;

const TransactionManagement = () => {
  const defaultOrder = {
    name: "Abhishek Singh",
    address: "77 Black Street",
    city: "Neyword",
    state: "Nevada",
    country: "India",
    pinCode: 2434341,
    status: "Processing" as const,
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    _id: "asdnasjdhbn",
  };

  const { handleSubmit, watch, setValue } = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: defaultOrder,
  });

  const order = watch();

  const updateHandler = () => {
    const newStatus =
      order.status === "Processing"
        ? "Shipped"
        : order.status === "Shipped"
        ? "Delivered"
        : "Processing";
    setValue("status", newStatus);
  };

  const onSubmit = (data: OrderFormValues) => {
    console.log(data);
  };

  return (
    <main className="product-management">
      <section
        style={{
          padding: "2rem",
        }}
      >
        <h2>Order Items</h2>

        {order.orderItems.map((i) => (
          <ProductCard
            key={i._id}
            name={i.name}
            photo={i.photo}
            _id={i._id}
            quantity={i.quantity}
            price={i.price}
          />
        ))}
      </section>

      <article className="shipping-info-card">
        <h1>Order Info</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h5>User Info</h5>
          <p>Name: {order.name}</p>
          <p>
            Address:{" "}
            {`${order.address}, ${order.city}, ${order.state}, ${order.country} ${order.pinCode}`}
          </p>

          <h5>Amount Info</h5>
          <p>Subtotal: {order.subtotal}</p>
          <p>Shipping Charges: {order.shippingCharges}</p>
          <p>Tax: {order.tax}</p>
          <p>Discount: {order.discount}</p>
          <p>Total: {order.total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                order.status === "Delivered"
                  ? "purple"
                  : order.status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {order.status}
            </span>
          </p>

          <button type="button" onClick={updateHandler}>
            Process Status
          </button>
        </form>
      </article>
    </main>
  );
};

const ProductCard = ({
  name,
  photo,
  price,
  quantity,
  _id,
}: {
  name: string;
  photo: string;
  price: number;
  quantity: number;
  _id: string;
}) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} = ${price * quantity}
    </span>
  </div>
);

export default TransactionManagement;
