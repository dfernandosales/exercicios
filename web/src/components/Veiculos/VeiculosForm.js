import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Form } from 'react-final-form'
import { Grid, makeStyles, Paper, Typography, Button, FormControl, Checkbox, FormControlLabel } from '@material-ui/core'
import api from '../../services/api'
import Select from '../utils/Select'
import TextField from '../utils/TextField'
import MaskedField from '../utils/MaskedTextField'
import { MARCAS } from '../utils/utils'
import { Field } from 'react-final-form'
import { anoRegex } from '../utils/regex'

const SubmitButton = (props) => (<button {...props} type='submit' />);

const useStyles = makeStyles(theme => ({
  root: {
    width: "87%",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#f3f3f3",
    height: "calc(100vh - 100px)",
    boxSizing: "border-box",
    padding: theme.spacing(3),
    marginLeft: theme.spacing(30),
    marginTop: theme.spacing(8),
  },
}));


const VeiculosForm = () => {
  const classes = useStyles()
  const history = useHistory();
  const params = useParams();
  const [initialValues, setInitialValues] = useState({});
  const [vendido, setVendido] = useState(false);
  const idVeiculo = params.id;

  useEffect(() => {
    if (idVeiculo === "new") {
      setInitialValues({})
    } else {
      api.getVeiculo(idVeiculo).then(res => setInitialValues(res.data?.data[0]))
    }
  }, [idVeiculo]);



  const handleSubmit = formValues => {
    if (!formValues.id) {
      return api.createVeiculo({...formValues, vendido:vendido})
        .then(res => {
          if(res.ok){
            alert("Veículo cadastrado com sucesso!");
            history.goBack();
          }else{
            alert("Erro ao cadastrar veículo!");
          }
        }).catch(err => alert(`Erro: ${err.message}`));
    } else {
      return api.editVeiculo(formValues.id, {...formValues, vendido:vendido})
        .then(res => {
          if(res.ok){
            alert("Veículo editado com sucesso!");
            history.goBack();
          }else{
            alert("Erro ao editar veículo!");
          }
        }).catch(err => alert(`Erro: ${err.message}`));
    }
  }

  const handleChange = (event) => {
    setVendido(event.target.checked);
  };
  return (
    <>
      <Paper className={classes.root}>
        <Form
          onSubmit={handleSubmit}
          initialValues={initialValues}
          render={({ handleSubmit }) =>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Field fullWidth name='veiculo' label='Veículo' required component={TextField} />
                </Grid>
                <Grid item xs={2}>
                  <Field
                    fullWidth
                    name='marca'
                    label='Marca'
                    component={Select}
                    options={MARCAS}
                    hideEmpty
                  />
                </Grid>
                <Grid item xs={1}>
                  <Field
                    fullWidth name='ano'
                    label='Ano'
                    component={MaskedField}
                    mask={anoRegex}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field fullWidth name='descricao' label='Descrição' component={TextField} />
                </Grid>
                <Grid item xs={1} >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={vendido}
                        onChange={handleChange}
                        name="vendido"
                        color="primary"
                      />
                    }
                    label="Vendido"
                  />
                </Grid>
              </Grid>
              <Grid container justify="flex-end" spacing={4}>
                <Grid item xs={4}>
                  <Button variant="contained" color="primary" onClick={() => history.goBack()}>
                    <Typography color="secondary">Retornar</Typography>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <FormControl>
                    <Button
                      variant="contained"
                      color="primary"
                      component={SubmitButton}>
                      <Typography color="secondary">Confirmar</Typography>
                    </Button>
                  </FormControl>
                </Grid>
              </Grid>
            </form>}
        />
      </Paper>
    </>
  );
}

export default VeiculosForm;