import { Header } from "../components/Header";
import { Ticket } from "../components/Ticket";

const TicketPage = () => {
  return (
    <>
      <Header />
      <Ticket stop={false} />
      <Ticket stop={true} />
    </>
  );
};

export default TicketPage;
