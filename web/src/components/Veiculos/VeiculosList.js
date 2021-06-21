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
  IconButton,
  Grid,
  Fab
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useEffect, useState } from "react";
import CreateIcon from '@material-ui/icons/Create';
import getApi from '../../services/api.js'
import { Pagination } from '@material-ui/lab'
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from "react-router-dom";


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

const VeiculosList = () => {
  const classes = useStyles()
  const history = useHistory();
  const [list, setList] = useState([]);
  const [page, setPage] = React.useState(1);
  const [pagesNum, setPagesNum] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value)
  };

  useEffect(() => {
    let mounted = true;
    getApi.findVeiculos(page)
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
      <Typography variant="h4">Listagem de Veículos  </Typography>
      <Grid container  spacing={4} style={{ marginTop: 10 }}>
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
                    <TableCell align="right"></TableCell>
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
                      <TableCell align="right">
                        <IconButton
                          edge="end"
                          aria-label="editar"
                          onClick={() => {history.push(`/veiculos/${row.id}`)}}
                        >
                          <CreateIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete"
                          onClick={() => { getApi.deleteVeiculo(row.id);  alert("Veiculo excluido com sucesso!"); }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
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
      <Grid container justify="flex-end">
        <Grid item >
          <Fab color="primary" aria-label="add"  onClick={() => { history.push("/veiculos/new") }}>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
}

export default VeiculosList;