import React from "react";
import {
  Table as MuiTable,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
} from "@mui/material";
import styled from "styled-components";

import NoDataTableRow from "./NoDataTableRow";
import TableLoading from "./TableLoading";
import { Colors } from "../../utils/Colors.util";
import { useNavigate } from "react-router-dom";

interface Column {
  field: string;
  label: string;
  width?: string | number;
  render?: (value: any, row: any, rowIndex: number) => React.ReactNode;
}

interface TableProps {
  columns: Column[];
  data: any[];
  toolbar?: React.ReactNode;
  page: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  totalCount: number;
  loading?: boolean;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  toolbar,
  page,
  onPageChange,
  totalCount,
  loading = false,
}) => {
  const navigate = useNavigate();

  const handleRowClick = (ticker: string) => {
    navigate(`/securities/${ticker}`);
  };
  return (
    <Paper sx={{ width: "100%" }}>
      <Toolbar sx={{ width: "100%" }}>{toolbar}</Toolbar>
      <TableContainer>
        <MuiTable aria-label="sessions table" stickyHeader>
          <StyledTableHead>
            <TableRow>
              {columns?.map((header, index) => (
                <TableCell
                  key={index}
                  sx={{ width: header.width, background: Colors.MEDIUM_WHITE }}
                >
                  {header?.label}
                </TableCell>
              ))}
            </TableRow>
          </StyledTableHead>
          {loading ? (
            <TableLoading />
          ) : data?.length === 0 ? (
            <NoDataTableRow />
          ) : (
            <StyledTableBody>
              {data?.map((row, r_index) => (
                <TableRow
                  key={row?._id}
                  sx={{
                    background: `${Colors.WHITE}`,
                    "&:hover": { background: `${Colors.MEDIUM_WHITE}` },
                  }}
                  onClick={() => handleRowClick(row.ticker)}
                >
                  {columns.map((column) => (
                    <TableCell component="th" scope="row" key={column.field}>
                      {column.render?.(row[column.field], row, r_index) ||
                        row?.[column.field] ||
                        ""}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </StyledTableBody>
          )}
        </MuiTable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={totalCount}
        rowsPerPage={10}
        page={page}
        onPageChange={onPageChange}
      />
    </Paper>
  );
};

export default Table;

const StyledTableHead = styled(TableHead)`
  border: 0.5px solid ${Colors.LIGHT_GREY};
  background-color: red;
  .MuiTableCell-root {
    border: 0.5px solid ${Colors.LIGHT_GREY};
    color: "inherit";
  }
`;

const StyledTableBody = styled(TableBody)`
  .MuiTableRow-root {
    border: 0.5px solid ${Colors.LIGHT_GREY};
    cursor: pointer;
  }
  .MuiTableCell-root {
    border: 0.5px solid ${Colors.LIGHT_GREY};
    color: ${Colors.BLACK};
  }
`;
