import styled from "styled-components";
import backgroundLogo from "../images/cmi_1f45051f.jpg";

export const Container = styled.div`
  width: calc(100% - 10%);
  padding: 15px;
  margin: 0 auto;
  border: 1px solid rgb(223, 225, 217);
  border-radius: 4px;
  box-shadow: 0px 1px 5px 1px rgb(223, 225, 217, 0.75);
`;

export const Logo = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid rgb(223, 225, 217);
  border-radius: 4px;
  box-shadow: 0px 1px 5px 1px rgb(223, 225, 217, 0.75);
  background-image: url(${backgroundLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TicketInfoItem = styled.li`
  font-size: 18px;
`;
