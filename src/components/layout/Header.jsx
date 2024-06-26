import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PiUserBold, PiCoffee } from "react-icons/pi"
import IconCafe from "../ui/iconCafe"

const Header = () => {
  return (
    <header className="flex w-full h-20 justify-between text-purple.5 bg-white.1 items-center px-8 py-2 shadow-header">
      <div className="flex justify-start items-center w-full gap-3">
        <IconCafe Icon={PiCoffee} />
        <h3 className="text-2xl select-none">Repair Cafe</h3>
      </div>
      {/*Botão avatar poderá ser modificado, ao incluir o banco de dados, por isso não possui componente */}
        <Button size="avatar" className="rounded-full bg-purple.3 hover:ring-4 hover:ring-purple.5/20">
            <IconCafe Icon={PiUserBold}/>
        </Button>
    </header>
  )
}

export default Header