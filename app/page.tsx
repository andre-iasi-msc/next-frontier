import styles from "./styles.module.scss";
import {Button, Link, TextField} from "@mui/material";

export default function Home() {
  return (
      <div className={`flex flex-col items-center justify-center min-h-screen gap-16 p-10 ${styles.home}`}>
        <h1 className="text-center text-4xl flex-grow-0 p-4">Writer's Room</h1>
        <div className="flex flex-col flex-grow justify-center items-center w-4/5">
          <form className="flex flex-col w-2/5 p-10 mb-40">
            <TextField id="emailField" label="Email" variant="outlined" size="small" sx={{mb: 2}}/>
            <TextField id="pwdField" label="Senha" variant="outlined" size="small" sx={{mb: 2}}/>
            <Button id="b1" variant="contained">Entrar</Button>
            <Link href="/cadastro" sx={{textAlign: "right", mt: 2}}>Cadastre-se</Link>
          </form>
        </div>
      </div>

  );
}
