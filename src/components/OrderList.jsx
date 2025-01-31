/* eslint-disable react/prop-types */
export default function OrderList({ order }) {
  return <Order order={order} />;
}

function Order({ order }) {
  return (
    <>
      <div className="border-2 flex items-center justify-around ">
        <p className=" px-2 text-2xl flex-1">{order.fullname}</p>
        <img
          className="w-22 rounded-full"
          src="https://i.pravatar.cc/48?=213e123"
          alt="avatar"
        />
        <button className="close"> close order </button>
      </div>
      <div className="flex justify-around">
        <ul>
          <li>fullname:</li>
          <li>email:</li>
          <li>phone:</li>
          <li>address:</li>
          <li>premeal:</li>
          <li>main:</li>
          <li>drikke:</li>
          <li>dessert:</li>
          <li>time:</li>
          <li>dateInput:</li>
          <li>status:</li>
        </ul>
        <ul>
          <li>{order.fullname}</li>
          <li>{order.email}</li>
          <li>{order.phone}</li>
          <li>{order.address}</li>
          <li>{order.premeal}</li>
          <li>{order.main}</li>
          <li>{order.drikke}</li>
          <li>{order.dessert}</li>
          <li>{order.time}</li>
          <li>{order.dateInput}</li>
          <li
            className={
              order.status === "pick up"
                ? "bg-green-700 text-white"
                : "bg-pink-400"
            }
          >
            {order.status}
          </li>
        </ul>
      </div>
    </>
  );
}
