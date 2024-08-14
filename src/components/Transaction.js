import Item from "./Item";
import "./Transaction.css";

const Transaction = () => {
  const data = [
    { id: 1, title: "ค่ารักษาพยาบาล", amount: 2000 },
    { id: 2, title: "ค่าน้ำมัน", amount: 5000 },
    { id: 3, title: "ค่าเช่าบ้าน", amount: 8000 },
    { id: 4, title: "เงินเดือน", amount: 70000 },
    { id: 5, title: "จ่ายค่าประกัน", amount: 300 },
    { id: 6, title: "ค่าเดินทาง", amount: 800 },
  ];
  return (
    // <ul className="item-list">
    //   <Item title={data[0].title} amount={data[0].amount} />  {/* กำหนดค่า props(property) ที่ส่งไปยัง Item */}
    //   <Item title={data[1].title} amount={data[1].amount} />
    //   <Item title={data[2].title} amount={data[2].amount} />
    //   <Item title={data[3].title} amount={data[3].amount} />
    // </ul>

    <ul className="item-list">
      {data.map((element) => {
        // return <Item title={element.title} amount={element.amount} />;   // loop ค่าแบบ array.map
        return <Item {...element} key = {element.id}/>;                                       // loop ค่าแบบ array.map, spread operator (...element)
      })}
    </ul>
  );
};

export default Transaction;
