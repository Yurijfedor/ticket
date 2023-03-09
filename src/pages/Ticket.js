import { Header } from "../components/Header";
import { Ticket } from "../components/Ticket";
import { useParams } from "react-router-dom";

const TicketPage = () => {
  const carNumber = useParams();
  return (
    <>
      <Header />
      <Ticket stop={false} carNumber={carNumber.carNumber} />
      <Ticket stop={true} />
    </>
  );
};

export default TicketPage;
