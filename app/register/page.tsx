import styles from "@/app/register/styles.module.scss";
import Header from "@/app/compoonents/header";
import {Button, Link, TextField} from "@mui/material";

export default function Register() {
  return (
      <div className={styles.register}>
        <Header/>
        <div>
        <form className="flex flex-col">
          <TextField id="emailField" label="Email" variant="outlined" size="small" sx={{mb: 2}}/>
          <TextField id="pwdField" label="Senha" variant="outlined" size="small" type="password"
                     sx={{mb: 2}}/>
          <TextField id="pwdField" label="Confirmação" variant="outlined" size="small" type="password"
                     sx={{mb: 2}}/>
          <Button id="b1" variant="contained">Cadastrar</Button>
        </form>
        </div>
      </div>
  )
}
