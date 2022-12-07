import { styled } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Chart from "../../Components/Chart/Chart";
import { Presupuesto } from "../../Components/Presupuesto";
import VentasTotales from "../../Components/VentasTotales/VentasTotales";
import Orders from "./Orders";
import Users from "./Users";
import { getAllUsers } from "../../../../redux/actions/adminAction";

const Container = styled(Box)({
  marginLeft: "20px",
  display: "flex",
});

export default function Dashboard() {

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <Container>
      <Presupuesto />
      <Users />
      <Orders />
      <Chart title='Últimos 3 meses (ingresos)' aspect={1 / 1} />
      <VentasTotales />
    </Container>
  );
}
