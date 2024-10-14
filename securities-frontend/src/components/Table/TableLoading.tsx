import React from "react";
import { CircularProgress, Stack, TableCell, TableRow } from "@mui/material";

const TableLoading: React.FC = () => {
  return (
    <TableRow>
      <TableCell colSpan={12}>
        <Stack alignItems="center" width="100%">
          <CircularProgress />
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export default TableLoading;
