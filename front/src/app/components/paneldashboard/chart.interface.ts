export interface ChartSeries {
  name: string;
  data: number[];
  color: string;
}

export interface ChartOptions {
  chart: {
    height: string;
    maxWidth: string;
    type: string;
    fontFamily: string;
    dropShadow: {
      enabled: boolean;
    };
    toolbar: {
      show: boolean;
    };
  };
  tooltip: {
    enabled: boolean;
    x: {
      show: boolean;
    };
  };
  fill: {
    type: string;
    gradient: {
      opacityFrom: number;
      opacityTo: number;
      shade: string;
      gradientToColors: string[];
    };
  };
  dataLabels: {
    enabled: boolean;
  };
  stroke: {
    width: number;
  };
  grid: {
    show: boolean;
    strokeDashArray: number;
    padding: {
      left: number;
      right: number;
      top: number;
    };
  };
  series: ChartSeries[];
  xaxis: {
    categories: string[];
    labels: {
      show: boolean;
    };
    axisBorder: {
      show: boolean;
    };
    axisTicks: {
      show: boolean;
    };
  };
  yaxis: {
    show: boolean;
  };
}
