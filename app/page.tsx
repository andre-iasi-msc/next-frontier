import styles from "./styles.module.scss";
import {Button, Link, TextField} from "@mui/material";

export default function Home() {
  return (
      <div className={styles.home}>
        <h1>
          <div><img src="/images/logo.png" alt="Logo"/></div>
          <div>Writer's Room</div>
        </h1>
        <div className="flex flex-col flex-grow justify-center items-center">
          <form className="flex flex-col">
            <TextField id="emailField" label="Email" variant="outlined" size="small" sx={{mb: 2}}/>
            <TextField id="pwdField" label="Senha" variant="outlined" size="small" type="password" sx={{mb: 2}}/>
            <Button id="b1" variant="contained">Entrar</Button>
            <Link href="/register" sx={{textAlign: "right", mt: 2}}>Cadastre-se</Link>
          </form>
        </div>
      </div>

  );
}
