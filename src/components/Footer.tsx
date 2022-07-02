import rocketseat from "../assets/rocketseat.svg"

export function Footer() {
    return (
        <div className="bg-gray-900 w-full">
            <div className=" mx-8 py-8 flex justify-between align-start border-t border-gray-500">
                <div className="flex gap-4 items-center">
                    <img src={rocketseat}/> 
                    <p className="text-gray-300">Rocketseat - Todos os direitos reservados</p>
                </div>
                <div className="flex items-center">
                    <p className="text-gray-300">Políticas de privacidade</p>
                </div>                
            </div>
        </div>
    )
}
