import {
  Container,
  Logo,
  TicketInfoItem,
  TicketLogo,
  TramLayout,
  WheelOne,
  WheelTwo,
  Bumper,
  HeadlightOne,
  HeadlightTwo,
  Сurrency,
  Cost,
  Number,
  Car,
  PropertieList,
  PropertieItem,
  ItemTitle,
  ItemInfo,
  AddInfo,
  Countdown,
  CastomBorder1,
  CastomBorder2,
} from "./Ticket.styled";

export const Ticket = ({ stop }) => {
  console.log(stop);
  return (
    <Container style={stop ? { filter: "grayscale(100%)" } : {}}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <Logo />
        <ul style={{ display: "grid", gap: "5px" }}>
          <TicketInfoItem>Вінниця</TicketInfoItem>
          <TicketInfoItem>КП Вінницька транспортна компанія</TicketInfoItem>
          <TicketInfoItem>
            <span style={{ color: "#999999" }}>Серія</span> 472538021
          </TicketInfoItem>
        </ul>
      </div>
      <TicketLogo>
        <CastomBorder1>
          <CastomBorder2>
            <TramLayout />
            <WheelOne />
            <WheelTwo />
            <Bumper />
            <HeadlightOne />
            <HeadlightTwo />
            <Сurrency>грн</Сurrency>
            <Cost>8</Cost>
          </CastomBorder2>
        </CastomBorder1>
      </TicketLogo>
      <Number>&#8470;291</Number>
      <Car>Вагон</Car>
      <PropertieList>
        <PropertieItem>
          <ItemTitle>Дата</ItemTitle>
          <ItemInfo>30.01.2023</ItemInfo>
        </PropertieItem>
        <PropertieItem>
          <ItemTitle>Час</ItemTitle>
          <ItemInfo>18:21:29</ItemInfo>
        </PropertieItem>
        <PropertieItem>
          <ItemTitle>Стандартний</ItemTitle>
          <ItemInfo>1 шт.</ItemInfo>
        </PropertieItem>
      </PropertieList>
      <AddInfo>Квиток разового використання</AddInfo>
      <Countdown>59:26</Countdown>
    </Container>
  );
};
