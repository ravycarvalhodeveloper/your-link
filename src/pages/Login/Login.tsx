import { Link, useNavigate } from "react-router-dom"
import { Input } from "../../components/Input/Input"
import { FormEvent, useState } from "react"
import {auth} from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleSubmit(e:FormEvent) {
      e.preventDefault();

        if(email === "" || password === "") {
          alert("Preencha todos os campos")
          return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("Logado com sucesso")
          navigate("/admin", { replace: true})
        }) 
        .catch((error) => {
          console.log("ERRO AO FAZER O LOGIN:")
          console.log(error)
        })


    }
  
  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
        <h1 className="mt=11 text-blue-700 font-bold text-5xl">Your
        <span className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent">Link</span>
        </h1>
      </Link>

     <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col my-5 px-6">
       <Input 
          type="email"
          placeholder="Digite o seu email..." 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
      />

        <Input 
          type="password"
          placeholder="*****" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
      />

       <button 
          type="submit"
          className="h-9 bg-blue-600 rounded border-0 text-lg font-bold text-white hover:bg-blue-800 transition-all">
          Acessar
       </button>
     </form>

    </div>
  )
}

