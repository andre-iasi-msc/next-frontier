import styles from "./styles.module.scss";
import {Button, Link, TextField} from "@mui/material";
import Header from "@/app/compoonents/header";

export default function Home() {
  return (
      <div className={styles.home}>
        <Header/>
        <div>
          <form>
            <TextField id="emailField" label="Email" variant="outlined" size="small" sx={{mb: 2}}/>
            <TextField id="pwdField" label="Senha" variant="outlined" size="small" type="password" sx={{mb: 2}}/>
            <Button id="b1" variant="contained">Entrar</Button>
            <Link href="/register" sx={{textAlign: "right", mt: 2}}>Cadastre-se</Link>
          </form>
        </div>
      </div>

  );
}
