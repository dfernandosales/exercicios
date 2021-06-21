import {
  makeStyles,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Grid,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import getApi from '../../services/api.js'
import { Pagination } from '@material-ui/lab'


const useStyles = makeStyles(theme => ({
  root: {
    width: "87%",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#f3f3f3",
    height: "calc(100vh - 90px)",
    boxSizing: "border-box",
    padding: theme.spacing(1),
    marginLeft: theme.spacing(30),
    marginTop: theme.spacing(8),
  },
}));

const UltimaSemanaList = () => {
  const classes = useStyles()
  const [list, setList] = useState([]);
  const [page, setPage] = React.useState(1);
  const [pagesNum, setPagesNum] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value)
  };

  useEffect(() => {
    let mounted = true;
    getApi.getDetalhesUltimaSemana(page)
      .then(res => {
        if (mounted) {
          setList(res.data?.data)
          setPagesNum(Math.ceil(res.data?.total / 10))
        }
      })
    return () => mounted = false;
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h4">Listagem de Veículos Cadastrados na Ultima Semana  </Typography>
      <Grid container spacing={4} style={{ marginTop: 10 }}>
        <Grid item xs={12}>
          {list?.length === 0 ? null :
            <TableContainer component={Paper}>
              <Table className={classes.table} size="small" aria-label="a dense table" get>
                <TableHead>
                  <TableRow>
                    <TableCell>Veiculo</TableCell>
                    <TableCell align="right">Marca</TableCell>
                    <TableCell align="right">Ano</TableCell>
                    <TableCell align="right">Descrição</TableCell>
                    <TableCell align="right">Vendido</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list?.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.veiculo}
                      </TableCell>
                      <TableCell align="right">{row.marca}</TableCell>
                      <TableCell align="right">{row.ano}</TableCell>
                      <TableCell align="right">{row.descricao}</TableCell>
                      <TableCell align="right">{row.vendido ? "Sim" : "Não"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>}
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center" spacing={4} style={{ marginTop: 20 }}>
        <Pagination count={pagesNum} page={page} onChange={handleChange} />
      </Grid>
    </div>
  );
}

export default UltimaSemanaList;