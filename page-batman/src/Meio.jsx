function Meio() {
    return (
        <main class='bg-black'>
            <section class='flex flex-col justify-center text-center'>
                <img class='hidden sm:block' src="./src/assets/imagem-meio.jpg" alt="logo do filme" />

                <div className="btn-box flex flex-col mt-[20px] text-[20px] w-[100%] sm:pt-[5%] ">
                    <a class='border-2 border-white ml-[25%] mr-[25%] text-white transform scale-100 transition-transform duration-500 hover:scale-110 hover:text-red-700 hover:border-red-700 cursor-pointer' href="#">Temporada 1</a>
                    <a class='mt-[20px] border-2 border-white ml-[25%] mr-[25%] text-white transform scale-100 transition-transform duration-500 hover:scale-110 hover:text-red-700 hover:border-red-700 cursor-pointer' href="#">Temporada 2</a>
                    <a class='mt-[20px] border-2 border-white ml-[25%] mr-[25%] text-white transform scale-100 transition-transform duration-500 hover:scale-110 hover:text-red-700 hover:border-red-700 cursor-pointer' href="#">Temporada 3</a>
                </div>

                <p class='flex text-center justify-center mt-[20px] text-white sm:pt-[5%]'>" Ninguém nunca me deu uma chance. Este é o problema dessa cidade: todo mundo está com medo de se levantar e fazer a coisa certa... " </p>
                
                <div className="btn-box2 flex justify-center mt-[30px] items-center border-2 bg-white ml-[25%] mr-[25%] rounded-[20px] py-[2%] sm:mt-[5%] transform scale-100 transition-transform duration-500 hover:scale-110 hover:bg-red-700 hover:border-black hover:font-bold hover:text-white  cursor-pointer ">
                    <img class='size-[20px] mr-[5px] mt-[5px]' src="./src/assets/play-botao.png" alt="botão play"/>

                    <div>
                        <h6 class='text-[20px]'>Assistir</h6>
                        
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Meio