import Image from "next/image";
import {redirect }from "next/navigation";
export default function HomePage() {
 /*este comando redirecciona a otra pagina, en este caso a la pagina del counter*/
  redirect("/dashboard/counter");
 
 
  
}
