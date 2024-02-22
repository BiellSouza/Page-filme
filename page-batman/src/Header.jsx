function Header () {
    return (
        <header class='flex flex-row justify-between items-center text-lg'>
            <a href="#"><img class='size-[40px] ml-[5px] mt-[5px]' src="./src/assets/Morcegos.png" alt="" /></a>
            <nav className="navigation flex ">
                <ul class='flex flex-row gap-[20px] items-center'>
                    <li><a class='hover:text-red-700 transition-[0.2s]' href="#">Home</a></li>
                    <li><a class='hover:text-red-700 transition-[0.2s]' href="#">Films</a></li>
                    <li><a class='hover:text-red-700 transition-[0.2s]' href="#">Series</a></li>
                    <li><a class='hover:text-red-700 transition-[0.2s]' href="#">Suport</a></li>
                    <a class='flex mt-[5px] pr-[10px] hover:text-red-700 transition-[0.2s]' href="#"><ion-icon name="search-outline"></ion-icon></a>
                    <img class='hidden' src="" alt="perfil" />
                </ul>
            </nav>
        </header>
    )
}

export default Header