export function NavBar(){
    const navBarLi = document.querySelectorAll("li")
    const sections = document.querySelectorAll("section")
    let idxSec = 0

        // Verifica se os elementos existem
        if (navBarLi.length === 0 || sections.length === 0) {
            console.error("Elementos 'li' ou 'section' não encontrados no DOM.");
            return;
        }
    
        // Itera sobre os elementos li
        navBarLi.forEach((li, index) => {
            li.addEventListener("click", () => {
                if (sections[index]) {
                    sections[index].scrollIntoView({ behavior: "smooth" });
                } else {
                    console.error(`Seção correspondente ao índice ${index} não encontrada.`);
                }
            });
        });
    }

