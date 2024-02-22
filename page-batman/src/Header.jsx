function Header () {
    return (
        <header class='flex flex-row justify-between items-center text-lg md:text-4xl'>
            <a href="#"><img class='size-[40px] ml-[5px] mt-[5px] md:size-[100px] md:mt-[15px] lg:size-[100px] lg:mt-[1px]' src="./src/assets/Morcegos.png" alt="" /></a>
            <nav className="navigation flex ">
                <ul class='flex flex-row gap-[20px] items-center md:gap-[40px] lg:gap-[70px]'>
                    <li><a class='hover:text-red-700 transition-[0.2s]' href="#">Home</a></li>
                    <li><a class='hover:text-red-700 transition-[0.2s]' href="#">Films</a></li>
                    <li><a class='hover:text-red-700 transition-[0.2s]' href="#">Series</a></li>
                    <li><a class='hover:text-red-700 transition-[0.2s]' href="#">Suport</a></li>
                    <a class='flex mt-[5px] pr-[10px] md:pr-[20px] lg:pr-[30px] hover:text-red-700 transition-[0.2s]' href="#"><ion-icon name="search-outline"></ion-icon></a>
                    <img class='hidden md:hidden' src="" alt="perfil" />
                </ul>
            </nav>
        </header>
    )
}

export default Header