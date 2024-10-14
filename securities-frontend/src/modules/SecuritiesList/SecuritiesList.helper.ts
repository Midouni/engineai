export const securitiesListColumnsList = () => {
  const columns = [];

  columns.push({
    field: "ticker",
    label: "Symbol",
    render: (field: string) => field,
  });
  columns.push({
    field: "security_name",
    label: "Name",
    render: (field: string) => field,
  });
  columns.push({
    field: "sector",
    label: "Sector",
    render: (field: string) => field,
  });
  columns.push({
    field: "country",
    label: "Country",
    render: (field: string) => field,
  });
  columns.push({
    field: "trend",
    label: "Trend",
    render: (field: string) => field,
  });

  return columns;
};
