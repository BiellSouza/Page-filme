function Footer() {
    return (
        <footer className="final bg-black w-[100%] pt-[10%] flex mb-[5%]">
            <section className="cards w-[100%] flex flex-col items-center">
                <div className="card w-[50%] sm:w-[40%] transform scale-100 transition-transform duration-500 hover:scale-110 cursor-pointer"><img src="./src/assets/bat-1.jpg" alt="imagens" /></div>
                <div className="card w-[50%] pt-[5%] sm:w-[40%] transform scale-100 transition-transform duration-500 hover:scale-110 cursor-pointe"><img src="./src/assets/bat-2.jpg" alt="imagens" /></div>
                <div className="card w-[50%] pt-[5%] sm:w-[40%] transform scale-100 transition-transform duration-500 hover:scale-110 cursor-pointe"><img src="./src/assets/bat-3.jpg" alt="imagens" /></div>
                <div className="card w-[50%] pt-[5%] sm:w-[40%] transform scale-100 transition-transform duration-500 hover:scale-110 cursor-pointe"><img src="./src/assets/bat-4.jpg" alt="imagens" /></div>
            </section>
        </footer>
    )
}

export default Footer 