import React from "react";
import { Stack, TableCell, TableRow } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const NoDataTableRow: React.FC = () => {
  return (
    <TableRow>
      <TableCell colSpan={12}>
        <Stack alignItems="center" width="100%">
          <SentimentVeryDissatisfiedIcon />
          <TableCell colSpan={6}>No records found</TableCell>
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export default NoDataTableRow;
