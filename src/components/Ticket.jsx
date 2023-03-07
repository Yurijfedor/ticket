import { Container, Logo, TicketInfoItem } from "./Ticket.styled";

export const Ticket = () => {
  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Logo />
        <ul style={{ display: "grid", gap: "5px" }}>
          <TicketInfoItem>Вінниця</TicketInfoItem>
          <TicketInfoItem>КП Вінницька транспортна компанія</TicketInfoItem>
          <TicketInfoItem>
            <span style={{ color: "#999999" }}>Серія</span> 472538021
          </TicketInfoItem>
        </ul>
      </div>
    </Container>
  );
};
