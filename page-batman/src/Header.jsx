function Header () {
    return (
        <header class=' bg-black flex flex-row justify-between items-center text-lg md:text-4xl'>
            <a href="#"><img class='size-[40px] ml-[5px] mt-[5px] md:size-[100px] md:mt-[15px] lg:size-[100px] lg:mt-[1px] 2xl:size-[130px] 2xl:mt-[1px]' src="./src/assets/Batman-logo.png" alt="" /></a>
            <nav className="navigation flex ">
                <ul class='flex flex-row gap-[20px] items-center md:gap-[40px] lg:gap-[70px] 2xl:gap-[80px] 2xl:text-[50px]'>
                    <li><a class='text-white hover:text-red-700 transition-[0.2s]' href="#">Home</a></li>
                    <li><a class='text-white hover:text-red-700 transition-[0.2s]' href="#">Films</a></li>
                    <li><a class='text-white hover:text-red-700 transition-[0.2s]' href="#">Series</a></li>
                    <li><a class='text-white hover:text-red-700 transition-[0.2s]' href="#">Suport</a></li>
                    <a class='text-white flex mt-[5px] pr-[10px] md:pr-[20px] lg:pr-[30px] 2xl:pr-[2px] hover:text-red-700 transition-[0.2s]' href="#"><ion-icon name="search-outline"></ion-icon></a>
                    <img class='hidden md:hidden lg:hidden 2xl:block 2xl:size-[70px] 2xl:mr-[10px] 2xl:relative 2xl:right-[20px]' src="./src/assets/netflix-logo.png" alt="perfil" />
                </ul>
            </nav>
        </header>
    )
}

export default Header