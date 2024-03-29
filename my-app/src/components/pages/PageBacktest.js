// performance dashboard
// import React, { useState, useEffect } from "react";
import { TickerForm } from "../api/Form";
import { Container, Grid } from "semantic-ui-react";
import "./PageBacktest.css";

const PageBacktest = () => {
  // const [stocks, setStocks] = useState("");
  // // const [date, setDate] = useState();
  // const [sample_size, setSample_size] = useState("");
  // // const [emaused, setEmaused] = useState([]);
  // const [batting_Avg, setBatting_Avg] = useState("");
  // const [gainLossRatio, setGainLossRatio] = useState("");
  // const [averageGain, setAverageGain] = useState("");
  // const [averageLoss, setAverageLoss] = useState("");
  // const [maxReturn, setMaxReturn] = useState("");
  // const [maxLoss, setMaxLoss] = useState("");
  // const [totalReturn, setTotalReturn] = useState("");
  // const [command, setCommand] = useState([]);

  // TickerForm: User input of ticker
  // const [ticker, setTicker] = useState();
  // const [day, setDay] = useState();
  // const [month, setMonth] = useState();
  // const [year, setYear] = useState();

  // go to backtest.py and get the result

  // useEffect(() => {
  //   fetch(
  //     `https://pypr-backtest.herokuapp.com/backtest?ticker=${ticker}&day=${day}&month=${month}&year=${year}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("useEffect");
  //       setStocks(data.stock);
  //       // setDate(data.date);
  //       setSample_size(data.sample_size);
  //       // setEmaused(data.EMAs_used);
  //       setBatting_Avg(data.Batting_Avg);
  //       setGainLossRatio(data.GainLoss_ratio);
  //       setAverageGain(data.Average_Gain);
  //       setAverageLoss(data.Average_Loss);
  //       setMaxReturn(data.Max_Return);
  //       setMaxLoss(data.Max_Loss);
  //       setTotalReturn(data.Total_return);
  //       setCommand(data.Command);
  //     });
  // }, [ticker, day, month, year]);

  return (
    <>
      <Container style={{ marginTop: 40 }}>
        <h1 style={{ fontFamily: "Quantico" }}>
          Backtest using Guppy Multiple Moving Average!
        </h1>
        <div class="ui icon message" style={{ fontFamily: "Roboto" }}>
          <div class="content">
            <div class="header">What is Guppy Multiple Moving Average?</div>
            <p> </p>
            <li>
              It is a <b>technical indicator</b> that identifies changes in
              trends, providing an objective method to know
              <b> when to get in</b> and <b> when to get out of a trade</b>.
            </li>
            <li>
              6 <b>short-term</b> EMAs in red (3, 5, 8, 10, 12, 15), and 6{" "}
              <b>long-term</b> EMAs in blue (30, 35, 40, 35, 50, 60) are used.
            </li>
            <li>
              When red crosses above blue (i.e Red White Blue): Buy Signal
            </li>
            <li>
              When blue crosses above red (i.e Blue White Red): Sell Signal
            </li>
          </div>
        </div>
        <Grid style={{ marginTop: 20 }}>
          <TickerForm
          // onData={ticker}
          // {(ticker) => {
          // setTicker(ticker["stock"]);
          // setDay(ticker["day"]);
          // setMonth(ticker["month"]);
          // setYear(ticker["year"]);
          // }}
          />
        </Grid>
      </Container>
    </>
  );
};

export default PageBacktest;

/*
<Table size="small" compact="very" celled="internally">
                <Table.Body style={{ fontSize: "10px !important" }}>
                  <Table.Row>
                    <Table.Cell collapsing>Stock to backtest</Table.Cell>
                    <Table.Cell collapsing>{stocks}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>Sample size</Table.Cell>
                    <Table.Cell collapsing>{sample_size}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>Batting Average</Table.Cell>
                    <Table.Cell collapsing>{batting_Avg}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>Gain-Loss Ratio</Table.Cell>
                    <Table.Cell collapsing>{gainLossRatio}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>Average Gain</Table.Cell>
                    <Table.Cell collapsing>{averageGain}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>Average Loss</Table.Cell>
                    <Table.Cell collapsing>{averageLoss}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>Maximum Return</Table.Cell>
                    <Table.Cell collapsing>{maxReturn}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>Maximum Loss</Table.Cell>
                    <Table.Cell collapsing>{maxLoss}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>Total Return</Table.Cell>
                    <Table.Cell collapsing>{totalReturn}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
*/
