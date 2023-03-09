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
import { Timer } from "./Timer";

export const Ticket = ({ stop, carNumber }) => {
  const transformTime = (date) => {
    const dateString = new Date(date);
    const hours = dateString.getHours().toString().padStart(2, "0");
    const minutes = dateString.getMinutes().toString().padStart(2, "0");
    const seconds = dateString.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };
  const transformDate = (date) => {
    const dateString = new Date(date);
    const day = dateString.getDate().toString().padStart(2, "0");
    const month = (dateString.getMonth() + 1).toString().padStart(2, "0");
    const year = dateString.getFullYear();

    return `${day}.${month}.${year}`;
  };

  // const countDownTime = new Date().getTime() + 3600000;
  // const now = new Date().getTime();
  // const timer = setInterval(() => {

  //   const distance = countDownTime - now;
  //   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // }, 1000);
  // console.log(`${minutes}:${second}`);
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
      <Number>&#8470;{carNumber ? carNumber : 291}</Number>
      <Car>Вагон</Car>
      <PropertieList>
        <PropertieItem>
          <ItemTitle>Дата</ItemTitle>
          <ItemInfo>
            {!stop ? transformDate(new Date()) : "08.03.2023"}
          </ItemInfo>
        </PropertieItem>
        <PropertieItem>
          <ItemTitle>Час</ItemTitle>
          <ItemInfo>{!stop ? transformTime(new Date()) : "18:21:29"}</ItemInfo>
        </PropertieItem>
        <PropertieItem>
          <ItemTitle>Стандартний</ItemTitle>
          <ItemInfo>1 шт.</ItemInfo>
        </PropertieItem>
      </PropertieList>
      <AddInfo>Квиток разового використання</AddInfo>
      <Countdown>{!stop ? <Timer /> : "43:26"}</Countdown>
    </Container>
  );
};
