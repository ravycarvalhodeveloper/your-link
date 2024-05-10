import { FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";

import {db} from '../../services/firebaseConnection'
import {
  setDoc,
  doc,
  getDoc
} from 'firebase/firestore'


export function Networks() {
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [youtube, setYoutube] = useState("")

    useEffect(() => {
      function loadLinks() {
          const docRef = doc(db, "social", "link")
          getDoc(docRef)
          .then((snapshot) => {
              if(snapshot.data() !== undefined) {
                setFacebook(snapshot.data()?.facebook)
                setInstagram(snapshot.data()?.instagram)
                setYoutube(snapshot.data()?.youtube)
              }

          })

      }

      loadLinks()

    }, [])



    function handleRegister(e:FormEvent) {
        e.preventDefault()

        setDoc(doc(db, "social", "link"), {
          facebook: facebook,
          instagram:instagram,
          youtube:youtube
        })
        .then(() => {
          console.log("CADASTRADOS COM SUCESSO")
        })
        .catch(() => {
          console.log("Erro ao salvar")
        })
    }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <h1 className="tex-white text-2xl font-medium mt-8 b-4 mb-5">Minhas redes sociais</h1>


        <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
          <label className="text-blue-900 font-medium mt-2 mb-2">Link do Facebook</label>
          <Input  
            type="url"
            placeholder="Digite a url do seu facebook..."
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />

        <label className="text-blue-900 font-medium mt-2 mb-2">Link do Instagram</label>
          <Input  
            type="url"
            placeholder="Digite a url do seu instagram..."
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />

        <label className="text-blue-900 font-medium mt-2 mb-2">Link do YouTube</label>
          <Input  
            type="url"
            placeholder="Digite a url do seu Youtube..."
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
          />

        <button
          className="text-white bg-blue-700 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
          type="submit"

        >Salvar links</button>

        </form>

    </div>
  )
}

