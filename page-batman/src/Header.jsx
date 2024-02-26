function Header () {
    return (
        <header class=' bg-black flex flex-row justify-between items-center text-lg w-[100%] '>
            <a href="#"><img class='size-[50%] ml-[5%] mt-[5%]  ' src="./src/assets/Batman-logo.png" alt="" /></a>
            <nav className="navigation flex ">
                <ul class='flex flex-row gap-[20px] items-center md:gap-[40px] lg:gap-[70px] '>
                    <li><a class='text-white hover:text-red-700 transition-[0.2s]' href="#">Home</a></li>
                    <li><a class='text-white hover:text-red-700 transition-[0.2s]' href="#">Films</a></li>
                    <li><a class='text-white hover:text-red-700 transition-[0.2s]' href="#">Series</a></li>
                    <li><a class='text-white hover:text-red-700 transition-[0.2s]' href="#">Suport</a></li>
                    <a class='text-white flex mt-[5px] pr-[10px]  hover:text-red-700 transition-[0.2s]' href="#"><ion-icon name="search-outline"></ion-icon></a>
                    <img class='hidden ' src="./src/assets/netflix-logo.png" alt="perfil" />
                </ul>
            </nav>
        </header>
    )
}

export default Header