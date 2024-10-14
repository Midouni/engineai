import { useParams } from "react-router-dom";
import { CircularProgress, Typography, Paper } from "@mui/material";
import { useGetSecurityDetailsQuery } from "../../store/queries/securitiesApi";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Colors } from "../../utils/Colors.util";

const SecurityDetails: React.FC = () => {
  const { ticker } = useParams<{ ticker: string }>();

  const {
    data: security,
    isFetching,
    isError,
  } = useGetSecurityDetailsQuery(ticker);

  if (isFetching) {
    return <CircularProgress />;
  }

  if (isError) {
    return (
      <Typography color="error">Error fetching security details</Typography>
    );
  }

  if (!security) {
    return <Typography>No security details available</Typography>;
  }

  const priceData = security.prices.map((price: any) => [
    new Date(price.date).getTime(),
    parseFloat(price.close),
  ]);
  const volumeData = security.prices.map((price: any) => [
    new Date(price.date).getTime(),
    parseFloat(price.volume),
  ]);

  const chartOptions = {
    chart: {
      zoomType: "xy",
      backgroundColor: Colors.WHISPER_GRAY,
    },
    title: {
      text: `${security.security_name} Price & Volume`,
      style: { color: Colors.DARK_GRAY },
    },
    xAxis: {
      type: "datetime",
      labels: {
        style: { color: Colors.DARK_GRAY },
      },
    },
    yAxis: [
      {
        title: {
          text: "Price",
          style: { color: Colors.BLUE },
        },
        labels: {
          style: { color: Colors.BLUE },
        },
      },
      {
        title: {
          text: "Volume",
          style: { color: Colors.ORANGE },
        },
        labels: {
          style: { color: Colors.ORANGE },
        },
        opposite: true,
      },
    ],
    series: [
      {
        name: "Price",
        data: priceData,
        type: "line",
        color: Colors.BLUE,
        tooltip: {
          valuePrefix: "$",
        },
      },
      {
        name: "Volume",
        data: volumeData,
        type: "line",
        color: Colors.ORANGE,
        yAxis: 1,
        tooltip: {
          valueSuffix: " M",
        },
      },
    ],
  };

  return (
    <Paper sx={{ padding: 2, backgroundColor: Colors.WHITE }}>
      <Typography variant="h4" gutterBottom>
        {security.securityName}
      </Typography>
      <Typography variant="subtitle1">Symbol: {security.ticker}</Typography>
      <Typography variant="subtitle1">Sector: {security.sector}</Typography>
      <Typography variant="subtitle1">Country: {security.country}</Typography>

      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </Paper>
  );
};

export default SecurityDetails;
