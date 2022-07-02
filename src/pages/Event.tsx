import { ArrowRight, SmileyWink } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import {Header} from "../components/Header";
import {Sidebar} from "../components/Sidebar";
import {Video} from "../components/Video";

export default function Event() {
  const { slug } = useParams<{slug: string}>() 

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? 
          <Video lessonSlug={slug}/>: 
          <div className="flex-1 flex flex-col ">
            <div className="h-full flex flex-col justify-center items-center gap-4">
              <div className="flex flex-col items-center gap-5">
                <p className="text-6xl">Seja Bem-Vindo</p>
                <SmileyWink size={50} />
              </div>
              <div className="flex gap-5">
                <p className="text-4xl">Escolha um video</p>
                < ArrowRight size={40}/>
              </div>              
            </div>
            < Footer/>           
          </div>
          // flex flex-col
        }
        <Sidebar />        
      </main>   
    </div>
           
  )
}
