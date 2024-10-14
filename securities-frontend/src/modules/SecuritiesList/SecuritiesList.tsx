import { useState } from "react";
import { Stack } from "@mui/material";
import Table from "../../components/Table";
import { securitiesListColumnsList } from "./SecuritiesList.helper";
import { useGetSecuritiesQuery } from "../../store/queries/securitiesApi";
import SecuritiesToolbar from "./SecuritiesToolbar";

const SecuritiesList = () => {
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);
  const [limit, _] = useState(10);

  const { data: result, isFetching } = useGetSecuritiesQuery({
    limit,
    offset,
  });
  const data = result?.data || [];
  const total = result?.total || 0;

  const columns = securitiesListColumnsList();

  const handlePageChange = (_: any, newPage: number) => {
    setPage(newPage);
    setOffset(newPage * limit);
  };

  return (
    <>
      <Stack width="100%" spacing={2}>
        <Table
          columns={columns}
          data={data}
          totalCount={total}
          loading={isFetching}
          page={page}
          onPageChange={handlePageChange}
          toolbar={<SecuritiesToolbar />}
        />
      </Stack>
    </>
  );
};

export default SecuritiesList;
