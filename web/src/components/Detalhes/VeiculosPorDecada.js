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

const VeiculosPorDecada = () => {
  const classes = useStyles()
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getApi.getDetalhesPorDecada()
      .then(res => {
        if (mounted) {
          setList(res.data)
        }
      })
    return () => mounted = false;
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h4">Listagem de Veículos Por Decada </Typography>
      <Grid container spacing={4} style={{ marginTop: 10 }}>
        <Grid item xs={12}>
          {list?.length === 0 ? null :
            <TableContainer component={Paper}>
              <Table className={classes.table} size="small" aria-label="a dense table" get>
                <TableHead>
                  <TableRow>
                    <TableCell>Decada</TableCell>
                    <TableCell >Quantidade</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list?.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.decada}0
                      </TableCell>
                      <TableCell >{row.quantidade}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>}
        </Grid>
      </Grid>
    </div>
  );
}

export default VeiculosPorDecada;